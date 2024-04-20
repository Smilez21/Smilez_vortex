import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const VirtualMentor = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  useEffect(() => {
    // Retrieve username from local storage
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    } else {
      // If username is not found in local storage, redirect to login
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    // Redirect to login page upon logout
    navigate("/");
  };


  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <p>Hello {username}, welcome to your dashboard!</p>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded mt-4"
      >
        Logout
      </button>
    </div>
  );
};

export default VirtualMentor;
