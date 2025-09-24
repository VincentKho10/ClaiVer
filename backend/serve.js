const express = require("express");

require("dotenv").config();

const barcodeRoute = require("./routes/barcode.route");
const deliveryRoute = require("./routes/delivery.route");

const { initMongoDb } = require("./models/connection/mongodb/connection");
const { initValkey } = require("./models/connection/valkey/connection");
const { ErrorHandlerEndpoint, ErrorHandlerSystem } = require("./util/errorhandler");
const { Logger } = require("./util/logger");

const port = process.env.DEV_PORT;
const hostname = process.env.DEV_HOSTNAME;
const protocol = process.env.DEV_PROTOCOL;

const app = express();

initValkey();
initMongoDb(process.env.DEV_MONGODB_URL);

app.use(express.json());
const logging = Logger("ErrLogSys", `test`);

app.use("/barcode", barcodeRoute);
app.use("/delivery", deliveryRoute);

app.use(ErrorHandlerEndpoint);

app.listen(port, hostname, async () => {
  console.log(`Server running on ${protocol}${hostname}:${port}`);
});
