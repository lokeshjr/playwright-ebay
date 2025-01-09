class Logger {
  static info(message) {
    console.log(`[INFO] ${message}`);
  }
  static error(message) {
    console.error(`[ERROR] ${message}`);
  }
  static success(message) {
    console.log(`[SUCCESS] ${message}`);
  }
}
module.exports = { Logger };
