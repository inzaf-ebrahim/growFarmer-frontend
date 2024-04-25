import React from "react";
import bg from "../../assets/images/farmer-home.jpeg"
import FarmerNavbar from "../../components/Farmer/FarmerNavbar"

function FarmerHome() {
  return (
  <>
      <div>
        <FarmerNavbar/>
      </div>
    <div className='w-screen h-[633px] bg-no-repeat bg-cover' style={{backgroundImage:`url(${bg})`}}>
      <div>Farmer home page</div>
    </div>
  </>
  );
}

export default FarmerHome;
