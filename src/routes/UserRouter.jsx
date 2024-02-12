import React from "react";
import UserHome from "../pages/UserHome";
import { Route, Routes } from "react-router-dom";

function UserRouter() {
  return (
    <Routes>
      <Route path="/" element={<UserHome />}></Route>
    </Routes>
  );
}

export default UserRouter;
