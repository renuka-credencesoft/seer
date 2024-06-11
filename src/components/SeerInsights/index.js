import React from "react";
import "./index.css";
import multi from "../../assets/images/Multi.png";
import support from "../../assets/images/Support.png";
import economial from "../../assets/images/Economical.png";

const Card = ({ imageSrc, description, description1 }) => (
  <div className="rounded-lg overflow-hidden shadow-lg border border-slate-50 shadow-gray-400">
    <img
      src={imageSrc}
      alt="Card Image"
      className="w-full h-52 object-cover "
    />
    <div className="p-6">
      <p style={{fontFamily:"roboto"}} className="text-white">{description}</p>
      <p style={{fontFamily:"roboto"}} className="text-white">{description1}</p>
    </div>
    
  </div>
);

const SeerInsights = () => {
  const cards = [
    {
      imageSrc: support,
      description:
        "24/7 Support Capability",
      description1: " We understand the perpetual demands of multi-store retailers. Our team of experts are on-call, round the clock, ensuring your business never stops.",
    },
    {
      imageSrc: multi,
      description:
        "Multi Domain Masters",
        description1:"Seer’s seasoned team has years of experience supporting the world’s popular platforms - LS Retail, Business Central, Dynamics NAV, Azure, Microsoft .Net, Android and IOS",
    },
    {
      imageSrc: economial,
      description:
        "Economical and Efficient",
        description1:"Eliminate your burden of maintaining a technical team. Our offering is structured to suit your unique requirements and budget – we won’t burn a hole in your pocket"
    },
  ];

  return (
    <div className="container mx-auto px-4 my-[-80px]">
      <h2
        style={{ fontFamily: "gothic-book" }}
        className="  font-bold text-center mb-5 text-white mt-5 fontSize"
      >
        Don’t Sweat. With Seer Support
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
        {cards.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc}
            description={card.description}
            description1={card.description1}
          />
        ))}
      </div>
    </div>
  );
};

export default SeerInsights;
