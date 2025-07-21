const express = require("express")
const crypto = require("crypto");
const { generateController } = require("../controllers/barcode/generate.controller");
const { showController } = require("../controllers/barcode/show.controller");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "barcode home page" });
});




router.post("/generate", generateController);

router.post("/show", showController);

module.exports = router;
