"use client";
import React from "react";
import Button from "./Button";
import Image from "next/image";
import { IMAGES } from "../../public/assets";

const Footer = () => {
  return (
    <>
      <footer className="text-white p-8 bg-[#3B3B3B] mt-10">
        <div className="flex flex-wrap justify-around mt-7">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8">
            <div className="flex flex-row items-start space-x-2">
              <Image src={IMAGES.MarketLogo} />
              <h2 className="text-xl font-bold mb-7">NFT Marketplace</h2>
            </div>
            <p className="mb-3 text-[#CCCCCC]">
              NFT marketplace UI created with Anima for Figma.
            </p>
            <p className="text-[#CCCCCC]">Join our community</p>
            <div className="flex flex-row mt-6 space-x-2">
              <a href="#">
                <img
                  src="../assets/discordlogo-2@2x.svg"
                  alt="No Social Media Icon"
                />
              </a>
              <a href="#">
                <img
                  src="../assets/youtubelogo-1@2x.svg"
                  alt="No Social Media Icon"
                />
              </a>
              <a href="#">
                <img
                  src="../assets/twitterlogo-2@2x.svg"
                  alt="No Social Media Icon"
                />
              </a>
              <a href="#">
                <img
                  src="../assets/instagramlogo-1@2x.svg"
                  alt="No Social Media Icon"
                />
              </a>
            </div>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8">
            <h2 className="text-xl font-bold mb-7">Explore</h2>
            <p className="mb-3  text-[#CCCCCC]">Marketplace</p>
            <p className="mb-3 text-[#CCCCCC]">Rankings</p>
            <p className="text-[#CCCCCC]">Connect a wallet</p>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8">
            <h2 className="text-xl font-bold mb-7 text-white">
              Join Our Weekly Digest
            </h2>
            <p className="mb-5 text-[#CCCCCC]">
              Get exclusive promotions & updates straight to your inbox.
            </p>
            <div className="bg-white p-1 rounded-xl">
              <form className="flex flex-col md:flex-row items-center">
                <input
                  type="email"
                  placeholder="Enter your email here"
                  className="w-full md:w-2/3 p-2 focus:outline-none rounded mb-4 md:mr-4 md:mb-0 text-black"
                />
                <Button
                  type="submit"
                  title="Subscribe"
                  className="w-full md:w-1/3 p-2 bg-purple-600 text-white rounded"
                />
              </form>
            </div>
          </div>
        </div>
        <hr className="border-b border-gray-500"></hr>
      </footer>
    </>
  );
};

export default Footer;
