const express = require("express");
const mongoose = require("mongoose");

const deliverItemSchema = new mongoose.Schema({
  part_no:{
    type: String,
    default: "",
    required: true
  },
  name: {
    type: String,
    default: "",
    required: true,
  },
  qty: {
    type: Number,
    default: 0,
    required: true,
  },
  unit: {
    type: String,
    default: "PC",
    required: true,
  },
  unit_price: {
    type: Number,
    default: 0,
    required: true,
  },
  tax: {
    type: Number,
    default: 0,
    required: true,
  },
  description: {
    type: "String",
    default: "",
    required: true,
  }
});

deliverItemSchema.virtual('total_amount').get(()=>{
    return unit*qty
})

module.exports = mongoose.model("ItemModel", deliverItemSchema);
