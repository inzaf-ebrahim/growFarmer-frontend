import axios from "axios";
import React, { useEffect } from "react";


function ShowMessages({ id }) {
  console.log(id, "tt");
  useEffect(() => {
    const fetchMessage = async () => {
        console.log(id);
      try {
        const response = await axios.post(`http://localhost:3000/getMessage/${id}`);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMessage();
  }, [id]);
  return (
    <>
      <div>
        {" "}
        <h1 className="text-gray-800 font-bold text-l bg-white p-4">
          {" "}
          here the messages show
        </h1>
      </div>
    </>
  );
}

export default ShowMessages;
