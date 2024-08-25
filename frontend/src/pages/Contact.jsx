import React, { useState } from 'react';
import axios from 'axios';
import companyimage from '../assets/Photos/company.jpg'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', formData); t
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting contact form:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto text-center py-20">
          <h1 className="text-3xl font-bold">Contact Us</h1>
        </div>
      <main className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row">
            {/* Contact Form Section */}
            <section className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-4">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Get in Touch !</h2>
                <p className="mb-6 text-gray-700">
                   Whether you have a question, feedback, or simply want to get in touch, we're here to help. Please feel free to reach out to us using the form below, and our team will respond as soon as possible. Your thoughts and inquiries are important to us!
                </p>
                {isSubmitted ? (
                  <div className="bg-white shadow-lg rounded-lg p-6 mb-4 text-center">
                    <p className="text-green-600">Thank you for contacting us! We will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        rows="4"
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </section>

            {/* Company Image Section */}
            <section className="lg:w-1/2">
              <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-center">
                <img
                  src={companyimage} // Replace with the actual path to your image
                  alt="Company"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </section>
          </div>

          {/* Company Information Section */}
          <section className="mt-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="mb-2"><strong>Physical Address:</strong></p>
              <p className="mb-4">Kross International<br />
                1234 Industrial Road<br />
                City Name, State, ZIP Code<br />
                Country</p>

              <p className="mb-2"><strong>Email:</strong></p>
              <p className="mb-4"><a href="mailto:info@krossinternational.com" className="text-primary hover:underline">info@krossinternational.com</a></p>

              <p className="mb-2"><strong>Phone:</strong></p>
              <p className="mb-4"><a href="tel:+1234567890" className="text-primary hover:underline">+1 (234) 567-890</a></p>

              <p className="mb-2"><strong>Operating Hours:</strong></p>
              <p className="mb-4">Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Closed</p>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.431626054104!2d144.95373561531908!3d-37.81720997975186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5dfb0a4c5d%3A0x5045675218ce7e33!2sKross%20International!5e0!3m2!1sen!2sin!4v1619711581975!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Kross International Location"
                ></iframe>
              </div>
            </div>
          </section>
        </div>
      </main>
      
    </div>
  );
};

export default ContactUs;
