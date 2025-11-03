import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Signup() {
  const userDetail = {
    name: "",
    email: "",
    password: "",
  };
  const [data, setData] = useState(userDetail);

  const navigate = useNavigate();

  const handleforminput = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);

    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.name == "" || data.email == "" || data.password == "") {
      // alert('please enter details');
      Swal.fire({
        icon: "warning",
        title: "Incomplete Details",
        text: "Please enter your name, email, and password!",
        confirmButtonColor: "#3085d6",
      });
    } else {
      //create empty array first in local storage for storing multiple data in local storage.
      const getData = JSON.parse(localStorage.getItem("user") || "[]");
      // console.log(getData)

      let arr = [];
      arr = [...getData];
      arr.push(data);

      localStorage.setItem("user", JSON.stringify(arr));

      // alert('signup successfully')
      // navigate('/login')
      Swal.fire({
        icon: "success",
        title: "Signup Successful!",
        text: "You can now login.",
        showConfirmButton: false,
        timer: 1500,
      });

      // Redirect after short delay
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl flex flex-col md:flex-row w-full max-w-6xl overflow-hidden">
        {/* Left Side - Illustration */}
        <div className="md:w-1/2 bg-gray-50 flex items-center justify-center p-10">
          <img
            src="signup-side-image02.jpg"
            alt="Sign up illustration"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Sign Up
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                onChange={handleforminput}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                onChange={handleforminput}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                onChange={handleforminput}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300 animate-bounce hover:animate-none"
            >
              Sign Up
            </button>

            <p className="text-center text-sm text-gray-600 mt-5">
              Already have an account?{" "}
              <Link to="/" className="text-blue-600 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
