import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCartId } from "../redux/cartSlice";
import axiosInstance from "../api/axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function ShowProducts() {
  const [data, setdata] = useState([]);
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  
  const addToCart =async (id) => {
    try {
      const response =await axiosInstance.post("/cart",{id});
      console.log(response,'your cart item saved successfully')
      console.log('blah',response.data);
      const cartId =response.data.existingCart._id
      localStorage.setItem("cartId",cartId)
      toast.success(`${name} added to cart`)
      dispatch(setCartId(cartId))
    } catch (error) {
      console.log("Error in add to cart ", error);
      console.log('gg',error.response.data.message);
      toast.error(error.response.data.message)
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/farmer/download");
        setdata(response.data.productData);
        // console.log(response.data.productData[0]);
      } catch (error) {
        console.log("Error in getting products:", error);
      }
    };

    fetchData();
  }, []);
// console.log(name,'name');
  return (
    <>
      <div className="container mx-auto px-14 py-8">
        <h2 className="text-2xl font-semibold mb-4">All Products </h2>

        <div className="flex flex-wrap gap-5 ">
          {data.map((singleData, index) => (
            <div key={index} className="flex flex-col border rounded-lg p-4">
              <img
                src={singleData.image}
                alt={singleData.name}
                className="w-60 h-60 object-cover transition duration-700 ease-in-out hover:scale-110 hover:border-yellow-300 hover:border-2 rounded-lg mb-2"
              />
              <div className="text-gray-800">
                <h3 className="font-semibold mb-1">{singleData.name}</h3>
                <p className="line-clamp-2">{singleData.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm text-gray-500">
                    {singleData.quantity}Kg
                  </span>
                  <span className="text-sm font-semibold">
                    ₹{singleData.price}
                  </span>
                </div>
              </div>
              <button
                className="text-white rounded-md bg-green-500 hover:bg-green-900 hover:scale-90 px-3 p-2 my-2 "
                onClick={() => {addToCart(singleData._id).then()
                setName(singleData.name)}}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer/>
    </>
  );
}

export default ShowProducts;
