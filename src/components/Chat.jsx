import React, { useState } from "react";
import icon from "../assets/images/chat.png";
import Modal from "./Modal";
import { io } from "socket.io-client";

function Chat() {
  const socket = io();

  // Function to open and close the modal
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="w-16 h-16 flex justify-center items-center cursor-pointer" onClick={openModal}>
        <img className="w-10 h-10" src={icon} alt="" />
      </div>
      <Modal isOpen={isOpen} onClose={closeModal}>
        {/* Chat content goes here */}
        <div className="p-4">
          <h1 className="text-lg font-bold mb-2">Chat with Admin</h1>
          {/* Your chat UI components can go here */}
          {/* Example: */}
          <input type="text" className="border p-2 mb-2 w-full" placeholder="Type your message..." />
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Send</button>
        </div>
      </Modal>
    </>
  );
}

export default Chat;
