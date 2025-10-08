const express=  require('express')
const mongoose = require('monsoose')

const purchaseScheme = new mongoose.Schema(
    {
        PO: {
            type: String,
            required: true,
        },
        
    }
)

module.exports = mongoose.model("Purchase", purchaseScheme)