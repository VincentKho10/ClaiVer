const mongoose = require("mongoose");

const purchaseOrderSchema = new mongoose.Schema({
  request_date: {
    type: Date,
    default: mongoose.now(),
    required: true,
  },
  POID: {
    type: String,
    default: "",
    required: true,
    index: true,
    unique: true,
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

module.exports = mongoose.model("DeliverPurchaseOrderModel", purchaseOrderSchema);