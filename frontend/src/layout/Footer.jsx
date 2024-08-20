import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-charcoal-gray text-warm-gray py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          {/* Company Info Section */}
          <div className="mb-6 lg:mb-0">
            <h2 className="text-2xl font-bold mb-4">Kross International</h2>
            <p className="text-sm mb-4">
              Leading Manufacturer of Quality Oil Seals since 1987.
            </p>
            <p className="text-sm mb-4">
              123 Industrial Road, City, Country
            </p>
            <p className="text-sm mb-4">
              <a href="mailto:info@krossinternational.com" className="hover:underline text-warm-gray">
                info@krossinternational.com
              </a>
            </p>
            <p className="text-sm">
              <a href="tel:+1234567890" className="hover:underline text-warm-gray">
                +1 (234) 567-890
              </a>
            </p>
          </div>

          {/* Navigation Links Section */}
          <div className="mb-6 lg:mb-0 lg:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-warm-gray hover:text-light-beige">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-warm-gray hover:text-light-beige">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-warm-gray hover:text-light-beige">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-warm-gray hover:text-light-beige">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="lg:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-warm-gray hover:text-light-beige">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5zM3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 7h-2v6h2v-6zm-1-2a1 1 0 100 2 1 1 0 000-2z"/>
                </svg>
              </a>
              <a href="https://twitter.com" className="text-warm-gray hover:text-light-beige">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5zM3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 7h-2v6h2v-6zm-1-2a1 1 0 100 2 1 1 0 000-2z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" className="text-warm-gray hover:text-light-beige">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5zM3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 7h-2v6h2v-6zm-1-2a1 1 0 100 2 1 1 0 000-2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-gray pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Kross International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
