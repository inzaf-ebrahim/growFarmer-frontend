import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import axiosInstance from "../../api/axios";
import { Link, useNavigate } from "react-router-dom";

function MyProducts() {
  const Navigate = useNavigate();
  const [data, setData] = useState([]);
  const handleEdit = (id) => {
    Navigate(`/farmer/editproducts/${id}`);
  };
  const handleDelete =async (id)=>{
    try {
      await axiosInstance.delete(`/farmer/deleteProduct/${id}`);
      // After successful deletion, remove the deleted product from the state
      setData(data.filter(product => product._id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
      // Handle error here, e.g., display an error message to the user
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/farmer/myproducts");
        setData(response.data.productData);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error here, e.g., set a state variable indicating the error
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>My Products</h1>
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
                    {singleData.quantity}
                  </span>
                  <span className="text-sm font-semibold">
                    ₹{singleData.price}
                  </span>
                </div>
              </div>
              <div className="flex gap-2 ">
                <button
                  className="text-white rounded-md bg-green-500 hover:bg-green-900 hover:scale-90 px-3 p-2 my-2 w-full"
                  onClick={() => handleEdit(singleData._id)}
                >
                  Edit
                </button>

                <button className="text-white rounded-md bg-green-500 hover:bg-green-900 hover:scale-90 px-3 p-2 my-2 w-full "
                  onClick={() => handleDelete(singleData._id)}
                  >
                  Delete

                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyProducts;
