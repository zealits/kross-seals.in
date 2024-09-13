import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Counters from '../components/Counters';
import imageUrl from '../assets/Photos/product.png';

const HomePage = () => {
  // const [products, setProducts] = useState([]);
  // const [isClicked, setIsClicked] = useState(false);

  // useEffect(() => {
  //   // Fetch products data from the API
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get('/api/v1/products');
  //       setProducts(response.data.products.slice(0, 5)); 
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  return (
    <> 
    
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className=" text-gray-700 text-2xl md:text-3xl font-bold text-center mb-8">Experience and Excellence in Manufacturing Seals</h2>
          <p className="text-center text-sm md:text-base">
            Founded in 1987 by Shri K. R. Dhole, Kross International has emerged as a pioneer in the seals manufacturing industry in India. With a relentless focus on engineering excellence and innovation, we specialize in precision fiber-based seals, valve stem seals, and PTFE-based seals. Serving over 55 clients in the automobile sector, Kross International is dedicated to delivering superior quality and continuous improvement in products and processes to exceed customer expectations.
          </p>
        </div>
      </section>

      <Counters />

      <div className="mb-12 mt-12">

  <h2 className="text-4xl text-center mb-8 mx-auto font-semibold">Products</h2>
  <div className="flex flex-col md:flex-row md:justify-center">
   
    <div className="w-full md:w-1/2 p-4 flex items-center justify-center mb-4 md:mb-0">
      <div className="w-full md:w-64 h-64">
        <img className="w-full h-full object-cover" src={imageUrl} alt="product" />
      </div>
    </div>
   
    <div className="w-full md:w-3/4 p-4 flex flex-col justify-center mr-10">
      <p className="text-gray-700 mb-4">
        At Kross International, our cutting-edge seal technologies are engineered to tackle the most demanding sealing challenges. From limited lubrication environments to severe-duty applications, our seals are crafted to enhance reliability, reduce operational costs, and extend service life. Developed by our expert engineers, our innovative solutions feature advanced materials and designs, including precision fiber-based, valve stem, and PTFE seals, to optimize performance under various conditions. Whether dealing with low-lubricity or high-pressure scenarios, Kross International provides tailored seal technologies to meet the specific needs of diverse industries. Explore our range of high-performance seals and experience unmatched reliability and efficiency in your operations.
      </p>
      
      <div className="flex justify-center">
      <Link
            to="/products"
            className="inline-flex font-semibold items-center px-4 py-2 text-red-600 text-center transition-colors duration-300 relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-red-600 before:scale-x-0 hover:before:scale-x-100 hover:before:transition-transform hover:before:duration-300"
          >
            View all Products
            <svg className="w-4 h-4 ml-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
      </div>
    </div>
  </div>
</div>









    </>
  );
};

export default HomePage;
