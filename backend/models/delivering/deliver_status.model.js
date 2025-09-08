import express from "express";
import mongoose from "mongoose";

const deliverStatusSchema = new mongoose.Schema(
  {
    status: {
      type: [String],
      default: ["Request", "Deliver", "Invoice", "Payment"],
    },
  }
);

module.exports = mongoose.model("DeliverStatusModel", deliverStatusSchema);
