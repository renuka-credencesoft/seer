import React from "react";
import ClientsCarousel from "../../components/ClientsCarousel";
import HeroSection from "../../components/HeroSection";
import VideoSection from "../../components/VideoSection";
import "./index.css";
import Demo from "../../components/Demos/demo";

const Home = () => {
  return (
    <div className="HomePageContainer bg-[#edeeff]">
      <HeroSection />
      <ClientsCarousel />
      <VideoSection />
      <Demo />
    </div>
  );
};

export default Home;
