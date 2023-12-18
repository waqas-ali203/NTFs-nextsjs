'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { IMAGES } from '../../public/assets';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="flex items-center justify-between mx-12 my-8">
        <div className="text-white flex flex-row space-x-2">
          <Image src={IMAGES.MarketLogo} />
          <p className='text-white font-semibold text-xl'>NFT Marketplace</p>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white hover:text-gray-300 px-2 py-1 font-semibold">Marketplace</a>
          <a href="#" className="text-white hover:text-gray-300 px-2 py-1 font-semibold">Rankings</a>
          <a href="#" className="text-white hover:text-gray-300 px-2 py-1 font-semibold">Connect a wallet</a>
          <a href="#" className="text-white hover:text-gray-300 px-4 py-2 justify-self-center inline-block font-semibold bg-purple-500 hover:bg-purple-800 rounded-lg">SignUp</a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
