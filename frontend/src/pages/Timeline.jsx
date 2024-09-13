import React, { useRef, useState, useEffect } from 'react';

const Timeline = () => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const slider = sliderRef.current;
    let interval;
    let startScrollPosition = 0;

    // Initialize the timeline by duplicating items
    if (slider) {
      const items = Array.from(slider.children);
      items.forEach(item => slider.appendChild(item.cloneNode(true))); // Clone and append items
    }

    const autoScroll = () => {
      if (slider) {
        const maxScrollLeft = slider.scrollWidth / 2; // Adjust maxScrollLeft to half of the total scrollable width
        const currentScrollLeft = slider.scrollLeft;

        if (currentScrollLeft >= maxScrollLeft) {
          slider.scrollLeft = startScrollPosition;
        } else {
          slider.scrollBy({
            left: 2, // Increased scroll amount for faster scrolling
            behavior: 'smooth',
          });
        }
      }
    };

    interval = setInterval(autoScroll, 10); // Adjust interval for speed

    return () => clearInterval(interval);
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleArrowClick = (direction) => {
    sliderRef.current.scrollBy({
      left: direction === 'left' ? -200 : 200, // Adjusted scroll amount
      behavior: 'smooth',
    });
  };

  return (
    <section id="timeline" className="py-12 bg-light-gray text-white">
      <div className="container mx-auto text-center relative">
        {/* <h1 className="text-4xl font-bold mb-6">Fancy Timeline, Bro</h1> */}
        <div className="relative">
          {/* <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-light-gray p-2 rounded-full shadow-lg z-10"
            onClick={() => handleArrowClick('left')}
          >
            <span className="material-icons text-white">chevron_left</span>
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-light-gray p-2 rounded-full shadow-lg z-10"
            onClick={() => handleArrowClick('right')}
          >
            <span className="material-icons text-white">chevron_right</span>
          </button> */}
          <div
            ref={sliderRef}
            className="flex overflow-x-auto scrollbar-hide py-4 relative"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp}
          >
            {[ // Original timeline items
                {  text: 'Established KROSS INTERNATIONAL with a capacity to manufacture 50,000 Sealing Rings / annum. ',  year:"1987" },
                {  text: 'Awarded ” G. S. Parkhe Industrial Merit Award “ by Maratha Chember of Commerce & Industries for Manufacturing innovative Product (Import Substitution ).  Awarded ” First award for Best Small Scale Industries of the district “ by DIC, Government of Maharashtra, Mumbai', year: "1988" ,},
                {  text: 'AwardedÂ “ Dadasaheb Rawal Award “ Instituted by Maharashtra of Commerce, Mumbai for Excellence in individual entrepreneurship ',  year:"1989" },
                {  text: ' Awarded ” Kohinoor Ratna Award “ Instituted by All India Economic Forum, New Delhi for excellence in individual Entrepreneurship for Import substitution, making the country self-reliant',  year:"1990" },
                {  text: 'Awarded ” Udyog Jyoti Award “ Instituted by All India Economic Forum, New Delhi for excellence in individual Entrepreneurship for Import substitution. ',  year:"1991" },
                {  text: ' KROSS INTERNATIONAL certified to ISO:9002 by BVQI.',  year:"1997" },
                {  text: 'Recipient of Rashtriya Samman Patra instituted by Ministry of Finance, Government of India, towards the economic contribution of the country. ',  year:"2000" },
                {  text: 'KROSS INTERNATIONAL was certified ISO:9001:2000. ',  year:"2001" },
            ].map((item, index) => (
              <div key={index} className="flex-shrink-0 w-96 h-72 mx-4 bg-white text-black rounded-lg p-6 shadow-lg">
                <p className="text-yellow-400 text-2xl font-semibold">{item.year}</p>
                <p className="mt-2 text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
