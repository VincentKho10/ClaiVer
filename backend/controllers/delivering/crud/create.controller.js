const express = require('express')

const createDeliveryController = async (req, res)=>{
    try {
        const {} = req.body;
    } catch (error) {
        console.error(error.message)
    }
}

module.exports = createDeliveryController