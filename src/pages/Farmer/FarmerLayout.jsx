import React from "react";
import FarmerNavbar from "../../components/Farmer/FarmerNavbar";
import { Outlet } from "react-router-dom";

function FarmerLayout() {
  return (
    <div className=" w-full h-screen ">
      <div>
        <FarmerNavbar />
      </div>
      <div className="w-screen h-[633px] bg-cover ">
        <Outlet />
      </div>
    </div>
  );
}

export default FarmerLayout;
