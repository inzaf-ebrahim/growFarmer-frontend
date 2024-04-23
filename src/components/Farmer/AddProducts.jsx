import React, { useState } from "react";
import axiosInstance from "../../api/axios";
import { Link } from "react-router-dom";

function AddProducts() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log(image);
    formData.append("image", image);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("quantity", quantity);
    console.log("Form submitted with data:", formData);
    try {
      const response = await axiosInstance.post("/farmer/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("file uploaded successfully", response);
      setImage("");
      setDescription("");
      setName("");
      setPrice("");
      setQuantity("");
    } catch (error) {
      console.log("error in addproduct post ", error);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-1">
            Description:
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            required
          />
        </div>
        <div>
          <label htmlFor="quantity" className="block mb-1">
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            required
          />
        </div>
        <div>
          <label htmlFor="price" className="block mb-1">
            Price:
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2"
            required
          />
        </div>
        <label htmlFor="image" className="block mb-1">
          select image
        </label>
        <input
          type="file"
          name="image"
          id="image"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <img src={image && URL.createObjectURL(image)} alt="" />
        <button
          type="submit"
          className="bg-blue-500 mr-5 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Product
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          <Link to='/farmer/myproducts'>My Products</Link>
        </button>
      </form>
    </div>
  );
}

export default AddProducts;
