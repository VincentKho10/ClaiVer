const path = require("path");
const { format, createLogger, transports } = require("winston");
const fs = require("fs");
const { Logger } = require("./logger");


const ErrorHandler = (err, req, res, next) => {
  const logDir = "ErrLogSys";
  const logger = Logger(logDir, "err")
  logger.error(`${err.message}`)
  res.status(500).json({"message": "Internal Server Error"})
};

module.exports = ErrorHandler;
