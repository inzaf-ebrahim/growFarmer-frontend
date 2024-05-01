import React from "react";
import bg from "../../assets/images/farmer-home.jpeg"
import FarmerNavbar from "../../components/Farmer/FarmerNavbar"

function FarmerHome() {
  return (
  <>
    <div className='w-screen h-[633px] bg-no-repeat bg-cover' style={{backgroundImage:`url(${bg})`}}>
      {/* <div>Farmer home page</div> */}
      <h1 className="text-white text-7xl pl-6 pt-56 font-serif ">
          organic fresh
        </h1>
        <h1 className="text-white text-7xl pl-6 pt-4 font-serif">food</h1>
        <h1 className="text-white text-2xl pl-6 pt-8 font-serif">
          Your Farm, Your Future - Let's
        </h1>
        <h1 className="text-white text-2xl pl-6 pt-2 font-serif">
          Grow Farmer Together
        </h1>
    </div>
  </>
  );
}

export default FarmerHome;
