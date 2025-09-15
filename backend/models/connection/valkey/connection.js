const express = require("express");
const mongoose = require("mongoose");
const Valkey = require("iovalkey");
const { ErrorHandlerSystem } = require("../../../util/errorhandler");

const valkeyClient = new Valkey({
  password: process.env.DEV_VALKEY_SECRET,
  host: process.env.DEV_VALKEY_HOSTNAME,
  port: process.env.DEV_VALKEY_PORT,
});

valkeyClient.on("connect", () => console.log("valkey connected"));

valkeyClient.on("error", (err) =>
  ErrorHandlerSystem(`error during connecting to valkey ${err}`)
);

const initValkey = async () => {
  try {
    await valkeyClient.connect();
  } catch (error) {
    ErrorHandlerSystem("Attempting connection failed", error);
  }
};

module.exports = { valkeyClient, initValkey };
