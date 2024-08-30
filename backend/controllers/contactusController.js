const ContactUs = require('../models/contactusModel.js');
const nodemailer = require('nodemailer');

exports.submitContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Please fill in all fields' });
  }

  try {
    const newContact = new ContactUs({ name, email, message });
    await newContact.save();

    // Send an email notification
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'your-email@gmail.com', 
        pass: 'your-email-password',        },
    });

    const mailOptions = {
      from: email,
      to: 'your-email@gmail.com',     // Replace with the recipient's email
      subject: `New Contact Form Submission from ${name}`,
      text: `You have a new message from ${name} (${email}):\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Your message has been sent successfully!' });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ message: 'Failed to submit your message, please try again later.' });
  }
};
