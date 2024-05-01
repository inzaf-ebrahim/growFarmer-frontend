import React from "react";
import Navbar from "../components/User/Navbar";
import { Outlet } from "react-router-dom";
import Chat from "../components/Chat";

function UserHome() {
  const handleChat = () => {};
  return (
    <div className=" w-full h-screen relative">
      <div>
        <Navbar />
      </div>
      <div
        className="fixed right-5 bottom-14 bg-white drop-shadow-2xl rounded-full"
        onClick={() => handleChat()}
      >
        <Chat />
      </div>
      <div className="w-screen h-[633px] bg-cover ">
        <Outlet />
      </div>
    </div>
  );
}

export default UserHome;
