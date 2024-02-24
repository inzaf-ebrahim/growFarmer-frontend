import React from "react";
import { Route, Routes } from "react-router-dom";
import FarmerHome from "../pages/FarmerHome";
import FarmerSell from "../pages/FarmerSell";
import FarmerProducts from "../pages/FarmerProducts";

function FarmerRouter() {
  return (
    <Routes>
      <Route path="/" element={<FarmerHome/>}></Route>
      <Route path="/products" element={<FarmerProducts/>}></Route>
      <Route path="/sell" element={<FarmerSell/>}></Route>
    </Routes>
  );
}

export default FarmerRouter;
