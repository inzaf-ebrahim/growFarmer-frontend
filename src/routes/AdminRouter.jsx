import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminLayout from "../pages/Admin/AdminLayout";
import ShowProducts from "../components/ShowProducts";
import Messages from "../components/Admin/Messages";
import AdminDash from "../pages/Admin/AdminDash";

function AdminRouter() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route path="" element={<AdminDash />} />
        <Route path="/products" element={<ShowProducts />} />
        <Route path="/messages" element={<Messages/>} />
      </Route>
    </Routes>
  );
}

export default AdminRouter;
