const express = require('express');
const router = express.Router();
const ContactUs = require('../models/contactUsModel');

router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Create a new contact message document
    const newContactMessage = new ContactUs({ name, email, message });
    await newContactMessage.save();

    res.status(201).json({ success: true, message: 'Message received successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to send message', error });
  }
});

module.exports = router;
