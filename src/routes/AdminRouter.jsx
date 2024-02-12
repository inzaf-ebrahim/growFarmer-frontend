import React from "react";
import AdminHome from "../pages/AdminHome";
import { Route, Routes } from "react-router-dom";

function AdminRouter() {
  return (
    <Routes>
      <Route path="/" element={<AdminHome />}></Route>
    </Routes>
  );
}

export default AdminRouter;
