import React from 'react';

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        alt=""
      />
      <div className="bg-black/40 absolute top-0 left-0 w-full h-screen " />
      <div className="absolute top-0 h-full w-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p>All Inclusive</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl ">
            Private Beaches & Getaways
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed dolore
            sunt tempora quis nam! Vel deleniti quae atque esse fuga,
            necessitatibus est illo inventore corrupti dolorum dolore,
            asperiores, commodi cumque?
          </p>
          <button>Reserve now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
