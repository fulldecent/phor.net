import { parentPort } from "worker_threads";

let htmlValidate;
let formatter;

async function init() {
  const hv = await import("html-validate");
  const resolver = hv.esmResolver();
  const loader = new hv.FileSystemConfigLoader([resolver]);
  htmlValidate = new hv.HtmlValidate(loader);
  formatter = hv.formatterFactory("text");
}

parentPort.on("message", async (data) => {
  if (!htmlValidate) {
    await init();
  }

  const { filePath, workerId } = data;

  try {
    const report = await htmlValidate.validateFile(filePath);

    const result = {
      workerId,
      filePath,
      success: report.valid,
      message: report.valid ? `✅ ${filePath}` : formatter(report.results),
      isValid: report.valid,
      report: report,
    };

    parentPort.postMessage(result);
  } catch (error) {
    const result = {
      workerId,
      filePath,
      success: false,
      message: `❌ Error validating: ${error.message || error}`,
      isValid: false,
    };

    parentPort.postMessage(result);
  }
});
