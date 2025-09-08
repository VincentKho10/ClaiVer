const express = require("express");

const router = express.Router();

router.get("/", (req, res) =>
  res.json({ message: "Hello This Is Delivery Route" })
);

router.post("/", async (req, res, next)=>{
  try {
    
  } catch (error) {
    next(error)
  }
})

module.exports = router;
