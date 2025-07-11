var express = require("express")
var mongoose = require("mongoose");
let db;
let client;

const initMongoDb = async (uri) => {
    await mongoose.connect(uri);
};

module.exports = { initMongoDb };
