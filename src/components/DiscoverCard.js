'use client'
import React from 'react';

const DiscoverCard = ({ imageUrl, heading, description }) => {
  return (
    <div className="rounded-2xl overflow-hidden transition-transform transform hover:scale-95 cursor-pointer text-white bg-[#3B3B3B]">
    <img src={imageUrl} alt="Discover Card" className="w-72 h-80" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{heading}</div>
      <p className="text-base">{description}</p>
    </div>
  </div>
  );
};

export default DiscoverCard;
