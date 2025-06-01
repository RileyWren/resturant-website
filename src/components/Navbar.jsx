import React from 'react';
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-20 flex items-center justify-between px-6 py-4 bg-transparent">
      <div>
        <img src={logo} alt="Logo" className=" h-15 sm:h-30 w-23 sm:w-auto" />
      </div>
      <div className="text-white text-2xl mt-20 sm:mt-0 sm:text-4xl font-Belleza md:text-5xl mr-15 font-bold">Restaurant</div>
<div className=" text-white text-xs sm:text-2xl">
  ☰
</div>

    </div>
  );
};

export default Navbar;
