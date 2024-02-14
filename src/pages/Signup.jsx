import React, { useState } from "react";
import bg from "../assets/images/bg-2.jpeg";
import { Link } from "react-router-dom";
import Axios from "axios";
import axios from "axios";
import UserHome from "./UserHome";

function Signup() {
  const [name, setname] = useState("insaf");
  const [email, setemail] = useState("insaf@gmail.com");
  const [password, setpassword] = useState("inzaF@123");
  const [confirmPassword, setconfirmPassword] = useState("inzaF@123");
  const [role, setrole] = useState("User");
  const [error, setError] = useState("");
  const [home, sethome] = useState(false);

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  function Validation() {
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit"
      );
      return false
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
      return false
    } else if (!role) {
      setError("Please select your role");
      return false
    }
      return true
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(Validation()    ){
      try {
        const response = await axios.post("http://localhost:4000/signup", {
          name,
          email,
          password,
          role,
        });
        console.log("Signup successful:", response);
      } catch (error) {
        console.error("Signup error:", error.message);
      }
  
        sethome(true);
    }else{
      console.log('validation error');
    }
    
    // console.log("Signup form submitted:", { name, email, password, role });
  };

  return (
    <>
    <div>{!home ?(<div
      className="min-h-screen flex items-center justify-center w-screen h-screen bg-cover "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-md w-full p-8  bg-transparent shadow-md rounded-md">
        <h2 className="text-3xl font-semibold mb-6 text-white  text-center">
          Create an account
        </h2>
        <form action="/user" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="mt-1 p-2 w-full border rounded-full bg-transparent  placeholder:text-white  focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="mt-1 p-2 w-full border rounded-full bg-transparent placeholder:text-white  focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="password"
              onBlur={Validation}
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="mt-1 p-2 w-full border rounded-full bg-transparent placeholder:text-white  focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="confirmPassword"
              placeholder="confirm password"
              onBlur={Validation}
              value={confirmPassword}
              onChange={(e) => setconfirmPassword(e.target.value)}
              className="mt-1 p-2 w-full border rounded-full bg-transparent  placeholder:text-white  focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <select
              name="role"
              placeholder="Who are you"
              className="mt-1 p-2 w-full border text-white rounded-full bg-transparent placeholder:text-white  focus:outline-none focus:border-blue-500"
              required
              onBlur={Validation}
              onChange={(e) => setrole(e.target.value)}
            >
              <option value="">Select your role ?</option>
              {/* <option value="">Admin</option> */}
              <option value="user">User</option>
              <option value="farmer">Farmer</option>
              {/* <option value="landowner">LandOwner</option> */}
            </select>
          </div>
          <div className="flex justify-center">
            <p className="text-red-500">{error}</p>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-700 text-white font-bold rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Sign Up
          </button>
          <p className="text-center text-white">
            ALREADY HAVE AN ACCOUNT ?{" "}
            <Link className="text-yellow-400" to="/login">
              LOGIN
            </Link>
          </p>
        </form>
      </div>
    </div>):(
      <div><UserHome/></div>
    )}</div>
    
    </>
  );
}
export default Signup;
