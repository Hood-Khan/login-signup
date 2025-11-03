import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="p-6 md:p-10">
        {/* Welcome Section */}
        <div className="bg-white shadow-lg rounded-2xl p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome Back, User!
          </h1>
          <p className="text-gray-600">
            Here's a quick overview of your dashboard.
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-blue-500 text-white rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold mb-2">Total Users</h2>
            <p className="text-3xl font-bold">120</p>
          </div>

          {/* Card 2 */}
          <div className="bg-green-500 text-white rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold mb-2">Active Sessions</h2>
            <p className="text-3xl font-bold">45</p>
          </div>

          {/* Card 3 */}
          <div className="bg-yellow-500 text-white rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300">
            <h2 className="text-xl font-semibold mb-2">New Signups</h2>
            <p className="text-3xl font-bold">30</p>
          </div>
        </div>

        {/* Additional Section */}
        <div className="bg-white shadow-lg rounded-2xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Recent Activities
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex justify-between border-b py-2">
              <span>User John signed up</span>
              <span className="text-sm text-gray-400">2 hours ago</span>
            </li>
            <li className="flex justify-between border-b py-2">
              <span>User Sarah logged in</span>
              <span className="text-sm text-gray-400">3 hours ago</span>
            </li>
            <li className="flex justify-between border-b py-2">
              <span>New comment on post</span>
              <span className="text-sm text-gray-400">5 hours ago</span>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
