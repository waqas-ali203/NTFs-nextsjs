'use client'
import React from "react";
import Button from "./Button";

const MagicMashroomSection = () => {
  return (
    <div className="relative my-10 bg-center h-screen">
      <div
        className="absolute  inset-0 bg-cover overflow-hidden w-full"
        style={{
          backgroundImage: 'url("/assets/primary-photo-placeholder@2x.png")'
        }}
      >
        <div className="flex flex-row mx-24">
        <div className="absolute  bottom-5 w-full text-white  p-8">
          <h3 className="text-sm font-bold p-6 rounded-xl bg-black bg-opacity-60 inline-block">
            Shroomie
          </h3>
          <h2 className="text-5xl font-bold my-5">Magic Mashrooms</h2>
          <Button title="See more" className="bg-white px-7 py-3 text-black" />
        </div>
        <div className="absolute bg-black bg-opacity-60 rounded-xl bottom-12 mr-24 right-5 p-8">
          <div className="text-white">Auction ends in:</div>
          <div className=" mt-5 flex flex-row">
            <h1 className="text-white text-5xl font-bold">59 :<div className="text-sm font-semibold mt-2">Hour</div></h1>
            <h1 className="text-white text-5xl font-bold"> 59 :<div className="text-sm font-semibold mt-2">Mint</div></h1>
            <h1 className="text-white text-5xl font-bold">59 <div className="text-sm font-semibold mt-2">Sec</div></h1>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default MagicMashroomSection;
