import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20 px-6 md:px-20 text-center rounded-b-3xl shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Us
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          We are committed to providing the best services to our users. Our goal is to create a seamless and enjoyable experience for everyone.
        </p>
      </div>

      {/* Mission / Vision Section */}
      <div className="container mx-auto px-6 md:px-20 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Our Mission & Vision
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">Mission</h3>
            <p className="text-gray-600">
              To deliver a top-quality platform where users can efficiently manage their workflow and tasks.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-green-600">Vision</h3>
            <p className="text-gray-600">
              To become a trusted and innovative solution for individuals and teams worldwide.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-yellow-600">Values</h3>
            <p className="text-gray-600">
              Integrity, innovation, and user-centric design are the core principles guiding everything we do.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6 md:px-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example team member */}
            <div className="bg-gray-50 rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition duration-300">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition duration-300">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
              <p className="text-gray-600">CTO</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition duration-300">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Alice Brown</h3>
              <p className="text-gray-600">Product Manager</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
