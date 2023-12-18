"use client";
import React from "react";
import CircleProfile from "./CircleProfile";
import Button from "./Button";

const TopCreater = () => {
  const profilesData = [
    {
      imageUrl: "/assets/avatar-placeholder-98@2x.png",
      heading: "Keepitreal",
      description: "Total Sales: 34.53 ETH",
    },
    {
      imageUrl: "/assets/avatar-placeholder-99@2x.png",
      heading: "DigiLab",
      description: "Total Sales: 34.53 ETH",
    },
    {
      imageUrl: "/assets/avatar-placeholder-100@2x.png",
      heading: "GravityOne",
      description: "Total Sales: 34.53 ETH",
    },
    {
      imageUrl: "/assets/avatar-placeholder-101@2x.png",
      heading: "Juanie",
      description: "Total Sales: 34.53 ETH",
    },
    {
      imageUrl: "/assets/avatar-placeholder-102@2x.png",
      heading: "BlueWhale",
      description: "Total Sales: 34.53 ETH",
    },
    {
      imageUrl: "/assets/avatar-placeholder-103@2x.png",
      heading: "Mr fox",
      description: "Total Sales: 34.53 ETH",
    },
    {
      imageUrl: "/assets/avatar-placeholder-104@2x.png",
      heading: "Shroomie",
      description: "Total Sales: 34.53 ETH",
    },
    {
      imageUrl: "/assets/avatar-placeholder-105@2x.png",
      heading: "robotica",
      description: "Total Sales: 34.53 ETH",
    },
    {
      imageUrl: "/assets/avatar-placeholder-106@2x.png",
      heading: "RustyRobot",
      description: "Total Sales: 34.53 ETH",
    },
    {
      imageUrl: "/assets/avatar-placeholder-107@2x.png",
      heading: "animakid",
      description: "Total Sales: 34.53 ETH",
    },
    {
      imageUrl: "/assets/avatar-placeholder-108@2x.png",
      heading: "Dotgu",
      description: "Total Sales: 34.53 ETH",
    },
    {
      imageUrl: "/assets/avatar-placeholder-12.png",
      heading: "Ghiblier",
      description: "Total Sales: 34.53 ETH",
    },
  ];

  return (
    <div div className="mx-16 mt-24">
      <div className="flex flex-col sm:flex-row justify-between sm:px-12 text-white">
        <div className="mb-14 sm:mb-0">
          <h2 className="text-4lg sm:text-xl md:text-2xl font-bold sm:mx-0">
          Top creators
          </h2>
          <p className="text-lg sm:mx-0">
          Checkout Top Rated Creators on the NFT Marketplace
          </p>
        </div>
        <Button
          title="View ranking"
          className="bg-black px-7 py-3 text-white border-purple-600 border hover:bg-gray-900 rounded-lg mt-4 sm:mt-0"
        />
      </div>
      <div className="flex flex-wrap justify-around rounded-lg sm:p-5 md:p-6">
        {profilesData.map((profile, index) => (
          <CircleProfile
            key={index}
            imageUrl={profile.imageUrl}
            heading={profile.heading}
            description={profile.description}
          />
        ))}
      </div>
    </div>
  );
};

export default TopCreater;
