// Generates the VS Code Yarn SDK during postinstall.
//
// `yarn dlx @yarnpkg/sdks` cannot do this: @yarnpkg/sdks@3.3.1 depends on
// @yarnpkg/core@^4.9.1, and 4.9.2's published manifest depends on got through a
// patch: locator whose file lives only in the Yarn repository.
import { spawnSync } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const rootPackage = JSON.parse(readFileSync(path.join(projectRoot, "package.json"), "utf8"));
const tempRoot = mkdtempSync(path.join(tmpdir(), "phor-net-sdks-"));

const childEnv = { ...process.env };
// The parent install injects its Plug'n'Play loader. The temporary project must resolve on its own.
delete childEnv.NODE_OPTIONS;

function runYarn(args) {
  const yarnBin = process.env.npm_execpath || "yarn";
  const result = spawnSync(yarnBin, args, { cwd: tempRoot, env: childEnv, stdio: "inherit" });
  if (result.error) {
    throw result.error;
  }
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

try {
  writeFileSync(
    path.join(tempRoot, "package.json"),
    `${JSON.stringify(
      {
        packageManager: rootPackage.packageManager,
        dependencies: {
          "@yarnpkg/sdks": "3.3.1",
        },
        // Last @yarnpkg/core release whose got dependency is a normal semver range.
        resolutions: {
          "@yarnpkg/core": "4.9.1",
        },
      },
      null,
      2,
    )}\n`,
  );
  writeFileSync(path.join(tempRoot, ".yarnrc.yml"), "enableScripts: true\nnodeLinker: pnp\nnpmMinimalAgeGate: 0\n");
  runYarn(["install"]);
  runYarn(["sdks", "vscode", "--cwd", projectRoot]);
} finally {
  rmSync(tempRoot, { recursive: true, force: true });
}
