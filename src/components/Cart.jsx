import React, { useEffect, useState } from "react";
import Navbar from "./User/Navbar";
import axiosInstance from "../api/axios";
import { useNavigate } from "react-router-dom";
// import useRazorpay from "react-razorpay";

function Cart() {
  const [products, setProducts] = useState([]);
  const navigate =useNavigate()

  // const [Razorpay] = useRazorpay();

  // const razorpayKeyId = import.meta.env.VITE_RAZORPAY_KEY_ID;

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
        const productResponse = await axiosInstance.get(
          `/ProductDetails/${productId}`
        );
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
  const handleAddress = async(productId) =>{
    navigate(`/user/address/${productId}`)
  }

  // const handleBuyNow = async (productId) => {
  //   try {
  //     const productResponse = await axiosInstance.get(
  //       `/ProductDetails/${productId}`
  //     );
  //     const product = productResponse.data;
  //     const totalAmount = product.ProductDetails.price * 100; // Assuming price is in whole numbers, convert to paise

  //     const orderData = {
  //       amount: totalAmount,
  //       currency: "INR",
  //       receipt: `receipt_${Math.random().toString(36).substring(2, 15)}`,
  //       payment_capture: 0, // Set to 0 for test mode (change to 1 for live)
  //     };
  //     console.log(orderData);
  //     const createOrderResponse = await axiosInstance.post(
  //       "/razorpayorder",
  //       orderData
  //     );
  //     const razorpayOrderId = createOrderResponse.data.order.id;
  //     console.log(razorpayOrderId, "order id");

  //     const options = {
  //       key: razorpayKeyId,
  //       amount: totalAmount,
  //       currency: "INR",
  //       name: `Product: ${product.ProductDetails.name}`,
  //       description: "Your Company Name",
  //       // image: ` ${product.ProductDetails.image}`, // Replace with your logo URL
  //       order_id: razorpayOrderId,
  //       handler: async (response) => {
  //         const razorpayPaymentId = response.razorpay_payment_id;
  //         const razorpaySignature = response.razorpay_signature;

  //         // 4. Send Payment Verification Request to Server
  //         const verificationResponse = await axiosInstance.post(
  //           "/verify-payment",
  //           {
  //             orderId: razorpayPaymentId,
  //             signature: razorpaySignature,
  //           }
  //         );

  //         const verificationData = verificationResponse.data;

  //         if (verificationData.success) {
  //           console.log("Payment successful!");
  //           // Handle successful payment logic (e.g., order confirmation, update order status)
  //           alert("Payment Successful!"); // Temporary success alert
  //         } else {
  //           console.error("Payment verification failed!");
  //           // Handle failed verification logic (e.g., display error message)
  //           alert("Payment Verification Failed!"); // Temporary error alert
  //         }
  //       },
  //     };

  //     const razorpay = new Razorpay(options);

  //     razorpay.on("payment.failed", function (response) {
  //       alert(response.error.code);
  //       alert(response.error.description);
  //       alert(response.error.source);
  //       alert(response.error.step);
  //       alert(response.error.reason);
  //       alert(response.error.metadata.order_id);
  //       alert(response.error.metadata.payment_id);
  //     });

  //     razorpay.open();
  //   } catch (error) {
  //     console.log("Error in buy:", error);
  //   }
  // };

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
                  <button
                    className="px-3 py-2 rounded-md bg-green-500 hover:bg-green-700 text-white font-bold"
                    // onClick={() => handleBuyNow(product.ProductDetails._id)}
                    onClick={()=>handleAddress(product.ProductDetails._id)}
                  >
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
