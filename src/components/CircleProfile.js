'use client'
import React from 'react';

const CircleProfile = ({ imageUrl, heading, description }) => {
  return (
    <div className="text-center text-white mx-2 my-3 rounded-xl p-10 transition-transform transform hover:scale-95 cursor-pointer bg-[#3B3B3B]">
      <div className="mx-auto bg-gray-300 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-full overflow-hidden mb-4">
        <img src={imageUrl} alt="Profile" className="w-full h-full" />
      </div>
      <h2 className="text-lg sm:text-xl md:text-xl font-semibold mb-2">{heading}</h2>
      <p className="text-sm sm:text-base  text-white">{description}</p>
    </div>
  );
};

export default CircleProfile;
