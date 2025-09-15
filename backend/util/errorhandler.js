const express = require("express");
const path = require("path");
const { format, createLogger, transports } = require("winston");
const { combine, label, timestamp, printf } = format;
const fs = require("fs");

const expressWinston = require("winston-express");

const loggerDebug = (debug)=>{
  const loggerFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]\t${message}`;
  });
  return createLogger({
    level: "debug",
    transports: [new transports.Console()],
    format: combine(
      format.colorize(),
      timestamp({ format: "HH:mm:ss" }),
      loggerFormat
    ),
  });
}

const ErrorHandlerEndpoint = (err, req, res, next) => {
  // console.log(err)
  res.status(500).json({ message: "Internal Server Error" });
  ErrorHandlerSystem(err);
  loggerDebug().error(err)
};

const ErrorHandlerSystem = (err) => {
  const logDir = "ErrLogSys";
  const today = new Date();
  const errLogPath = path.join(
    logDir,
    `${today.getDate()}${today.getMonth()}${today.getFullYear()}_err.log`
  );

  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
    console.log(`directory ${logDir} created.`);
  }

  const logger = createLogger({
    level: "info",
    format: format.json(),
    transports: [
      new transports.Console({
        level: "info",
      }),
      new transports.File({
        filename: errLogPath,
        level: "error",
      }),
    ],
  });

  const errobj = { id: Date.now(), err: err };
  logger.info(`Error code: ${Date.now()}`);
  logger.error(errobj);
};

module.exports = { ErrorHandlerEndpoint, ErrorHandlerSystem };
