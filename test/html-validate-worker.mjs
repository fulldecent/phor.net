import { parentPort } from "worker_threads";
import { HtmlValidate, FileSystemConfigLoader, formatterFactory, esmResolver } from "html-validate";

const resolver = esmResolver();
const loader = new FileSystemConfigLoader([resolver]);
const htmlValidate = new HtmlValidate(loader);
const formatter = formatterFactory("text");

parentPort.on("message", async (data) => {
  const { filePath, workerId } = data;

  try {
    const report = await htmlValidate.validateFile(filePath);
    const formatted = formatter(report.results).trim();

    parentPort.postMessage({
      workerId,
      filePath,
      isValid: report.valid,
      warningCount: report.warningCount,
      message: formatted,
    });
  } catch (error) {
    parentPort.postMessage({
      workerId,
      filePath,
      isValid: false,
      warningCount: 0,
      message: `Error validating: ${error.message || error}`,
    });
  }
});
