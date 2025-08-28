const express =require('express')
const mongoose = require('mongoose')

const deliverySchema = new mongoose.Schema(
    {
        POID: {
            type: String,
            default: "",
            required: true,
        },
        item_name: {
            type: String,
            default: "",
            required: true
        },
        qty: {
            type: Number,
            default: 0,
            required: true
        },
        unit_price: {
            type: Number,
            default: 0,
            required: true
        },
        tax: {
            type: Number,
            default: 0,
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
        }
        
    }
)

module.exports = mongoose.model("Delivery", deliverySchema)