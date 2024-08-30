import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';
import image1 from '../assets/Photos/download1.jpg'


const timelineItems = [
  {  text: 'Established KROSS INTERNATIONAL with a capacity to manufacture 50,000 Sealing Rings / annum. ', image:image1, year:"1987" },
  {  text: 'Awarded ” G. S. Parkhe Industrial Merit Award “ by Maratha Chember of Commerce & Industries for Manufacturing innovative Product (Import Substitution ).  Awarded ” First award for Best Small Scale Industries of the district “ by DIC, Government of Maharashtra, Mumbai', year: "1988" ,image:image1},
  {  text: 'AwardedÂ “ Dadasaheb Rawal Award “ Instituted by Maharashtra of Commerce, Mumbai for Excellence in individual entrepreneurship ', image:image1, year:"1989" },
  {  text: ' Awarded ” Kohinoor Ratna Award “ Instituted by All India Economic Forum, New Delhi for excellence in individual Entrepreneurship for Import substitution, making the country self-reliant', image:image1, year:"1990" },
  {  text: 'Awarded ” Udyog Jyoti Award “ Instituted by All India Economic Forum, New Delhi for excellence in individual Entrepreneurship for Import substitution. ', image:image1, year:"1991" },
  {  text: ' KROSS INTERNATIONAL certified to ISO:9002 by BVQI.', image:image1, year:"1997" },
  {  text: 'Recipient of Rashtriya Samman Patra instituted by Ministry of Finance, Government of India, towards the economic contribution of the country. ', image:image1, year:"2000" },
  {  text: 'KROSS INTERNATIONAL was certified ISO:9001:2000. ', image:image1, year:"2001" },
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
  className={`absolute top-1/2 w-72 h-0.5 bg-gray-300 transform ${index % 2 === 0 ? 'left-1/2' : 'right-1/2'} ${
    index % 2 === 0 ? '-translate-x-1/2' : 'translate-x-1/2'
  }`}
></div>

{/* Year Container */}
<div className={`absolute top-1/2 ${index % 2 === 0 ? 'left-1/2' : 'right-1/2'} transform ${
  index % 2 === 0 ? 'translate-x-[350%]' : '-translate-x-[350%]'
} -translate-y-1/2`}>
  <div className="text-gray-500 text-xl">
    {item.year}
  </div>
</div>
        
        {/* Card Container */}
        <div className={`relative w-96 h-64 perspective-500 ${index % 2 === 0 ? 'ml-4' : 'mr-4'}`}>
          <div className="w-full h-full transition-transform duration-700 transform-style-preserve-3d group hover:rotate-y-180">
            <div className="absolute w-full h-full bg-white text-blue-900 text-center text-xl flex items-center justify-center border rounded-lg backface-hidden">
              <h2>{item.text}</h2>
            </div>
            <div className="absolute w-full h-full bg-white text-center text-xl flex items-center justify-center border rounded-lg rotate-y-180 backface-hidden">
              {/* Check if an image exists and render it */}
              {item.image && <img src={item.image} alt="Timeline Item" className="w-full h-full object-contain" />}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  

  );
};

export default Timeline;
