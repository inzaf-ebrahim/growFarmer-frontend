import React from "react";
import { Route, Routes } from "react-router-dom";
import FarmerSell from "../pages/Farmer/FarmerSell";
import FarmerProducts from "../pages/FarmerProducts";
import MyProducts from "../components/Farmer/MyProducts";
import EditProduct from "../components/Farmer/EditProduct";
import FarmerLayout from "../pages/Farmer/FarmerLayout";
import FarmerHome from "../pages/Farmer/FarmerHome";

function FarmerRouter() {
  return (
    <Routes>
      <Route path="/" element={<FarmerLayout />}>
        <Route path="" element={<FarmerHome />}></Route>
        <Route path="/myproducts" element={<MyProducts />}></Route>
        <Route path="/sell" element={<FarmerSell />}></Route>
        <Route path="/editproducts/:id" element={<EditProduct />}></Route>
      </Route>
    </Routes>
  );
}

export default FarmerRouter;
