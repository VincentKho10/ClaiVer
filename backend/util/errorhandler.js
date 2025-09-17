const express = require("express");
const path = require("path");
const { format, createLogger, transports } = require("winston");
const { combine, label, timestamp, printf } = format;
const fs = require("fs");

const expressWinston = require("winston-express");

const loggerDebug = (transport) => {
  const logDir = "ErrLogSys";
  const today = new Date();
  let errLogPath;

  if (transport == 1) {
    errLogPath = path.join(
      logDir,
      `${today.getDate()}${today.getMonth()}${today.getFullYear()}_err.log`
    );

    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir);
      console.log(`directory ${logDir} created.`);
    }
  }

  const loggerFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level}]\t${message}`;
  });
  //0: console
  //1: save
  //2: console save
  return createLogger({
    level: "debug",
    transports:
      transport == 0
        ? new transports.Console({
            level: "info",
          })
        : new transports.File({
            filename: errLogPath,
            level: "error",
          }),
    format: combine(
      format.colorize(),
      timestamp({ format: "HH:mm:ss" }),
      loggerFormat
    ),
  });
};

const ErrorHandlerEndpoint = (err, req, res, next) => {
  const { errid, errobjs } = err;
  // console.log(err)
  res.status(500).json({ message: "Internal Server Error" });
  const errobj = {
    id: `${Date.now()}errid${errid}`,
    name: errobjs.name,
    message: errobjs.message,
    err: errobjs.stack,
  };

  ErrorHandlerSystem(err, errobj);
  loggerDebug(0).error(errobj.err);
  loggerDebug(1).error(errobj.err);
};

const ErrorHandlerSystem = (err, errobj) => {
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

  logger.info(`Error code: ${Date.now()}`);
  logger.error(errobj);
};

module.exports = { ErrorHandlerEndpoint, ErrorHandlerSystem };
