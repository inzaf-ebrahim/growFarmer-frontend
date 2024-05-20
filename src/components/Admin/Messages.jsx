import axios from "axios";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import ShowMessages from "./ShowMessages";
// import { useNavigate } from "react-router-dom";

function Messages() {
  const [messages, setMessages] = useState([]); // Use a more descriptive name
  const [data, setData] = useState([]);
  const [userId, setUserId]=useState('')

  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await axios.get("http://localhost:3000/"); // Adjust the URL if needed
        console.log(res, "API response");
        // Handle the specific data structure from your API
        const extractedMessages = res.data; // Assuming "data" is the key holding messages
        setMessages(extractedMessages);
        console.log(extractedMessages, "j");
        const uniqueUserIds = new Set(
          extractedMessages.map((message) => message.sender)
        );

        console.log(uniqueUserIds); // This will now output a Set containing only unique user IDs
        const uniqueUserIdsArray = Array.from(uniqueUserIds);

        console.log(uniqueUserIdsArray, "kkk"); // This will output an array containing the unique user IDs

        const data = { userIds: uniqueUserIdsArray }; // Create an object with the data
        const response = await axiosInstance.post("/user/userDetails", data);

        console.log(response.data.users, "res");
        setData(response.data.users);
      };
      fetchData();
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  }, []);
  const handleMessage = (id) => {
    setUserId(id)
  };
console.log(userId);
  return (
    <div className="flex gap-3 w-screen">
      <div className="bg-amber-100 w-[350px] rounded-xl p-4">
        {" "}
        <h1 className="text-gray-800 font-bold text-xl">Chats</h1>
        {data.length > 0 ? (
          <div>
            {data.map((object, index) => (
              <div
                key={object._id}
                onClick={()=>handleMessage(object._id)}
                className="bg-neutral-100 py-2 mb-1 hover:bg-slate-200"
              >
                {/* Use a unique key for each object */}
                <h1 className="text-gray-800 text-xl font-bold mb-2">
                  name: {object.name}
                </h1>{" "}
                {/* Add more details as needed based on your message object structure */}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-800">No messages found.</p>
        )}
      </div>
      <div className="bg-green-200 h-[633px] w-[900px] rounded-xl">
        <ShowMessages id={userId}/>
      </div>
    </div>
  );
}

export default Messages;
