import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import FarmerHome from "../pages/FarmerHome";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ForgetPassword from "../pages/ForgetPassword";
import Cart from "../components/cart";

function CommonRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/forget" element={<ForgetPassword />}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
  );
}

export default CommonRouter;
