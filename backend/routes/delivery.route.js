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

const {
  getAllDeliverPurchaseOrderController,
  getAllPagedDeliverPurchaseOrderController,
  getDeliverPurchaseOrderController,
  createDeliverPurchaseOrderController,
  updateDeliverPurchaseOrderController,
  deleteDeliverPurchaseOrderController,
} = require("../controllers/crud/deliver/po-crud.controller")

const {
  getAllDeliverInvoiceController,
  getAllPagedDeliverInvoiceController,
  getDeliverInvoiceController,
  createDeliverInvoiceController,
  updateDeliverInvoiceController,
  deleteDeliverInvoiceController,
} = require("../controllers/crud/deliver/invoice-crud.controller")

const {
  getAllDeliveringController,
  getAllPagedDeliveringController,
  getDeliveringController,
  createDeliveringController,
  updateDeliveringController,
  deleteDeliveringController,
} = require("../controllers/crud/deliver/delivering-crud.controller")

const router = express.Router();

router.get("/item/", getAllDeliverItemController)
router.get("/item/:id", getDeliverItemController)
router.post("/item/", createDeliverItemController)
router.put("/item/:id", updateDeliverItemController)
router.delete("/item/:ids", deleteDeliverItemController)

router.get("/base", getAllDeliverController)
router.get('/base/paged/:pages/:page', getAllPagedDeliverController)
router.get("/base/:id", getDeliverController)
router.post("/base/", createDeliverController)
router.put("/base/:id", updateDeliverController)
router.delete("/base/:ids", deleteDeliverController)

router.get("/status/", getAllDeliverStatusController)
router.get('/status/:id', getDeliverStatusController)
router.post('/status/', createDeliverStatusController)
router.put('/status/:id', updateDeliverStatusController)
router.delete('/status/:ids', deleteDeliverStatusController)

router.get("/po/", getAllDeliverPurchaseOrderController)
router.get('/po/:id', getDeliverPurchaseOrderController)
router.post('/po/', createDeliverPurchaseOrderController)
router.put('/po/:id', updateDeliverPurchaseOrderController)
router.delete('/po/:ids', deleteDeliverPurchaseOrderController)

router.get("/invoice/", getAllDeliverInvoiceController)
router.get('/invoice/:id', getDeliverInvoiceController)
router.post('/invoice/', createDeliverInvoiceController)
router.put('/invoice/:id', updateDeliverInvoiceController)
router.delete('/invoice/:ids', deleteDeliverInvoiceController)

router.get("/delivering/", getAllDeliveringController)
router.get('/delivering/:id', getDeliveringController)
router.post('/delivering/', createDeliveringController)
router.put('/delivering/:id', updateDeliveringController)
router.delete('/delivering/:ids', deleteDeliveringController)

module.exports = router;
