import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axiosInstance from "../api/axios";
import ShowProducts from "../components/ShowProducts";

function FarmerProducts() {
  return (
    <>
      <div><Navbar/></div>
      <div><ShowProducts/></div>
    </>
  );
}

export default FarmerProducts;
