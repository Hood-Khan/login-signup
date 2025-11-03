import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name == "email") {
      setEmail(value);
    }
    if (name == "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email == "" || password == "") {
      Swal.fire({
        icon: "warning",
        title: "Missing Details",
        text: "Please enter your email and password!",
        confirmButtonColor: "#3085d6",
      });
    } else {
      const getData = JSON.parse(localStorage.getItem("user")) || [];

      let user = getData.find(
        (data) => email == data.email && password == data.password
      );

      if (user) {
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: "Welcome back!",
          showConfirmButton: false,
          timer: 1500,
        });

        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      } else {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Email or password is incorrect!",
          confirmButtonColor: "#d33",
        });
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      {/* Main Card */}
      <div className="flex bg-white shadow-2xl rounded-2xl overflow-hidden w-[1100px] max-w-[95%]">
        {/* Left Image Section */}
        <div className="w-1/2 hidden md:block">
          <img
            src="login-side-image03.jpg"
            alt="Login illustration"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">
            Login
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                onChange={handleinput}
              />
            </div>

            {/* Password */}
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
                placeholder="Enter your password"
                className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                onChange={handleinput}
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg transition duration-300 animate-bounce hover:animate-none"
            >
              Login
            </button>
          </form>

          {/* Optional Footer */}
          <p className="text-center text-gray-600 text-sm mt-8">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
