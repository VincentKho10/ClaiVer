const express = require('express')
const crypto = require("crypto");

const hashData = (data, salt, algorithm="sha256")=>{
  const hash = crypto.createHash(algorithm)
  hash.update(data)
  return hash.digest("hex")
}

module.exports = {hashData}