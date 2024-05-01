import React from "react";
import UserHome from "../pages/UserHome";
import { Route, Routes } from "react-router-dom";
import Address from "../components/User/Address";
import ShowProducts from "../components/ShowProducts";
import LandingPage from "../pages/LandingPage";
import Cart from "../components/cart";

function UserRouter() {
  return (
    <Routes>
      <Route path="/" element={<UserHome />}>
        <Route path="" element={<LandingPage />} />
        <Route path="/products" element={<ShowProducts />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
      <Route path="/address/:id" element={<Address />}></Route>
    </Routes>
  );
}

export default UserRouter;
