import React from 'react';
import { useLocation } from 'react-router-dom';
import oilSealsImg from '../assets/Photos/Oil-Seals.png';

const HeroSection = () => {
  const location = useLocation();

  const renderHeroSection = () => {
    switch (location.pathname) {
      case '/':
        return (
          <section className="relative h-screen bg-gray-800 overflow-hidden">
            <img
              src={oilSealsImg}
              alt="Hero"
              className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-20 md:opacity-30 lg:opacity-40"></div> {/* Semi-transparent overlay */}
            <div className="relative flex flex-col items-center justify-center h-full text-center text-white p-4 md:p-6 lg:p-8">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Welcome</h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8">Find the perfect seals for your needs with Kross International</p>
              </div>
            </div>
          </section>
        );
      case '/products':
        return (
          <section className="relative h-screen bg-gray-800 overflow-hidden">
            <img
              src={oilSealsImg}
              alt="Hero"
              className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gray-600 opacity-50"></div> {/* Semi-transparent overlay */}
            <div className="relative flex flex-col items-center justify-center h-full text-center text-white p-4 md:p-6 lg:p-8">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Our Products</h1>
                
              </div>
            </div>
          </section>
        );
      // Uncomment and adjust for the '/aboutus' route if needed
      // case '/aboutus':
      //   return (
      //     <section className="relative h-screen bg-white overflow-hidden">
      //       <img
      //         src={oilSealsImg}
      //         alt="Hero"
      //         className="absolute inset-0 object-cover w-full h-full"
      //       />
      //       <div className="absolute inset-0 bg-gray-100 opacity-20"></div> {/* Semi-transparent overlay */}
      //       <div className="relative flex flex-col items-center justify-center h-full text-center text-black p-4 md:p-6 lg:p-8">
      //         <div>
      //           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About Us</h1>
      //         </div>
      //       </div>
      //     </section>
      //   );
      default:
        return null; // No Hero section for other routes
    }
  };

  return renderHeroSection();
};

export default HeroSection;
