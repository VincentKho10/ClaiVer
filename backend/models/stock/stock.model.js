const express = require('express')
const mongoose = require('mongoose')

const stockSchema = new mongoose.Schema(
    {
        item_desc: {
            type: String,
            default: "",
            required: true,
        },
        qty: {
            type: String,
            required: true,
            default: 0
        },
        valuation: {
            type: Number,
            required: true,
            default: 0
        },
        Purchases: {
            type: [{ type: Schema.Types.ObjectId, ref: 'Purchase'}],
            required: false,
            default: []
        },
        Delivery: {
            type: [{ type: Schema.Types.ObjectId, ref: 'DeliveryModel'}],
            required: false,
            default: []
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Stock", stockSchema)