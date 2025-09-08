const express = require("express");
const mongoose = require("mongoose");

const deliverSchema = new mongoose.Schema({
  delivery_no: {
    type: String,
    default: "",
    required: true,
  },
  delivery_date: {
    type: Date,
    default: 0,
    required: true,
  },
  request_date: {
    type: Date,
    default: 0,
    required: true,
  },
  POID: {
    type: String,
    default: "",
    required: true,
  },
  Goods: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ItemModel",
      },
    ],
    default: "",
    required: true,
  },
  status: {
    type: String,
    default: "Request",
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

module.exports = mongoose.model("DeliveryModel", deliverSchema);