import React from 'react';
import { useLocation } from 'react-router-dom';
import hero from '../assets/Videos/hero.mp4';
import oilSealsImg from '../assets/Photos/producthero.jpg'

const HeroSection = () => {
  const location = useLocation();

  const renderHeroSection = () => {
    switch (location.pathname) {
      case '/':
        return (
<section className="relative overflow-hidden">
  <div>
    <video 
      className="w-full h-auto"
      src={hero}
      autoPlay 
      muted 
      loop 
      playsInline
    >
      Your browser does not support the video tag.
    </video>
    {/* Overlay div to add the text on the video */}
    <div className="absolute inset-0 flex items-center justify-start text-left text-white p-4 md:p-6 lg:p-8">
      <div className="px-4 sm:px-8">
        <div className="">
          <div className="mb-2">
            <span className="text-red-400 text-4xl sm:text-6xl font-bold">Unmatched quality seals,</span>
          </div>
          <div className="mb-2 text-4xl font-bold">
            <span> crafted for you by</span>
          </div>
          <div>
            <span className="text-blue-500 text-4xl sm:text-6xl font-bold">Kross International</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* SVG for curved bottom, raised higher */}
  <div className="absolute bottom-0 w-full">
    <svg
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 300" 
    >
      <path
        fill="#fff"
        fillOpacity="1"
        d="M0,220L60,200C120,180,240,150,360,150C480,150,600,180,720,180C840,180,960,160,1080,140C1200,120,1320,100,1380,90L1440,80L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </svg>
  </div>
</section>





        );
      case '/products':
        return (
          <section className="relative h-[70vh] bg-gray-800 overflow-hidden"> {/* Adjusted height */}
            <img
              src={oilSealsImg}
              alt="Hero"
              className="absolute inset-0 object-cover w-full h-full"
              style={{ objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-gray-600 opacity-20"></div> {/* Semi-transparent overlay */}
            <div className="relative flex flex-col items-center justify-center h-full text-center text-white p-4 md:p-6 lg:p-8">
              <div>
                {/* <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">"Top Oil Seals – Engineered for Excellence!"</h1> */}
              </div>
            </div>
          </section>
        );
      // Uncomment and adjust for the '/aboutus' route if needed
      // case '/aboutus':
      //   return (
      //     <section className="relative h-[70vh] bg-white overflow-hidden"> {/* Adjusted height */}
      //       <img
      //         src={oilSealsImg}
      //         alt="Hero"
      //         className="absolute inset-0 object-cover w-full h-full"
      //         style={{ objectFit: 'cover' }}
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
