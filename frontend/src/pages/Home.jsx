import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Counters from '../components/Counters';
import imageUrl from '../assets/Photos/images.jpg';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // Fetch products data from the API
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/v1/products');
        setProducts(response.data.products.slice(0, 4)); // Only take the first 4 products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Experience and Excellence in Manufacturing Seals</h2>
          <p className="text-center text-sm md:text-base">
            Founded in 1987 by Shri K. R. Dhole, Kross International has emerged as a pioneer in the seals manufacturing industry in India. With a relentless focus on engineering excellence and innovation, we specialize in precision fiber-based seals, valve stem seals, and PTFE-based seals. Serving over 55 clients in the automobile sector, Kross International is dedicated to delivering superior quality and continuous improvement in products and processes to exceed customer expectations.
          </p>
        </div>
      </section>

      <Counters />

      <div className='text-black text-center text-2xl md:text-3xl font-bold underline py-10'>Products</div>

      <section className="py-16 px-4 md:px-8">
        <div className='flex flex-wrap justify-center gap-4 md:gap-8'>
          {products.map((product) => (
            <div key={product.id} className="w-full md:w-[300px] h-[400px] bg-white relative overflow-hidden rounded-xl shadow-none transform scale-95 transition-transform duration-500 hover:scale-100 hover:shadow-2xl">
              <div className="w-full h-full">
                <div className="top h-[80%] w-full bg-center bg-cover" style={{ backgroundImage: `url(${product.image || imageUrl})` }}></div>
                <div className={`bottom w-[200%] h-[20%] transition-transform duration-500 ${isClicked ? 'transform -translate-x-1/2' : ''}`}>
                  <div className="left h-full w-[50%] bg-gray-200 relative float-left">
                    <div className="details p-5">
                      <h1 className="text-lg font-bold">{product.name}</h1>
                      <p className="text-sm text-gray-600">{product.price}</p>
                    </div>
                  </div>
                  <div className="right w-[50%] bg-blue-200 text-white float-right h-[200%] overflow-hidden">
                    <div className="done w-[calc(30%-2px)] float-left border-r border-white h-[50%] flex items-center justify-center">
                      <span className="material-icons text-3xl">done</span>
                    </div>
                    <div className="details p-5 float-right w-[calc(70%-40px)]">
                      <h1 className="text-lg font-bold">Added to your cart</h1>
                      <p className="text-sm">Added to your cart</p>
                    </div>
                    <div
                      className="remove w-[calc(30%-1px)] clear-both border-r border-white h-[50%] bg-pink-600 flex items-center justify-center cursor-pointer hover:bg-pink-800"
                      onClick={() => setIsClicked(false)}
                    >
                      <span className="material-icons text-3xl">clear</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inside bg-gray-400 w-[160px] h-[140px] absolute top-[-70px] right-[-70px] rounded-bl-full transition-all duration-500 overflow-hidden hover:w-full hover:h-[80%] hover:right-0 hover:top-0 hover:rounded-none">
                <div className="icon absolute right-[85px] top-[85px] text-white opacity-1 transition-opacity duration-500 hover:opacity-0">
                  <span className="material-icons">info_outline</span>
                </div>
                <div className="transform scale-50 translate-y-[-200%] transition-all duration-500 hover:opacity-100 hover:translate-y-0">
                  <table className="text-left w-full text-white">
                    
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
