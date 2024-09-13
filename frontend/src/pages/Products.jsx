import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FilterComponent from "../components/filterComponent";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({ l1: '', l2: '', l3: '' });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/v1/products', { params: filters });
        setProducts(response.data.products);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };

  const handleResetFilters = () => {
    setFilters({
      l1: '',
      l2: '',
      l3: ''
    });
  };

  const handleAddToCart = (productId) => {
    console.log(`Product ${productId} added to cart`);
  };

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto my-10 px-4 lg:px-8 max-w-7xl">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>

      <FilterComponent
        filters={filters}
        handleFilterChange={handleFilterChange}
        handleResetFilters={handleResetFilters}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="bg-white shadow-lg rounded-lg flex flex-col p-4 transition-transform duration-300 hover:scale-105 mx-2 my-4">
              <div className="relative">
                <img
                  src={product.images[0].url}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg hover:shadow-2xl hover:brightness-90"
                />
              </div>
              {/* Product Name and Category */}
              <div className="p-4 flex-grow">
                <h1 className="text-lg font-bold truncate mb-2">{product.name}</h1>
                <p className="text-sm text-gray-600 truncate">{product.category.level1}</p>
              </div>
              {/* Shop Button */}
              <div className="p-4 pt-0 mt-auto flex justify-center">
                <Link
                  to={`/product/${product._id}`}
                  className="inline-flex items-center px-4 py-2 text-blue-600 text-center transition-colors duration-300 relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-blue-600 before:scale-x-0 hover:before:scale-x-100 hover:before:transition-transform hover:before:duration-300"
                >
                  Shop Now
                  <svg className="w-4 h-4 ml-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default Products;
