'use client'
import React from 'react';

const BrowserCatogeryCard = ({ imageUrl, heading, description , icon }) => {
  return (
    <div className="relative overflow-hidden mb-8">
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="bg-cover bg-center h-64 filter blur-lg"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {icon}
        </div>
      </div>
      
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">{heading}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default BrowserCatogeryCard;
