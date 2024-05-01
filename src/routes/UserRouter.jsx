import React from "react";
import UserHome from "../pages/UserHome";
import { Route, Routes } from "react-router-dom";
import Address from "../components/User/Address"

function UserRouter() {
  return (
    <Routes>
      <Route path="/" element={<UserHome />}></Route>
      <Route path="/address/:id" element={<Address />}></Route>
    </Routes>
  );
}

export default UserRouter;
