const pino = require("pino");

// Create a logging instance
const logger = pino({
  level:  "info" ,
  prettyPrint:   "production",
});

module.exports.logger = logger;
