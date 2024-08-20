import React ,{ useState } from 'react';
import Counters from '../components/Counters';
import { Link } from 'react-router-dom';
import imageUrl from '../assets/Photos/images.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
  
  const [isClicked, setIsClicked] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  return (
    <>
      
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-10">
          <h2 className="text-3xl font-bold text-center mb-8">Experience and excellance in manifacturing seals </h2>
          <p className="text-center">
            
Founded in 1987 by Shri K. R. Dhole, Kross International has emerged as a pioneer in the seals manufacturing industry in India. With a relentless focus on engineering excellence and innovation, we specialize in precision fiber-based seals, valve stem seals, and PTFE-based seals. Serving over 55 clients in the automobile sector, Kross International is dedicated to delivering superior quality and continuous improvement in products and processes to exceed customer expectations.
          </p>
        </div>
        
      </section>
      <Counters/>
<div className='text-black text-center  text-3xl font-bold underline py-10'>Products</div>
      <section className="py-16 flex flex-wrap p-20">
      <div className="wrapper w-[300px] h-[400px] bg-white mx-auto relative overflow-hidden rounded-xl shadow-none transform scale-95 transition-transform duration-500 hover:scale-100 hover:shadow-2xl">
      <div className="container w-full h-full">
        <div className="top h-[80%] w-full bg-center bg-cover" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <div className={`bottom w-[200%] h-[20%] transition-transform duration-500 ${isClicked ? 'transform -translate-x-1/2' : ''}`}>
          <div className="left h-full w-[50%] bg-gray-200 relative float-left">
            <div className="details p-5 float-left w-[calc(70%-40px)]">
              <h1 className="m-0 p-0 text-lg font-bold"> Oil Seal</h1>
              <p className="m-0 p-0 text-sm text-gray-600">£250</p>
            </div>
            <div
              className="buy float-right w-[calc(30%-2px)] h-full bg-gray-100 transition-colors duration-500 border-l border-gray-300 flex items-center justify-center cursor-pointer hover:bg-blue-200"
              onClick={() => setIsClicked(true)}
            >
              <span className="material-icons text-3xl text-gray-700 transition-transform duration-500 hover:text-blue-800 hover:transform translate-y-1">
                add_shopping_cart
              </span>
            </div>
          </div>
          <div className="right w-[50%] bg-blue-200 text-white float-right h-[200%] overflow-hidden">
            <div className="done w-[calc(30%-2px)] float-left border-r border-white h-[50%] flex items-center justify-center">
              <span className="material-icons text-3xl">
                done
              </span>
            </div>
            <div className="details p-5 float-right w-[calc(70%-40px)]">
              <h1 className="m-0 p-0 text-lg font-bold">Chair</h1>
              <p className="m-0 p-0 text-sm">Added to your cart</p>
            </div>
            <div
              className="remove w-[calc(30%-1px)] clear-both border-r border-white h-[50%] bg-pink-600 transition-all duration-500 flex items-center justify-center cursor-pointer hover:bg-pink-800"
              onClick={() => setIsClicked(false)}
            >
              <span className="material-icons text-3xl">
                clear
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="inside bg-gray-400 w-[160px] h-[140px] absolute top-[-70px] right-[-70px] rounded-bl-full transition-all duration-500 overflow-hidden hover:w-full hover:h-[80%] hover:right-0 hover:top-0 hover:rounded-none">
        <div className="icon absolute right-[85px] top-[85px] text-white opacity-1 transition-opacity duration-500 hover:opacity-0" >
          <span className="material-icons">info_outline</span>
        </div>
        <div className={`transform scale-50 translate-y-[-200%] transition-all duration-500 hover:opacity-100 hover:translate-y-0`}
        >
          <table className="text-left w-full">
            <tbody>
              <tr>
                <th className="text-white">Width</th>
                <th className="text-white">Height</th>
              </tr>
              <tr>
                <td className="text-white">here comes description and all</td>
                <td className="text-white">4000mm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div className="wrapper w-[300px] h-[400px] bg-white mx-auto relative overflow-hidden rounded-xl shadow-none transform scale-95 transition-transform duration-500 hover:scale-100 hover:shadow-2xl">
      <div className="container w-full h-full">
        <div className="top h-[80%] w-full bg-center bg-cover" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <div className={`bottom w-[200%] h-[20%] transition-transform duration-500 ${isClicked ? 'transform -translate-x-1/2' : ''}`}>
          <div className="left h-full w-[50%] bg-gray-200 relative float-left">
            <div className="details p-5 float-left w-[calc(70%-40px)]">
              <h1 className="m-0 p-0 text-lg font-bold">Oil Seal</h1>
              <p className="m-0 p-0 text-sm text-gray-600">£250</p>
            </div>
            <div
              className="buy float-right w-[calc(30%-2px)] h-full bg-gray-100 transition-colors duration-500 border-l border-gray-300 flex items-center justify-center cursor-pointer hover:bg-blue-200"
              onClick={() => setIsClicked(true)}
            >
              <span className="material-icons text-3xl text-gray-700 transition-transform duration-500 hover:text-blue-800 hover:transform translate-y-1">
                add_shopping_cart
              </span>
            </div>
          </div>
          <div className="right w-[50%] bg-blue-200 text-white float-right h-[200%] overflow-hidden">
            <div className="done w-[calc(30%-2px)] float-left border-r border-white h-[50%] flex items-center justify-center">
              <span className="material-icons text-3xl">
                done
              </span>
            </div>
            <div className="details p-5 float-right w-[calc(70%-40px)]">
              <h1 className="m-0 p-0 text-lg font-bold">Chair</h1>
              <p className="m-0 p-0 text-sm">Added to your cart</p>
            </div>
            <div
              className="remove w-[calc(30%-1px)] clear-both border-r border-white h-[50%] bg-pink-600 transition-all duration-500 flex items-center justify-center cursor-pointer hover:bg-pink-800"
              onClick={() => setIsClicked(false)}
            >
              <span className="material-icons text-3xl">
                clear
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="inside bg-gray-400 w-[160px] h-[140px] absolute top-[-70px] right-[-70px] rounded-bl-full transition-all duration-500 overflow-hidden hover:w-full hover:h-[80%] hover:right-0 hover:top-0 hover:rounded-none">
        <div className="icon absolute right-[85px] top-[85px] text-white opacity-1 transition-opacity duration-500 hover:opacity-0" >
          <span className="material-icons">info_outline</span>
        </div>
        <div className={`transform scale-50 translate-y-[-200%] transition-all duration-800 hover:opacity-100 hover:translate-y-0`}
        >
          <table className="text-left w-full">
            <tbody>
              <tr>
                <th className="text-white">Width</th>
                <th className="text-white">Height</th>
              </tr>
              <tr>
                <td className="text-white">3000mm</td>
                <td className="text-white">4000mm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div className="wrapper w-[300px] h-[400px] bg-white mx-auto relative overflow-hidden rounded-xl shadow-none transform scale-95 transition-transform duration-500 hover:scale-100 hover:shadow-2xl">
      <div className="container w-full h-full">
        <div className="top h-[80%] w-full bg-center bg-cover" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <div className={`bottom w-[200%] h-[20%] transition-transform duration-500 ${isClicked ? 'transform -translate-x-1/2' : ''}`}>
          <div className="left h-full w-[50%] bg-gray-200 relative float-left">
            <div className="details p-5 float-left w-[calc(70%-40px)]">
              <h1 className="m-0 p-0 text-lg font-bold">Oil Seals</h1>
              <p className="m-0 p-0 text-sm text-gray-600">£250</p>
            </div>
            <div
              className="buy float-right w-[calc(30%-2px)] h-full bg-gray-100 transition-colors duration-500 border-l border-gray-300 flex items-center justify-center cursor-pointer hover:bg-blue-200"
              onClick={() => setIsClicked(true)}
            >
              <span className="material-icons text-3xl text-gray-700 transition-transform duration-500 hover:text-blue-800 hover:transform translate-y-1">
                add_shopping_cart
              </span>
            </div>
          </div>
          <div className="right w-[50%] bg-blue-200 text-white float-right h-[200%] overflow-hidden">
            <div className="done w-[calc(30%-2px)] float-left border-r border-white h-[50%] flex items-center justify-center">
              <span className="material-icons text-3xl">
                done
              </span>
            </div>
            <div className="details p-5 float-right w-[calc(70%-40px)]">
              <h1 className="m-0 p-0 text-lg font-bold">Chair</h1>
              <p className="m-0 p-0 text-sm">Added to your cart</p>
            </div>
            <div
              className="remove w-[calc(30%-1px)] clear-both border-r border-white h-[50%] bg-pink-600 transition-all duration-500 flex items-center justify-center cursor-pointer hover:bg-pink-800"
              onClick={() => setIsClicked(false)}
            >
              <span className="material-icons text-3xl">
                clear
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="inside bg-gray-400 w-[160px] h-[140px] absolute top-[-70px] right-[-70px] rounded-bl-full transition-all duration-500 overflow-hidden hover:w-full hover:h-[80%] hover:right-0 hover:top-0 hover:rounded-none">
        <div className="icon absolute right-[85px] top-[85px] text-white opacity-1 transition-opacity duration-500 hover:opacity-0" >
          <span className="material-icons">info_outline</span>
        </div>
        <div className={`transform scale-50 translate-y-[-200%] transition-all duration-800 hover:opacity-100 hover:translate-y-0`}
        >
          <table className="text-left w-full">
            <tbody>
              <tr>
                <th className="text-white">Width</th>
                <th className="text-white">Height</th>
              </tr>
              <tr>
                <td className="text-white">3000mm</td>
                <td className="text-white">4000mm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div className="wrapper w-[300px] h-[400px] bg-white mx-auto relative overflow-hidden rounded-xl shadow-none transform scale-95 transition-transform duration-500 hover:scale-100 hover:shadow-2xl">
      <div className="container w-full h-full">
        <div className="top h-[80%] w-full bg-center bg-cover" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        <div className={`bottom w-[200%] h-[20%] transition-transform duration-500 ${isClicked ? 'transform -translate-x-1/2' : ''}`}>
          <div className="left h-full w-[50%] bg-gray-200 relative float-left">
            <div className="details p-5 float-left w-[calc(70%-40px)]">
              <h1 className="m-0 p-0 text-lg font-bold">Oil Seals</h1>
              <p className="m-0 p-0 text-sm text-gray-600">£250</p>
            </div>
            <div
              className="buy float-right w-[calc(30%-2px)] h-full bg-gray-100 transition-colors duration-500 border-l border-gray-300 flex items-center justify-center cursor-pointer hover:bg-blue-200"
              onClick={() => setIsClicked(true)}
            >
              <span className="material-icons text-3xl text-gray-700 transition-transform duration-500 hover:text-blue-800 hover:transform translate-y-1">
                add_shopping_cart
              </span>
            </div>
          </div>
          <div className="right w-[50%] bg-blue-200 text-white float-right h-[200%] overflow-hidden">
            <div className="done w-[calc(30%-2px)] float-left border-r border-white h-[50%] flex items-center justify-center">
              <span className="material-icons text-3xl">
                done
              </span>
            </div>
            <div className="details p-5 float-right w-[calc(70%-40px)]">
              <h1 className="m-0 p-0 text-lg font-bold">Chair</h1>
              <p className="m-0 p-0 text-sm">Added to your cart</p>
            </div>
            <div
              className="remove w-[calc(30%-1px)] clear-both border-r border-white h-[50%] bg-pink-600 transition-all duration-500 flex items-center justify-center cursor-pointer hover:bg-pink-800"
              onClick={() => setIsClicked(false)}
            >
              <span className="material-icons text-3xl">
                clear
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="inside bg-gray-400 w-[160px] h-[140px] absolute top-[-70px] right-[-70px] rounded-bl-full transition-all duration-500 overflow-hidden hover:w-full hover:h-[80%] hover:right-0 hover:top-0 hover:rounded-none">
        <div className="icon absolute right-[85px] top-[85px] text-white opacity-1 transition-opacity duration-500 hover:opacity-0" >
          <span className="material-icons">info_outline</span>
        </div>
        <div className={`transform scale-50 translate-y-[-200%] transition-all duration-800 hover:opacity-100 hover:translate-y-0`}
        >
          <table className="text-left w-full">
            <tbody>
              <tr>
                <th className="text-white">Width</th>
                <th className="text-white">Height</th>
              </tr>
              <tr>
                <td className="text-white">3000mm</td>
                <td className="text-white">4000mm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
    
      </section>
     
    </>
  );
};

export default HomePage;
