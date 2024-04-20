import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full z-10 md:p-4 ${
        scrolling ? "bg-opacity-40 bg-white" : ""
      }`}
      style={{ backdropFilter: scrolling ? "blur(10px)" : "none" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4 font-monts">
          <p className="text-gray-700 text-3xl font-bold">
            Nourish
            <span className="text-gray-500 text-3xl font-bold">together</span>
          </p>
          {/* Responsive Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-700 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-5">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-400 text-[1.2rem] font-monts font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-gray-400 text-[1.2rem] font-monts font-medium"
            >
              About
            </Link>
            <Link
              to="/careers"
              className="text-gray-600 hover:text-gray-400 text-[1.2rem] font-monts font-medium"
            >
              Careers
            </Link>
            <Link to="/signup">
              <button className="bg-gray-700 hover:bg-gray-400 text-white font-medium py-2 px-6 rounded-[1rem] text-[1.2rem] font-monts">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
        {/* Responsive Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-700 py-2">
            <Link
              to="/"
              className="block text-white px-4 py-2 font-monts font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-white px-4 py-2 font-monts font-medium"
            >
              About
            </Link>
            <Link
              to="/careers"
              className="block text-white px-4 py-2 font-monts font-medium"
            >
              Careers
            </Link>
            <Link to="/signup">
              <button className="pt-2 bg-gray-700 hover:bg-gray-400 text-white font-medium py-4 md:px-6 md:rounded-[2rem] rounded-lg text-[1.2rem] font-monts w-full sm:w-auto items-start">
                Get Started
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
