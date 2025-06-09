// ReserveTable.jsx
import React from "react";
import table1 from '../assets/table1.jpeg'
import table2 from '../assets/table2.jpeg'

const ReserveTable = () => {
  return (
    <div className=" bg-black text-white flex mb-60">
      {/* Left Section */}
      <div className="w-1/2 relative">
        <img
          src={table2}
          alt="restaurant"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-10 left-10 max-w-md">
          <p className="uppercase text-sm tracking-widest text-white text-shadow-lg">
            A table for every occasion.
          </p>
          <h1 className="text-4xl font-bold mt-2 leading-tight text-shadow-lg">
            A flawless dining experience book your seat today
          </h1>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-[#1a1a1a] p-12 flex flex-col justify-center">
        <h2 className="text-3xl font-semibold mb-8">Reserve your Table</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Enter your name*" className="bg-transparent border-b border-gray-600 p-2 outline-none" />
            <input type="email" placeholder="Email address" className="bg-transparent border-b border-gray-600 p-2 outline-none" />
            <input type="tel" placeholder="Phone number*" className="bg-transparent border-b border-gray-600 p-2 outline-none" />
            <input type="number" placeholder="Number of guest*" className="bg-transparent border-b border-gray-600 p-2 outline-none" />
            <input type="date" className="bg-transparent border-b border-gray-600 p-2 outline-none col-span-2" />
          </div>
          <textarea placeholder="Message*" className="bg-transparent border-b border-gray-600 p-2 w-full outline-none h-24 resize-none" />
          <button type="submit" className="bg-white text-black px-6 py-3 font-medium self-end mt-4 hover:bg-gray-300 transition">
            RESERVE NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReserveTable;
