import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FarmerNavbar from "../Farmer/FarmerNavbar";
import axiosInstance from "../../api/axios";

function EditProduct() {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [fetchedProducts, setFetchedProducts] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(
          `/farmer/productData?id=${id}`
        );
        setFetchedProducts(response.data.findProduct);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (fetchedProducts) {
      setName(fetchedProducts?.name || "");
      setDescription(fetchedProducts?.description || "");
      setQuantity(fetchedProducts?.quantity || "");
      setPrice(fetchedProducts?.price || "");
      setImage(fetchedProducts?.image || "");
    }
  }, [fetchedProducts]);

  // console.log(fetchedProducts, "fetched products is here ");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("quantity", quantity);

    try {
      const response = await axiosInstance.put(
        `/farmer/editProduct/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // setImage("");
      // setDescription("");
      // setName("");
      // setPrice("");
      // setQuantity("");
    } catch (error) {
      console.log("error in addproduct put ", error);
    }
    console.log(name, description,image ,"name is here");
  };

  return (
    <>
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
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
              name="description"
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
              name="quantity"
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
              name="price"
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
{image && image instanceof File && (
  <img src={URL.createObjectURL(image)} alt="" />
)}

          <button
            type="submit"
            className="bg-blue-500 mr-5 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Done
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            <Link to="/farmer/myproducts">Cancel</Link>
          </button>
        </form>
      </div>
    </>
  );
}
export default EditProduct;
