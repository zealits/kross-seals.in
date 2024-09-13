import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative bg-white text-white py-20">
      {/* SVG Curve */}
      <svg
  className="absolute top-0 left-0 w-full h-100% "
  viewBox="0 0 1440 320"
  xmlns="http://www.w3.org/2000/svg"
  fill="#004B87"
>
  <path
    fill="#004B87"
    d="M1440,0 C1440,150 720,150 0,0 L0,320 L1440,320 Z"
  />
</svg>


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          {/* Company Info Section */}
          <div className="mb-3 lg:mb-0">
            <h2 className="text-2xl font-bold mb-4">Kross International</h2>
            <p className="text-sm mb-4">
              Leading Manufacturer of Quality Oil Seals since 1987.
            </p>
            <p className="text-sm mb-2">
              123 Industrial Road, City, Country
            </p>
            <p className="text-sm mb-2">
              <a href="mailto:info@krossinternational.com" className="hover:underline text-white">
                info@krossinternational.com
              </a>
            </p>
            <p className="text-sm">
              <a href="tel:+1234567890" className="hover:underline text-white">
                +1 (234) 567-890
              </a>
            </p>
           
          </div>

          {/* Navigation Links Section */}
          <div className="mb-1 lg:mb-0 lg:w-1/3 py-10 pl-20">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="   py-28">
          <div className="pr-4 pl-36">
            <h3 className="text-lg font-semibold mb-1">Follow Us</h3>
            <div className="flex space-x-4  ">
              <a href="https://facebook.com" className="text-white">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5zM3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 7h-2v6h2v-6zm-1-2a1 1 0 100 2 1 1 0 000-2z"/>
                </svg>
              </a>
              <a href="https://twitter.com" className="text-white">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5zM3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 7h-2v6h2v-6zm-1-2a1 1 0 100 2 1 1 0 000-2z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" className="text-white">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5zM3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 7h-2v6h2v-6zm-1-2a1 1 0 100 2 1 1 0 000-2z"/>
                </svg>
              </a>
             
            </div>
            </div>
            <div >
          <p className="text-sm pt-14 text-white pl-48 ">
            &copy; {new Date().getFullYear()} Kross International. All rights reserved.
          </p>
        </div>
          </div>
        </div>
        {/* <div className="mt-0 border-t border-red-700 pt-2 text-center ">
          <p className="text-sm text-red-600">
            &copy; {new Date().getFullYear()} Kross International. All rights reserved.
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
