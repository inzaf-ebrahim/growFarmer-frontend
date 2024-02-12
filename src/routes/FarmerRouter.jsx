import React from "react";
import { Route, Routes } from "react-router-dom";
import FarmerHome from "../pages/FarmerHome";

function FarmerRouter() {
  return (
    <Routes>
      <Route path="/" element={<FarmerHome/>}></Route>
    </Routes>
  );
}

export default FarmerRouter;
