const express = require("express");
const Razorpay = require("razorpay");
const router = express.Router();
require("dotenv").config();

// ✅ Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});

// ✅ Create Razorpay Order
router.post("/order", async (req, res) => {
  try {
    const { amount } = req.body;

    const options = {
      amount: amount * 100, // convert to paise
      currency: "INR",
      receipt: `receipt_${Math.floor(Math.random() * 1000000)}`,
    };

    const order = await razorpay.orders.create(options);
    res.status(200).json(order);
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Failed to create order" });
  }
});

module.exports = router;
