'use client'
import React from 'react';
import Image from 'next/image';

const CustomCard = ({ MainImage, FirstImage , SecondImage , CardTitle , CardDescription}) => {
  return (
    <div className="w-80 rounded-md overflow-hidden shadow-lg mb-4 mr-auto">
      <img src={MainImage} alt="Card Header" className='my-5 transition-transform transform hover:scale-95 cursor-pointer' />
      <div className="flex justify-between">
        <img src={FirstImage} alt="Image 1" className="w-24 h-auto transition-transform transform hover:scale-95 cursor-pointer" />
        <img src={SecondImage} alt="Image 2" className="w-24 h-auto transition-transform transform hover:scale-95 cursor-pointer" />
        <div className='flex items-center justify-center h-full'>
        <p className='bg-purple-600 w-24 h-auto py-9 px-4 rounded-3xl text-center transition-transform transform hover:scale-95 cursor-pointer'><b>1025+</b></p>
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{CardTitle}</h2>
        <p className="text-sm white">{CardDescription}</p>
      </div>
    </div>
  );
};

export default CustomCard;
