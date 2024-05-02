import React from "react";
import { io } from "socket.io-client";
const Modal = ({ isOpen, onHandleClose, children }) => {
  const socket = io();

  return (
    <>
      {isOpen && (
        <div className="absolute right-16 bottom-14 bg-white w-80 h-96 rounded shadow-md">
          <div className="flex flex-col h-full">
            <div className="flex-grow overflow-auto px-4 py-2">
              {/* Render chat messages
              {messages.map((msg, index) => (
                <div key={index} className={`flex items-center py-2 ${msg.from === 'admin' ? 'justify-start' : 'justify-end'}`}>
                  {msg.from === 'admin' && (
                    <div className="text-sm text-gray-700 mr-2">{adminName}:</div>
                  )}
                  <div className={`p-2 rounded-lg ${msg.from === 'admin' ? 'bg-gray-200' : 'bg-blue-200'}`}>
                    {msg.text}
                  </div>
                </div>
              ))} */}
            </div>
            <form className="flex items-center border-t px-4 py-2">
              <input
                type="text"
                // value={message}
                // onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full px-2 py-1 border rounded focus:outline-none focus:ring-blue-500 focus:ring-opacity-50"
              />
              <button
                type="submit"
                className="ml-2 text-blue-500 hover:text-blue-700"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
