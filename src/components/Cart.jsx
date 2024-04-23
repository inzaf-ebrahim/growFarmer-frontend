import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axiosInstance from "../api/axios";

function Cart() {
  const [products, setProducts] = useState([]);

  const handleRemove = async (id) => {
    try {
      const cartId = localStorage.getItem("cartId"); // Get cartId
      await axiosInstance.patch(`/removeProduct/${id}`, { cartId }); // Remove product
      // Refresh data after successful removal
      fetchData();
    } catch (error) {
      console.error("Error removing product from cart:", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("/cartDetails");
      const productIds = response.data.usercart[0].productIds; // Assuming first item is your cart
      const productPromises = productIds.map(async (productId) => {
        const productResponse = await axiosInstance.get(`/ProductDetails/${productId}`);
        return productResponse.data;
      });
      const fetchedProducts = await Promise.all(productPromises);
      setProducts(fetchedProducts);
    } catch (error) {
      console.log("Error in getting products:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data on component mount
  }, []);

  return (
    <div className="bg-gray-100">
      <div>
        <Navbar />
      </div>
      <h1 className="text-3xl font-bold p-4">Your Shopping Cart</h1>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {products.map((product, index) => (
            <div key={index} className="rounded overflow-hidden shadow-md">
              <img
                className="w-full h-48 object-cover"
                src={product.ProductDetails.image}
                alt={product.ProductDetails.name}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  {product.ProductDetails.name}
                </div>
                <p className="text-gray-700 text-base">
                  {product.ProductDetails.description.slice(0, 100)}...
                </p>
                <div className=" items-center mt-4">
                  {/* Quantity logic */}
                  <span className="text-gray-700 mr-2">
                    Quantity: {product.ProductDetails.quantity}kg
                  </span>
                  {/* Price logic */}
                  <div>
                  <span className="text-green-500 font-bold">
                    ${product.ProductDetails.price}
                  </span>
                  </div>
                </div>
                <div className="flex justify-center mt-4 gap-2">
                  <button className="px-3 py-2 rounded-md bg-green-500 hover:bg-green-700 text-white font-bold">
                    Buy Now
                  </button>
                  <button
                    className="px-3 py-2 rounded-md bg-red-500 hover:bg-red-700 text-white font-bold"
                    onClick={() => handleRemove(product.ProductDetails._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center p-4">Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
