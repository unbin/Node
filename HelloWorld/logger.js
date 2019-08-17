var url = "http://mylogger.io/log";

function log(message) {
  //Send and HTTP request
  console.log("[LOGGER START]\n" + message + "\n[LOGGER END]");
}

module.exports = log;
