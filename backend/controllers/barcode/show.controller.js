const express = require("express");
const { hashData } = require("../../util/hashingalg");
const barcodeModel = require("../../models/barcode/barcode.model");

const showController = async (req, res, next) => {
  try {
    
    const { code } = req.body;
    const data = await barcodeModel.find({ VerfID: code });
    
    // console.log(data)
    if (data) {
      return res.json({
        status: "success",
        statusCode: 200,
        data,
      });
    }
    
    return res.json({
      status: "success",
      statusCode: 200,
      data: {
        message: "barcode tidak ditemukan",
      },
    });
  } catch (error) {
    next(error)
  }
};

module.exports = { showController };
