import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/dashboard">MyDashboard</Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link
            to="/dashboard"
            className="hover:text-blue-600 transition duration-200"
          >
            Dashboard
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-600 transition duration-200"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-600 transition duration-200"
          >
            Contact
          </Link>
        </div>

        {/* Right side logout link */}
        <div>
          <Link
            to="/" // or your redirect route after logout
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium shadow-md transition duration-200 hover:shadow-lg"
          >
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
