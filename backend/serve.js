const express = require("express");
const barcodeRoute = require("./routes/barcode.route");
const deliveryRoute = require("./routes/delivery.route");
const { initMongoDb } = require("./models/connection");
const path = require('path')

const app = express();
const port = 3000;
const hostname = "127.0.0.1";
const protocol = "http://";

initMongoDb("mongodb://localhost:27017/development");
app.use(express.json());

app.use("/barcode", barcodeRoute);
app.use("/delivery", deliveryRoute);

app.use((err,req,res,next)=>{
  console.error(err.statusMessage)
})

app.listen(port, hostname, () => {
  console.log(`Server running on ${protocol}${hostname}:${port}`);
});
