import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Home from './pages/Home';  // Import your pages
import About from './pages/About';
import Infrastructure from './pages/Infrastructure';
import Products from './pages/Products';
import ContactUs from './pages/Contact';
import Footer from './layout/Footer';
import HeroSection from './components/HeroSection'

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
