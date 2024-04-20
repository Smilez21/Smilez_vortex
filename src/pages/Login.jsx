// Login.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
      // Redirect to dashboard upon successful login
      navigate("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex relative md:bg-gray-100 bg-gray-200 flex-col items-center justify-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md w-full md:max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded px-3 py-2 mb-4 w-full"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded px-3 py-2 mb-4 w-full"
          />
        </div>
        <button
          onClick={handleLogin}
          className="bg-gray-500 w-full h-[3rem] py-4 flex justify-center items-center text-white px-4 rounded text-bold hover:bg-gray-600 hover:text-white"
        >
          Login
        </button>
        <p className="mt-4 md:text-black leading-trim tracking-wide font-general-sans text-base leading-5">
          Don't have an account
          <Link
            className="text-[#066163] font-medium ml-2 text-center"
            to="/signup"
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
