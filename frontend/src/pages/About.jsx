import React from 'react';
import Timeline from './Timeline';
import leader from '../assets/Photos/leader.jpg';
import video from '../assets/Videos/video.mp4';

const AboutUs = () => {
  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        
        {/* About Section */}
        <div className="mb-20">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
            <div className="flex flex-col md:flex-row md:justify-center md:items-center">
              <div className="w-full md:w-1/2 p-4 flex flex-col md:flex-row md:items-center transition-transform ease-in duration-500 transform hover:scale-105">
                {/* Leader Description */}
                <div className="flex-1 md:mr-6 mb-4 md:mb-0">
                  <p className="text-gray-600 mt-2">
                    A visionary leader with over 35 years of experience in the industry. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptates accusantium in. Reiciendis excepturi quo aspernatur iure itaque, nostrum eveniet aperiam ducimus laudantium quos eligendi odio mollitia, ratione quae dolor quidem ullam non, perferendis adipisci exercitationem ad qui ipsum? Et dolorem veniam fuga omnis quam dignissimos animi excepturi. Porro quia nulla beatae incidunt, voluptatem earum ipsa laudantium molestias vero repudiandae tempore ipsam impedit cum accusantium modi sint officia necessitatibus consequatur natus debitis perspiciatis iusto. Doloribus sed veritatis perferendis temporibus aperiam.
                  </p>
                </div>
                {/* Leader Photo */}
                <div className="w-full md:w-64 h-64">
                  <img className="w-full h-full object-cover rounded-full" src={leader} alt="Leader" />
                </div>
              </div>
            </div>
          </div>

          {/* Journey Section */}
          <div className="text-3xl font-bold text-center mb-12">History</div>
          <Timeline/>
        </div>

        {/* Video Section */}
        <div className="my-12">
          <video 
            className="w-full h-auto"
            src={video}
            autoPlay 
            muted 
            loop 
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Leadership Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8">Our Leadership</h2>
          <div className="flex flex-col md:flex-row md:justify-center">
            <div className="w-full md:w-1/2 p-4 flex flex-col md:flex-row md:items-center transition-transform ease-in duration-500 transform hover:scale-105">
              {/* Leader Description */}
              <div className="flex-1 md:mr-6 mb-4 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">Shri. K. R. Dhole</h3>
                <p className="text-gray-700">Founder & CEO</p>
                <p className="text-gray-600 mt-2">
                  A visionary leader with over 35 years of experience in the industry. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus voluptates accusantium in. Reiciendis excepturi quo aspernatur iure itaque, nostrum eveniet aperiam ducimus laudantium quos eligendi odio mollitia, ratione quae dolor quidem ullam non, perferendis adipisci exercitationem ad qui ipsum? Et dolorem veniam fuga omnis quam dignissimos animi excepturi. Porro quia nulla beatae incidunt, voluptatem earum ipsa laudantium molestias vero repudiandae tempore ipsam impedit cum accusantium modi sint officia necessitatibus consequatur natus debitis perspiciatis iusto. Doloribus sed veritatis perferendis temporibus aperiam.
                </p>
              </div>
              {/* Leader Photo */}
              <div className="w-full md:w-64 h-64">
                <img className="w-full h-full object-cover rounded-full" src={leader} alt="Leader" />
              </div>
            </div>
          </div>
        </div>

        {/* Certificates & Awards Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8">Certificates & Awards</h2>
          <div className="flex flex-col md:flex-row md:justify-center">
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

      </div>
    </section>
  );
};

export default AboutUs;
