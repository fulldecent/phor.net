import { defineConfig } from "html-validate";
import NiceCheckersPlugin from "@fulldecent/nice-checkers-plugin";

export default defineConfig({
  plugins: [NiceCheckersPlugin],
  extends: ["html-validate:prettier", "nice-checkers-plugin:recommended"],
  rules: {
    "allowed-links": [
      "error",
      {
        allowExternal: {
          exclude: ["\\\\?utm_source=chatgpt.com"],
        },
        allowRelative: {
          exclude: [".htm[l]?$"],
        },
        allowAbsolute: {
          exclude: [".htm[l]?$"],
        },
      },
    ],
    "nice-checkers/external-links": [
      "error",
      {
        skipRegexes: ["dont-check-this.example.com"],
      },
    ],
    "wcag/h37": [
      "error",
      {
        allowEmpty: false,
        alias: [],
      },
    ],
    // TODO: cut this over to "error" once remaining PNG/JPEG/GIF/MP3 (and other dirty
    // asset paths) are converted to WebP/SVG/WebM. Not enforced on this site yet.
    "nice-checkers/match-regex": [
      "warn",
      {
        mustNotMatch: ["\\.(?:png|jpe?g|gif|woff|eot|ttf|htm|ogv|mp4|mp3)(?:[\"'?#]|$)"],
      },
    ],
  },
});
