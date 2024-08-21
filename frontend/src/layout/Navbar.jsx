import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import imageurl from '../assets/Photos/kross-logo.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navBackground, setNavBackground] = useState('bg-transparent');

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setNavBackground('bg-white shadow-md'); // Change background to white with shadow after scrolling
      } else {
        setNavBackground('bg-transparent'); // Transparent background when at the top
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${navBackground} fixed w-full z-10 top-0 py-3 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/">
              <img src={imageurl} alt="Kross International" className="h-8 w-auto" />
            </Link>
          </div>
          <div className="block lg:hidden relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
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
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 shadow-lg rounded-lg">
                <Link
                  to="/aboutus"
                  className="block text-black  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About Us
                </Link>
                <Link
                  to="/products"
                  className="block text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Products
                </Link>
                <Link
                  to="/infrastructure"
                  className="block text-black  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Infrastructure
                </Link>
                <Link
                  to="/contact"
                  className="block text-black  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
              </div>
            )}
          </div>

          {/* Regular Navbar Links for Desktop */}
          <div className="hidden lg:flex lg:items-center lg:w-auto">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/aboutus"
                className="text-black  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About Us
              </Link>
              <Link
                to="/products"
                className="text-black  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Products
              </Link>
              <Link
                to="/infrastructure"
                className="text-black  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Infrastructure
              </Link>
              <Link
                to="/contact"
                className="text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
