const Valkey = require("iovalkey");
const ErrorHandler = require("../../../util/errorhandler");
const { Logger } = require("../../../util/logger");

const logger = Logger("ErrLogSys/Db", "valkey")

const valkeyClient = new Valkey({
  password: process.env.DEV_VALKEY_SECRET,
  host: process.env.DEV_VALKEY_HOSTNAME,
  port: process.env.DEV_VALKEY_PORT,
});

valkeyClient.on("connect", () => console.log("valkey connected"));

valkeyClient.on("error", (error) =>
  logger.error(error)
);

const initValkey = async (req,res,next) => {
  try {
    await valkeyClient.connect();
    console.log('Valkey Connected')
  } catch (error) {
    logger.error(error)
  }
};

module.exports = { valkeyClient, initValkey };
