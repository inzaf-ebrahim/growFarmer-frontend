import React from "react";
import logo from "../assets/images/logo.png";
import user from "../assets/images/user.png";
import cart from "../assets/images/cart.png";
import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <div>
      <div className="w-full h-14 bg-slate-300 flex justify-between gap-6 ">
        <div className=" flex gap-6">
          <div className=" flex justify-start ">
            <img className="ml-5 p-1  w-20 h-16" src={logo} alt="" /> 
          </div>
          <nav className="flex gap-5  items-center justify-center ">
            <NavLink to='/farmer'>HOME</NavLink>
            <NavLink to='/'>LANDS</NavLink>
            <NavLink to='/farmer/products'>PRODUCTS</NavLink>
            <NavLink to='/farmer/sell'>SELL</NavLink>
            <NavLink to='/'>ACTIVITY</NavLink>
          </nav>
        </div>
        <div className="flex items-center gap-5">
          <img className="w-6 h-6 flex justify-end" src={user} alt="" />
          <img className="w-6 h-6 flex justify-end mr-5" src={cart} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
