'use client'
import React from "react";
import CustomCard from "./CustomCard";
import Image from "next/image";
import { IMAGES } from "../../public/assets";

const TrendingCollections = () => {
  const profilesData = [
    {
      MainImage: "/assets/primary-photo-placeholder-1@2x.png",
      FirstImage: "/assets/secondary-photo-placeholder@2x.png",
      SecondImage: "/assets/secondary-photo-placeholder-1@2x.png",
      CardTitle: "Dsgn Animals",
      CardDescription: "MrFox",
    },
    {
      MainImage: "/assets/primary-photo-placeholder@2x.png",
      FirstImage: "/assets/secondary-photo-placeholder-2@2x.png",
      SecondImage: "/assets/secondary-photo-placeholder-3@2x.png",
      CardTitle: "Magic Mushrooms",
      CardDescription: "Shroomie",
    },
    {
      MainImage: "/assets/primary-photo-placeholder-5@2x.png",
      FirstImage: "/assets/secondary-photo-placeholder-10@2x.png",
      SecondImage: "/assets/secondary-photo-placeholder-11@2x.png",
      CardTitle: "Disco Machines",
      CardDescription: "BeKind2Robots",
    },
  ];
  return (
    <div className="mx-16 my-4">
      <div className="sm:p-5 md:p-6 text-white">
        <h2 className="text-4xl sm:text-xl md:text-2xl font-bold  sm:mx-16">
          Trending Collections
        </h2>
        <p className="text-lg sm:mx-16">
          Checkout our weekly update collections
        </p>
        <div className="flex flex-wrap justify-around rounded-lg sm:p-5 md:p-6">
          {profilesData.map((profile, index) => (
            <CustomCard
              key={index}
              MainImage={profile.MainImage}
              FirstImage={profile.FirstImage}
              SecondImage={profile.SecondImage}
              CardTitle={profile.CardTitle}
              CardDescription={profile.CardDescription}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingCollections;
