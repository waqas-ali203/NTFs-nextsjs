"use client";
import React from "react";
import WorkCard from "./WorkCard";

const WorkSection = () => {
  const profilesData = [
    {
      imageUrl: "/assets/icon-3@2x.svg",
      heading: "Setup Your wallet",
      description:
        "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    },
    {
      imageUrl: "/assets/icon-4@2x.svg",
      heading: "Create Collection",
      description:
        "Upload your work and setup your collection. Add a description, social links and floor price.",
    },
    {
      imageUrl: "/assets/icon-5@2x.svg",
      heading: "Start Earning",
      description:
        "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    },
  ];
  return (
    <div className="mx-16 mt-24">
      <div className="flex flex-col sm:flex-row sm:px-12 text-white">
        <div className="mb-3 sm:mb-0">
          <h2 className="text-4xl sm:text-xl md:text-2xl font-bold sm:mx-0">
            How it works
          </h2>
          <p className="text-lg mt-2 sm:mx-0">Find out how to get started</p>
        </div>
      </div>
      <div className="flex flex-row sm:justify-around rounded-lg px-10 py-7 sm:p-5 md:p-6">
        {profilesData.map((profile, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 my-8">
            <WorkCard
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

export default WorkSection;
