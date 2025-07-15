const express = require("express")
const QRCode = require("qrcode")

const generateQr = (data) => {
    const qrDataUrl = QRCode.toDataURL(data,{
        width: 256,
        errorCorrectionLevel: 'H',
    });
    return qrDataUrl
}

module.exports = {generateQr}