import React from 'react';
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-20 flex items-center justify-between px-6 py-4 bg-transparent">
      <div>
        <img src={logo} alt="Logo" className=" h-15 sm:h-30 w-auto" />
      </div>
      <div className="text-white text-2xl mt-20 sm:text-6xl mr-15 font-bold">Restaurant</div>
<div className=" text-white text-2xl">
  ☰
</div>

    </div>
  );
};

export default Navbar;
