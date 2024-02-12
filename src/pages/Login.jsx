import React, { useState } from "react";
import bg from "../assets/images/bg-2.jpeg";
import axios from "axios";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error,setError]=useState('')


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/login", {
        email,
        password,
      });
      if(response.data.success){
        console.log('user logged successfully');
      }else{
        setError('incorrect email or password')
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An error occurred. Please try again later.');
    }

    console.log("Login form submitted:");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center w-screen h-screen bg-cover "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-md w-full p-8  bg-transparent shadow-md rounded-md">
        <h2 className="text-3xl font-semibold mb-6 text-white  text-center">
          Please login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={(e) => setemail(e.target.value)}
              className="mt-1 p-2 w-full border rounded-full bg-transparent placeholder:text-white  focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              onChange={(e) => setpassword(e.target.value)}
              className="mt-1 p-2 w-full border rounded-full bg-transparent placeholder:text-white  focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-700 text-white font-bold rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Login
          </button>
          <div className="text-center text-red-600">{error}</div>
        </form>
      </div>
    </div>
  );
}

export default Login;
