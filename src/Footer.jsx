import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10 mt-12">
      <div className="container mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About / Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">MyDashboard</h2>
          <p className="text-gray-400">
            A modern dashboard application providing insights, stats, and easy navigation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/dashboard" className="hover:text-blue-500 transition duration-200">Dashboard</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-500 transition duration-200">About</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500 transition duration-200">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Contact</h3>
          <p>Email: support@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} MyDashboard. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
