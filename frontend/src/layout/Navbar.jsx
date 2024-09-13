import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imageurl from '../assets/Photos/kross-logo.png';

const DropdownMenu = ({ isOpen, closeDropdown }) => (
  <div className={`absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg ${isOpen ? 'block' : 'hidden'}`}>
    <button
      onClick={closeDropdown}
      className="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700"
      aria-label="Close"
    >
      &times;
    </button>
    <Link
      to="/aboutus"
      onClick={closeDropdown}
      className="block text-black hover:text-blue-600 hover:font-bold px-3 py-2 rounded-md text-sm font-medium"
    >
      About Us
    </Link>
    <Link
      to="/products"
      onClick={closeDropdown}
      className="block text-black hover:text-blue-600 hover:font-bold px-3 py-2 rounded-md text-sm font-medium"
    >
      Products
    </Link>
    <Link
      to="/infrastructure"
      onClick={closeDropdown}
      className="block text-black hover:text-blue-600 hover:font-bold px-3 py-2 rounded-md text-sm font-medium"
    >
      Infrastructure
    </Link>
    <Link
      to="/contact"
      onClick={closeDropdown}
      className="block text-black hover:text-blue-600 hover:font-bold px-3 py-2 rounded-md text-sm font-medium"
    >
      Contact
    </Link>
    <Link
      to="/careers"
      onClick={closeDropdown}
      className="block text-black hover:text-blue-600 hover:font-bold px-3 py-2 rounded-md text-sm font-medium"
    >
      Careers
    </Link>
    <Link
      to="/stores"
      onClick={closeDropdown}
      className="block text-black hover:text-blue-600 hover:font-bold px-3 py-2 rounded-md text-sm font-medium"
    >
      Stores
    </Link>
  </div>
);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0 py-3 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src={imageurl} alt="Kross International" className="h-12 w-auto" />
            </Link>
          </div>
          {/* Navigation Links */}
          <div className="flex-1 flex items-center justify-center space-x-4">
            <div className="hidden lg:flex lg:items-center lg:w-auto">
              <div className="flex items-baseline space-x-4">
                <Link
                  to="/aboutus"
                  className="text-black hover:text-blue-600 hover:font-bold px-3 py-2 rounded-md text-sm font-medium"
                >
                  About Us
                </Link>
                <Link
                  to="/products"
                  className="text-black hover:text-blue-600 hover:font-bold px-3 py-2 rounded-md text-sm font-medium"
                >
                  Products
                </Link>
                <Link
                  to="/infrastructure"
                  className="text-black hover:text-blue-600 hover:font-bold px-3 py-2 rounded-md text-sm font-medium"
                >
                  Infrastructure
                </Link>
                <Link
                  to="/contact"
                  className="text-black hover:text-blue-600 hover:font-bold px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
                <Link
                  to="/careers"
                  className="text-black hover:text-blue-600 hover:font-bold px-3 py-2 rounded-md text-sm font-medium"
                >
                  Careers
                </Link>
                <Link
                  to="/stores"
                  className="text-black hover:text-blue-600 hover:font-bold px-3 py-2 rounded-md text-sm font-medium"
                >
                  Stores
                </Link>
              </div>
            </div>
          </div>
          {/* Search Bar */}
          <div className="hidden lg:flex lg:items-center lg:ml-6">
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-1 border rounded-md text-sm"
            />
          </div>
          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleDropdown}
              className="text-black hover:text-gray-600 focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {/* Dropdown Menu */}
            <DropdownMenu isOpen={isOpen} closeDropdown={closeDropdown} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
