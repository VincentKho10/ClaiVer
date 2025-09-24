const winston = require('winston'),
    expressWinston = require('winston-express');

const path = require('path');
const fs = require('fs');
const { timeStamp } = require('console');

const Logger = (log_dir, file_name) => {
    try {

        const today = new Date();
        console.log(today)
        const logDir = path.join(log_dir, `${today.getDate()}${today.getMonth()}${today.getFullYear()}_${file_name}.log`);
        console.log(logDir)

        if (!fs.existsSync(log_dir)) {
            fs.mkdirSync(log_dir);
        }

        const logger_transports = [
            new winston.transports.Console({
                level: "info"
            }),
            new winston.transports.File({
                filename: logDir,
                level: "info"
            }),
            new winston.transports.File({
                filename: logDir,
                level: "error"
            })
        ]

        const loggerFormat = winston.format.printf(({ level, message, timestamp }) => {
            return `${timestamp}\t[ ${level} ]\t${message}`
        });

        return winston.createLogger({
            transports: logger_transports,
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.json(),
                winston.format.timestamp({ format: "HH:mm:ss" }),
                loggerFormat
            )
        })
    } catch (error) {
        next(error)
    }
}
module.exports = { Logger };