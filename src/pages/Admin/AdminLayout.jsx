import React from "react";
import { Outlet } from "react-router-dom";
import AdminNav from "../../components/Admin/AdminNav";

function AdminLayout() {
  return (
    <div>
      <div>
        <AdminNav />
      </div>
      <div className="w-screen h-[633px] bg-cover ">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
