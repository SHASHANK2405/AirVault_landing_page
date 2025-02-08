"use client"; // Required for Next.js compatibility (optional for Astro)

import Head from "next/head";
import HeroSection from "./HeroSection";
import MemoriesTrackSection from "./MemoriesTrackSection";
import FacesSection from "./FacesSection";
import MomentsSection from "./MomentsSection";
import ImagesMovesSection from "./ImagesMovesSection";
import LastSection from "./LastSection";

const Home = () => {
  return (
    <div className="w-full bg-[#F9F9F9] overflow-hidden flex flex-col">
      <Head>
        <title>AirVault</title>
        <meta name="description" content="A modern landing page" />
      </Head>

      {/* Main Wrapper with Max Width */}
      <div className="max-w-[1280px] w-full mx-auto flex flex-col gap-10">
        <HeroSection />
        <MemoriesTrackSection />
      </div>
      <FacesSection />

      <div className="max-w-[1280px] w-full mx-auto flex flex-col gap-16">
        <MomentsSection />
        <ImagesMovesSection />
        <LastSection />
      </div>

      {/* FacesSection OUTSIDE the Wrapper */}
    </div>
  );
};

export default Home;
