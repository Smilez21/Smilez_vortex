// Signup.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Add this state

  const handleSignup = () => {
    // Save user data to local storage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("phoneNumber", phoneNumber);
    localStorage.setItem("password", password);

    // Redirect to login
    window.location.href = "/login";
  };

  return (
    <div className="flex relative md:bg-gray-100 bg-gray-200 flex-col items-center justify-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md w-full md:max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded px-3 py-2 mb-4 w-full"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded px-3 py-2 mb-4 w-full"
          />
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="border rounded px-3 py-2 mb-4 w-full"
          />
        </div>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"} // Toggle input type
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded px-3 py-2 mb-4 w-full pr-10"
          />
          <span
            onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
            className="text-sm text-gray-500 hover:text-gray-700 absolute right-3 top-3 cursor-pointer"
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>

        <div className="">
          <button
            onClick={handleSignup}
            className="bg-gray-500 w-full h-[3rem]flex justify-center items-center text-white px-4 py-2 rounded text-bold hover:bg-gray-600 hover:text-white"
          >
            Signup
          </button>
        </div>
        <p className="mt-4  md:text-black leading-trim tracking-wide font-general-sans text-base leading-5">
          Already have an account?
          <Link className="text-[#066163] font-medium text-center" to="/login">
            {" "}
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
