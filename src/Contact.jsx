import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20 px-6 md:px-20 text-center rounded-b-3xl shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contact Us
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Have questions or need support? We’re here to help. Reach out to us anytime!
        </p>
      </div>

      {/* Contact Form & Info */}
      <div className="container mx-auto px-6 md:px-20 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Send us a Message
          </h2>
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col justify-center space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600">
            We’re always here to help! You can reach us through the following channels:
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">support@example.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600">+1 (123) 456-7890</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Address</h3>
              <p className="text-gray-600">123 Main Street, City, Country</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
