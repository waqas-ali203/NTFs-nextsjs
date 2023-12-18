"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";
import { IMAGES } from "../../public/assets";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around my-16 text-white">
      <div className="max-w-full md:max-w-1/2">
        <div className="flex flex-col justify-center max-w-md px-4 md:px-0">
          <h1 className="text-xl md:text-4xl lg:text-5xl font-bold mb-4">
            Discover Digital Art & Collect NFTs
          </h1>
          <p className="text-sm md:text-lg lg:text-xl mb-6">
            NFT Marketplace created UI with anima for Figma. Collect, Buy and
            Sell from more than 20k NFT Artist
          </p>
          <div>
          <Button
            title="Get Started"
            className="text-white px-7 py-3 md:px-6 lg:px-8 bg-purple-600 hover:bg-purple-700"
          />
          </div>

          <div className="flex flex-col md:flex-row sm:flex-row my-5">
            <div className="mb-4 md:mb-0 md:mr-4 lg:mr-7">
              <h2 className="text-md md:text-lg lg:text-xl font-bold mb-2">
                240k+
              </h2>
              <p>Total Sales</p>
            </div>
            <div className="mb-4 md:mb-0 md:mr-4 lg:mr-7">
              <h2 className="text-md md:text-lg lg:text-xl font-bold mb-2">100k+</h2>
              <p>Auctions</p>
            </div>
            <div>
              <h2 className="text-md md:text-lg lg:text-xl font-bold mb-2">
                240k+
              </h2>
              <p>Artists</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[65.625rem] md:max-w-1/2 mb-8 md:mb-0">
        <div className="p-6 rounded-lg">
          <Image
            src={IMAGES.heroanimation}
            alt="Card Image"
            className="w-96 h-full mb-4"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
