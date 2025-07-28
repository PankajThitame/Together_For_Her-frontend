import React, { useState, useEffect } from "react";
import axios from "axios";

const Marketplace = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:9090/api/admin/marketplace/all");
        setProducts(response.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.productName} added to cart!`);
  };

  return (
    <div className="w-[70%] mx-auto mt-10 p-4 pl-5 bg-cyan-100 rounded-xl shadow-md text-center">
      <h2 className="text-2xl text-pink-500 mb-2 font-semibold">Hygiene Marketplace</h2>
      <p className="text-sm text-gray-700">Support menstrual hygiene by purchasing essential products.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
        {products.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          products.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-lg text-center transform transition-transform duration-200 hover:scale-100"
            >
              <img
                src={item.imageUrl}
                alt={item.productName}
                className="w-[70%] h-[150px] object-cover rounded-lg mx-auto"
              />
              <h3 className="text-lg text-gray-800 mt-2 font-medium">{item.productName}</h3>
              <p className="text-pink-500 font-bold">₹{item.price}</p>
              <p className="text-sm text-gray-600">Stock: {item.stock}</p>
              <p className="text-sm text-gray-500 italic">{item.availability}</p>
              <button
                onClick={() => handleAddToCart(item)}
                className="mt-3 px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition"
              >
                Buy Now
              </button>
            </div>
          ))
        )}
      </div>

      <div className="mt-10 bg-pink-100 p-4 rounded-lg">
        <h3 className="text-xl text-pink-600 font-semibold">Shopping Cart</h3>
        {cart.length === 0 ? (
          <p className="text-sm text-gray-600 mt-2">Your cart is empty.</p>
        ) : (
          <ul className="list-none p-0 mt-2">
            {cart.map((item, index) => (
              <li key={index} className="text-sm text-gray-700 py-1">
                {item.productName} - ₹{item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Marketplace;