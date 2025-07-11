const express = require("express");
const barcodeRoute = require("./routes/barcode.route");
const { initMongoDb } = require("./models/connection");

const app = express();
const port = 3000;
const hostname = "127.0.0.1";
const protocol = "http://";

initMongoDb("mongodb://localhost:27017/development");

app.use(express.json());

app.get("/", (req, res) => res.send("hellow"));
app.use("/barcode", barcodeRoute);

app.listen(port, hostname, () => {
  console.log(`Server running on ${protocol}${hostname}:${port}`);
});
