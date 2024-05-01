import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import user from "../../assets/images/user.png";
import cart from "../../assets/images/cart.png";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [dropDown, setDropDown] = useState(false);
  const toggleButton = () => {
    setDropDown(!dropDown);
  };

  const Navigate = useNavigate();
  const logout = () => {
    const loggedUser = localStorage.getItem(`jwtToken`);
    localStorage.removeItem("jwtToken");
    console.log("logged out");
    Navigate("/signup");
  };
  const showCart = ()=>{
    Navigate("/cart")
  }

  return (
    <div>
      <div className="w-full h-14 bg-slate-100 flex justify-between gap-6 ">
        <div className=" flex gap-6">
          <div className=" flex justify-start ">
            <img className="ml-5 p-1  w-20 h-16" src={logo} alt="" />
          </div>
          <nav className="flex gap-5  items-center justify-center ">
            <NavLink to="/farmer">HOME</NavLink>
            <NavLink to="/farmer">LANDS</NavLink>
            <NavLink to="/farmer/myproducts">PRODUCTS</NavLink>
            <NavLink to="/farmer/sell">SELL</NavLink>
            <NavLink to="/farmer">DASHBOARD</NavLink>
          </nav>
        </div>
        <div className="flex items-center gap-5">
          <div className="">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              onClick={toggleButton}
              className="text-white relative mt- hover:scale-90 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="black"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Dropdown menu */}
            <div
              id="dropdown"
              className={`z-10 absolute top-12 right-20 ${
                dropDown ? "block" : "hidden"
              } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                {/* <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li> */}

                <li
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={logout}
                >
                  Log out
                </li>
              </ul>
            </div>
          </div>
          {/* <button onClick={showCart}>
            <img className="w-6 h-6 flex justify-end mr-5" src={cart} alt="" />
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
