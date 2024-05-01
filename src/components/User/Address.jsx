import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useRazorpay from "react-razorpay";
import axiosInstance from "../../api/axios";
import { useParams } from "react-router-dom";

function Address() {
  const [formData, setFormData] = useState({
    name: "",
    mobileNumber: "",
    pincode: "",
    locality: "",
    address: "",
    state: "",
  });
  const params = useParams();
  const navigate = useNavigate();
  const [Razorpay] = useRazorpay();
  const razorpayKeyId = import.meta.env.VITE_RAZORPAY_KEY_ID;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePayment = async (e) => {
    try {
      console.log("this is param", params.id);
      const productId = params.id;
      const res = await axiosInstance.post("/user/address", formData);
      console.log(res);

      const productResponse = await axiosInstance.get(
        `/ProductDetails/${productId}`
      );
      const product = productResponse.data;
      const totalAmount = product.ProductDetails.price * 100; // Assuming price is in whole numbers, convert to paise
      // console.log(totalAmount, "tot");
      const orderData = {
        amount: totalAmount,
        currency: "INR",
        receipt: `receipt_${Math.random().toString(36).substring(2, 15)}`,
        payment_capture: 0, // Set to 0 for test mode (change to 1 for live)
      };
      console.log(orderData);
      const createOrderResponse = await axiosInstance.post(
        "/razorpayorder",
        orderData
      );
      const razorpayOrderId = createOrderResponse.data.order.id;
      console.log(razorpayOrderId, "order id");

      const options = {
        key: razorpayKeyId,
        amount: totalAmount,
        currency: "INR",
        name: `Product: ${product.ProductDetails.name}`,
        description: "Your Company Name",
        image:
          "https://growfarmer.s3.ap-south-1.amazonaws.com/image-1708760851734.jpeg", // Replace with your logo URL
        order_id: razorpayOrderId,
        handler: async function (response) {
          console.log(response, "this is response");
          const paymentId = response.razorpay_payment_id;
          const res = await axiosInstance.post("/user/paymentDetails", {
            paymentId: paymentId,
            productId: productId,
            amount: totalAmount,
          });
          console.log(res, "res");
          navigate("/cart");
        },
        prefill: {
          name: "Piyush Garg",
          email: "youremail@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new Razorpay(options);

      razorpay.on("payment.failed", function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });

      razorpay.open();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 mt-10 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Shipping Address</h2>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Enter your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="mobileNumber"
        >
          Mobile Number
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="mobileNumber"
          type="text"
          placeholder="Enter your mobile number"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="pincode"
        >
          Pincode
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="pincode"
          type="text"
          placeholder="Enter your pincode"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="locality"
        >
          Locality
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="locality"
          type="text"
          placeholder="Enter your locality"
          name="locality"
          value={formData.locality}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="address"
        >
          Address
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="address"
          type="text"
          placeholder="Enter your address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="state"
        >
          State
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="state"
          type="text"
          placeholder="Enter your state"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
      </div>
      <div className="gap-5">
        <button
          className="mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => handlePayment()}
        >
          Proceed to Payment
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          <Link to="/cart">cancel</Link>
        </button>
      </div>
    </div>
  );
}

export default Address;
