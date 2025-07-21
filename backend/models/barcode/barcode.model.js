const express = require("express");
const mongoose = require("mongoose");

const barcodeSchema = new mongoose.Schema(
  {
    send_date: {
      type: Date,
      required: true,
    },
    DNID: {
      type: [String],
      required: true,
    },
    VerfID: {
        type: String,
        required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Barcode", barcodeSchema);
