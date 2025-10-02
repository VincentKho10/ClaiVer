const mongoose = require("mongoose");

const deliveringSchema = new mongoose.Schema({
  delivery_no: {
    type: String,
    default: "",
    required: true,
    unique: true,
    index: true
  },
  delivery_date: {
    type: Date,
    default: mongoose.now(),
    required: true,
  },
  POID: {
    type: mongoose.Schema.ObjectId,
    unique: false,
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

module.exports = mongoose.model("DeliveringModel", deliveringSchema);