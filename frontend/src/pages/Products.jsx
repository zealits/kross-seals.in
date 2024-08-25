import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link for navigation
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
    <div className="container mx-auto my-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>

      <FilterComponent
        filters={filters}
        handleFilterChange={handleFilterChange}
        handleResetFilters={handleResetFilters}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="bg-white shadow-lg rounded-lg p-4 transition-transform duration-300 hover:scale-105">
              <div className="relative">
                <img
                  src={product.images[0].url}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg hover:shadow-2xl hover:brightness-90"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
              <p className="text-gray-600 mt-2">${product.price}</p>
              <p className="text-gray-500 mt-2">
                Category: {product.category.level1}
              </p>
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => handleAddToCart(product._id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Add to Cart
                </button>
                <Link to={`/product/${product._id}`} className="text-blue-500 hover:underline">
                  Read More
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
