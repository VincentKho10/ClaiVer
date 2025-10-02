const express = require("express");
const mongoose = require("mongoose");

const deliverStatusSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      required: true
    },
  }
);

module.exports = mongoose.model("DeliverStatusModel", deliverStatusSchema);
