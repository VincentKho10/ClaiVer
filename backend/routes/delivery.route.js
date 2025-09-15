const express = require("express");

const router = express.Router();

router.get("/", (req, res) =>
  res.json({ message: "Hello This Is Delivery Route" })
);

router.get("/:id", async (req, res, next)=>{
  try {
    throw new Error('error message')
  } catch (error) {
    next(error)
  }
})

module.exports = router;
