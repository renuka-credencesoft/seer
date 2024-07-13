import React, { useRef } from "react";
import ClientsCarousel from "../../components/ClientsCarousel";
import HeroSection from "../../components/HeroSection";
import VideoSection from "../../components/VideoSection";
import Demo from "../../components/Demos/demo";
import "./index.css";

const Home = () => {
  const demoRef = useRef(null);

  const scrollToDemo = () => {
    demoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="HomePageContainer bg-[#edeeff]">
      <HeroSection scrollToDemo={scrollToDemo} />
      <ClientsCarousel />
      <VideoSection />
      <div ref={demoRef}>
        <Demo />
      </div>
    </div>
  );
};

export default Home;
