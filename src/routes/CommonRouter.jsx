import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import FarmerHome from "../pages/Farmer/FarmerHome";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ForgetPassword from "../pages/ForgetPassword";
import Cart from "../components/cart";

function CommonRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      {/* <Route path="/forget" element={<ForgetPassword />}></Route> */}
    </Routes>
  );
}

export default CommonRouter;
