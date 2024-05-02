import React, { useState } from "react";
import icon from "../assets/images/chat.png";
import Modal from "./Modal";
// import { io } from "socket.io-client"; // Assuming socket.io isn't relevant here

function Chat() {
  // const socket = io(); // Remove if not used

  // Function to open and close the modal
  const [isOpen, setIsOpen] = useState(false);
  const handleModal=()=>{
    setIsOpen(s=>!s)
  }

  return (
    <div className="relative">
      <Modal   isOpen={isOpen} onHandleClose={handleModal}/>
      <div className=" w-16 h-16 flex justify-center items-center cursor-pointer " onClick={handleModal}>
        <img className="w-10 h-10" src={icon} alt="" />
      </div>

      
      
    </div>
  );
}

export default Chat;
