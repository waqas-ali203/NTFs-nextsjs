'use  client'
import React from 'react';

const WorkCard = ({ imageUrl, heading, description }) => {
  return (
    <div className="flex flex-col items-center justify-center text-white p-10 rounded-md shadow-lg bg-[#3B3B3B]">
      <img src={imageUrl} alt="Work Card Image" className="w-44 h-44 object-cover rounded-full mb-5" />
      <h2 className="text-xl font-bold mb-3 text-center">{heading}</h2>
      <p className="text-sm text-center">{description}</p>
    </div>
  );
};

export default WorkCard;
