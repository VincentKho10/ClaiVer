const express = require("express");
const {
  createDeliveryController,
  updateDeliveryController,
  getAllDeliveryController,
  getDeliveryController,
} = require("../controllers/delivering/crud/create.controller");

const router = express.Router();

router.post("/create", createDeliveryController);
router.post("/:id", updateDeliveryController);
router.get("/", getAllDeliveryController);
router.get("/:id", getDeliveryController);

module.exports = router;
