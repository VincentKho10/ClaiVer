const express = require("express")
const crypto = require("crypto");
const { generateController } = require("../controllers/barcode/generate.controller");
const { showController } = require("../controllers/barcode/show.controller");

const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    res.json({ message: "barcode home page" });
  } catch (error) {
    next(error)
  }
});

router.get("/:id", (req, res, next) => {
  try {
    return
  } catch (error) {
    next(error)
  }
});

router.post("/generate", generateController);

router.post("/show", showController);

module.exports = router;
