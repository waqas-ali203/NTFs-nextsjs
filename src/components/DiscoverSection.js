"use client";
import React from "react";
import DiscoverCard from "./DiscoverCard";
import Button from "./Button";

const TopCreater = () => {
  const profilesData = [
    {
      imageUrl: "/assets/DiscoverImage1.png",
      heading: "Distant Galaxy",
      description: "MoonDancer",
    },
    {
      imageUrl: "/assets/image-placeholder-6@2x.png",
      heading: "Life On Edena",
      description: "NebulaKid",
    },
    {
      imageUrl: "/assets/image-placeholder-86@2x.png",
      heading: "AstroFiction",
      description: "Spaceone",
    },
  ];

  return (
    <div className="mx-16 mt-24">
      <div className="flex flex-col sm:flex-row justify-between sm:px-6 md:px-12 text-white">
        <div className="my-6 sm:mb-0">
          <h2 className="text-4lg sm:text-xl md:text-2xl font-bold sm:mx-0">
            Discover More NFTs
          </h2>
          <p className="text-lg mt-2 sm:mx-0">Explore new trending NFTs</p>
        </div>
        <Button
          title="See All"
          className="bg-black px-7 py-3 text-white border-purple-600 border hover:bg-gray-900 rounded-lg mt-4 sm:mt-0"
        />
      </div>

      <div className="flex flex-wrap mt-6 justify-around rounded-lg sm:p-5 md:p-6">
        {profilesData.map((profile, index) => (
          <div
            key={index}
            className="sm:my-2 md:my-0 sm:mx-2 md:mx-4"
          >
            <DiscoverCard
              imageUrl={profile.imageUrl}
              heading={profile.heading}
              description={profile.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCreater;
