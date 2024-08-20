import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';


const timelineItems = [
  { date: '18 Dec 2023', text: 'The kitten guards the gifts.' },
  { date: '9 Dec 2023', text: 'Christmas wreath on the door.' },
  // Add more items as needed
];

const Timeline = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS
  }, []);

  return (
    <div className="relative max-w-6xl mx-auto py-8 px-4">
      {/* Central Connecting Line */}
      <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gray-300 transform -translate-x-1/2"></div>
      
      {timelineItems.map((item, index) => (
        <div
          key={index}
          className={`relative mb-10 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
          data-aos="fade-up"
        >
          {/* Line from Card to Central Line */}
          <div
            className={`absolute top-1/2 w-0.5 h-6 bg-gray-300 transform ${index % 2 === 0 ? 'left-1/2' : 'right-1/2'} ${
              index % 2 === 0 ? '-translate-x-1/2' : 'translate-x-1/2'
            }`}
          ></div>
          
          {/* Card Container */}
          <div className={`relative w-64 h-64 perspective-500 ${index % 2 === 0 ? 'ml-4' : 'mr-4'}`}>
            <div className="w-full h-full transition-transform duration-700 transform-style-preserve-3d group hover:rotate-y-180">
              <div className="absolute w-full h-full bg-white text-blue-900 text-center text-xl flex items-center justify-center border rounded-lg backface-hidden">
                <h2>{item.date}</h2>
              </div>
              <div className="absolute w-full h-full bg-blue-900 text-white text-center text-xl flex items-center justify-center rotate-y-180 backface-hidden">
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
