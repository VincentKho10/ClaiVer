const express = require("express");
const { hashData } = require("../../util/hashingalg");
const BarcodeModel = require("../../models/barcode/barcode.model");
const {generateQr} = require("../../util/generateqr");

const generateController = async (req, res) => {
  try {
    const { send_date, DNID } = req.body;
    // send_date: {
    //   type: Date,
    //   required: true,
    // },
    // DNID: {
    //   type: [String],
    //   required: true,
    // },
    // VerfID: {
    //     type: String,
    //     required: true,
    // }
    const new_barcode = new BarcodeModel({ send_date, DNID });
    new_barcode.VerfID = hashData(new_barcode._id.toString());
    // await new_barcode.save();

    res.json({
      status: "created",
      statusCode: 201,
      data: {
        qrcode: (await generateQr(new_barcode.VerfID)).split(",")[1],
      },
    });
  } catch (error) {
    console.error(error)
  }
};

module.exports = { generateController };
