import React from 'react';
import { useLocation } from 'react-router-dom';


const HeroSection = () => {
  const location = useLocation();

  const renderHeroSection = () => {
    switch (location.pathname) {
      case '/':
        return (
          <section className="relative h-screen bg-gray-800">
          <img
            src="src\assets\Photos\Oil-Seals.png" // Replace with the path to your product-related image
            alt="Hero"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-20"></div> {/* Semi-transparent overlay */}
          <div className="relative flex items-center justify-center h-full text-center text-white p-4">
            <div>
              <h1 className="text-5xl font-bold mb-4">Welcome </h1>
              <p className="text-lg mb-8">Find the perfect seals for Your needs with Kross International</p>
              
            </div>
          </div>
        </section>
        );
      case '/products':
        return (
          <section className="relative h-screen bg-gray-800">
          <img
            src="src\assets\Photos\Oil-Seals.png" // Replace with the path to your product-related image
            alt="Hero"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Semi-transparent overlay */}
          <div className="relative flex items-center justify-center h-full text-center text-white p-4">
            <div>
              <h1 className="text-5xl font-bold mb-4">Our Products</h1>
              {/* <p className="text-lg mb-8">Explore our range of high-quality oil seals</p> */}
              <a href="/about" className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark">
                Learn More
              </a>
            </div>
          </div>
        </section>
         
        );
      case '/aboutus':
        return (
          <section className="relative h-screen bg-white">
          <img
            src="src\assets\Photos\Oil-Seals.png" // Replace with the path to your product-related image
            alt="Hero"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-20"></div> {/* Semi-transparent overlay */}
          <div className="relative flex items-center justify-center h-full text-center text-white p-4">
            <div>
              <h1 className="text-5xl font-bold mb-4">About Us</h1>
              {/* <p className="text-lg mb-8">Learn more about our history and mission</p> */}
              
            </div>
          </div>
        </section>
          
        );
      default:
        return null; // No Hero section for other routes
    }
  };

  return renderHeroSection();
};

export default HeroSection;
