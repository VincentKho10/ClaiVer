const express = require("express");
const {
  createDeliverItemController,
  updateDeliverItemController,
  getAllDeliverItemController,
  getDeliverItemController,
  deleteDeliverItemController,
} = require("../controllers/crud/deliver/deliver_item-crud.controller");

const {
  getAllDeliverController, 
  getDeliverController, 
  createDeliverController,
  deleteDeliverController,
  updateDeliverController, 
  getAllPagedDeliverController,
} = require("../controllers/crud/deliver/deliver-crud.controller");

const {
  getAllDeliverStatusController,
  getDeliverStatusController,
  createDeliverStatusController,
  updateDeliverStatusController,
  deleteDeliverStatusController,
} = require("../controllers/crud/deliver/deliver_status-crud.controller")

const router = express.Router();

router.get("/item/", getAllDeliverItemController);
router.get("/item/:id", getDeliverItemController);
router.post("/item/", createDeliverItemController);
router.put("/item/:id", updateDeliverItemController);
router.delete("/item/:ids", deleteDeliverItemController);

router.get("/deliv", getAllDeliverController)
router.get('/deliv/paged/:pages/:page', getAllPagedDeliverController)
router.get("/deliv/:id", getDeliverController)
router.post("/deliv/", createDeliverController)
router.put("/deliv/:id", updateDeliverController)
router.delete("/deliv/:ids", deleteDeliverController)

router.get("/status/", getAllDeliverStatusController)
router.get('/status/:id', getDeliverStatusController)
router.post('/status/', createDeliverStatusController)
router.put('/status/:id', updateDeliverStatusController)
router.delete('/status/:id', deleteDeliverStatusController)

module.exports = router;
