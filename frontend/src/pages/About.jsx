import React from 'react';
import Timeline from './Timeline';

const AboutUs = () => {
  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
<div className='mb-20'>
        {/* Journey Section */}
        <div className='text-3xl font-bold text-center'>History</div>
        <Timeline/>
        </div>
        {/* Leadership Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8">Our Leadership</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <img className="w-32 h-32 mx-auto rounded-full mb-4" src="leader1.jpg" alt="Leader 1" />
                <h3 className="text-2xl font-bold mb-2">Shri. K. R. Dhole</h3>
                <p className="text-gray-700">Founder & CEO</p>
                <p className="text-gray-600 mt-2">A visionary leader with over 35 years of experience in the industry.</p>
              </div>
            </div>
            {/* Add more leaders here if needed */}
          </div>
        </div>

        {/* Certificates & Awards Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8">Certificates & Awards</h2>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <img className="w-32 h-32 mx-auto mb-4" src="certificate1.jpg" alt="Certificate 1" />
                <h3 className="text-2xl font-bold mb-2">ISO 9001:2015</h3>
                <p className="text-gray-600">Quality Management System certification.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <img className="w-32 h-32 mx-auto mb-4" src="award1.jpg" alt="Award 1" />
                <h3 className="text-2xl font-bold mb-2">Best Manufacturer Award 2023</h3>
                <p className="text-gray-600">Recognized for excellence in manufacturing.</p>
              </div>
            </div>
            {/* Add more certificates and awards here if needed */}
          </div>
        </div>

        {/* Vision Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8">Our Vision</h2>
          <p className="text-lg leading-relaxed text-center">
            To be the global leader in providing innovative and sustainable sealing solutions, contributing to the success of our customers.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8">Our Mission</h2>
          <p className="text-lg leading-relaxed text-center">
            Our mission is to deliver high-quality products through continuous innovation, maintaining the highest standards of excellence, and ensuring customer satisfaction.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
