import React from 'react';
import Infrastructureimg from '../assets/Photos/infra.png';

const Infrastructure = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto text-center py-20">
        <h1 className="text-3xl font-bold">Infrastructure</h1>
      </div>
      
      <main className="py-8 pt-24">
        <div className="container mx-auto px-4">
          <p className="text-gray-700 mb-4">
            Kross has two state-of-the-art facilities located in Solapur. These facilities pride on being one of the best in their class and consist of rubber mixing machines, oil seal molding machines, test facilities, and PTFE manufacturing. We are about to set up a world-class facility spread across 3 acres.
          </p>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={Infrastructureimg} alt="Facility 1" className="w-full h-64 object-cover"/>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Facility 1</h3>
                <p className="text-gray-600">Description of Facility 1.</p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={Infrastructureimg} alt="Facility 2" className="w-full h-64 object-cover"/>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Facility 2</h3>
                <p className="text-gray-600">Description of Facility 2.</p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={Infrastructureimg} alt="Facility 3" className="w-full h-64 object-cover"/>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Facility 3</h3>
                <p className="text-gray-600">Description of Facility 3.</p>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={Infrastructureimg} alt="Facility 4" className="w-full h-64 object-cover"/>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Facility 4</h3>
                <p className="text-gray-600">Description of Facility 4.</p>
              </div>
            </div>

            {/* Add more images as needed */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Infrastructure;
