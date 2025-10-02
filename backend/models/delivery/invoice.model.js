const mongoose = require("mongoose");

const deliverInvoiceSchema = new mongoose.Schema({
  delivery_no: {
    type: mongoose.Schema.ObjectId,
    ref: 'DeliveringModel',
    unique: true
  },
  invoice_no: {
    type: String,
    unique: true,
    index: true
  },
  invoice_date: {
    type: Date,
    default: mongoose.now(),
    required: true,
  },
  POID: {
    type: mongoose.Schema.ObjectId,
    ref: 'PurchaseOrderModel',
    unique: false
  },
  Goods: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ItemModel",
      },
    ],
    default: [],
    required: true,
  },
  from_address: {
    type: String,
    default: "",
    required: true,
  },
  to_address: {
    type: String,
    default: "",
    required: true,
  },
});

module.exports = mongoose.model("DeliverInvoiceModel", deliverInvoiceSchema);