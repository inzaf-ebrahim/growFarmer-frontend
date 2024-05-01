import React from "react";
import icon from "../assets/images/chat.png";
import { io } from "socket.io-client";

function Chat() {
  const socket = io();
  return (
    <div className="w-16 h-16 flex justify-center items-center">
      <img className="w-10 h-10 " src={icon} alt="" />
    </div>
  );
}

export default Chat;
