import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="absolute w-full flex justify-between p-4 items-center">
      <h1 className="text-white font-bold text-2xl z-30">Experiences</h1>
      <HiMenuAlt3
        size={25}
        className="z-30 text-white cursor-pointer"
        onClick={() => setisOpen(!isOpen)}
      />
      <div
        className={`
      ${
        isOpen
          ? 'fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10 ease-in duration-500'
          : 'absolute top-0 h-screen left-[-100%] animate-none ease-out duration-200'
      } 

      `}
      >
        <ul className="flex flex-col fixed w-full h-full items-center justify-center">
          <li className="font-bold text-3xl p-8">Home</li>
          <li className="font-bold text-3xl p-8">Destinations</li>
          <li className="font-bold text-3xl p-8">Reservations</li>
          <li className="font-bold text-3xl p-8">Ameneties</li>
          <li className="font-bold text-3xl p-8">Rooms</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
