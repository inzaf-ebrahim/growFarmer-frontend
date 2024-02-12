import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import FarmerHome from "../pages/FarmerHome";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

function CommonRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/farmerhome" element={<FarmerHome />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
    </Routes>
  );
}

export default CommonRouter;
