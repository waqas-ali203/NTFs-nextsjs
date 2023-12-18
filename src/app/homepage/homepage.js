"use client";
import HeroSection from "@/components/HeroSection";
import TopCreater from "@/components/TopCreater";
import TrendingCollections from "@/components/TrendingCollections";
import DiscoverSection from "@/components/DiscoverSection";
import React from "react";
import WorkSection from "@/components/WorkSection";
import WeeklySuscrible from "@/components/WeeklySuscrible";
import MagicMashroomSection from "@/components/MagicMashroomSection";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <TrendingCollections />
      <TopCreater />
      <DiscoverSection />
      <MagicMashroomSection />
      <WorkSection />
      <WeeklySuscrible />
    </div>
  );
};

export default Homepage;
