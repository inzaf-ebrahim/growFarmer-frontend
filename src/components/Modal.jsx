import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import axiosInstance from "../api/axios";

const Modal = ({ isOpen, onHandleClose, children }) => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [id, setId] = useState("");
  useEffect(() => {
    try {
      const fetchUser = async () => {
        const response = await axiosInstance.get("/user/getUser");
        const userId = response.data.userId;
        setId(userId)
        console.log(id, "this is the userId"); 
      };
      fetchUser(); 
    } catch (error) {
      console.log(error, "error in getuser");
    }
  }, []);
  useEffect(() => {
    const socket = io.connect("http://localhost:3000", { reconnect: true });

    socket.on("connect", () => {
      console.log("Connected!");
    });

    socket.on("chat message", (message) => {
      setChat((prevChat) => [...prevChat, message]);
      console.log(message, "mesg");
    });

    return () => {
      socket.disconnect();
      console.log("disconnected");
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission to avoid page reload

    const socket = io.connect("http://localhost:3000");
    socket.emit("private message", { message: message, id });
    console.log(message, ":message is here",id,"id is here");
    setMessage("");
  };

  const handleChange = (event) => {
    setMessage(event.target.value); // Update the message state with input value
  };

  return (
    <>
      {isOpen && (
        <div className="absolute right-16 bottom-14 bg-white w-80 h-96 rounded shadow-md">
          <div className="flex flex-col h-full">
            <div className="flex-grow overflow-auto bg-stone-200 px-4 py-2">
              {/* Iterate over chat messages and render them within the div */}
              {chat.map((msg, index) => (
                <div key={index} className="message-container">
                  <p className="bg-green-400 rounded-md border-red-500 border">
                    {msg}
                  </p>
                </div>
              ))}
            </div>
            <form
              className="flex items-center border-t px-4 py-2"
              onSubmit={handleSubmit}
            >
              <input
                id="message"
                type="text"
                value={message}
                onChange={handleChange} // Call handleChange when input value changes
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
