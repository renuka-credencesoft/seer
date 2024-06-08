import React from "react";
import "./index.css";
import multi from "../../assets/images/Multi.png";
import support from "../../assets/images/Support.png";
import economial from "../../assets/images/Economical.png";

const Card = ({ imageSrc, description }) => (
  <div className=" shadow-lg rounded-lg overflow-hidden">
    <img
      src={imageSrc}
      alt="Card Image"
      className="w-full h-52 object-cover "
    />
    <div className="p-6">
      <p className="text-white">{description}</p>
    </div>
  </div>
);

const SeerInsights = () => {
  const cards = [
    {
      imageSrc: support,
      description:
        "24/7 Support Capability. We understand the perpetual demands of multi-store retailers. Our team of experts are on-call, round the clock, ensuring your business never stops.",
    },
    {
      imageSrc: multi,
      description:
        "Multi-Domain Masters. Seer’s seasoned team has years of experience supporting the world’s popular platforms - LS Retail, Business Central, Dynamics NAV, Azure, Microsoft .Net, Android and IOS.",
    },
    {
      imageSrc: economial,
      description:
        "Economical & Efficient. Eliminate your burden of maintaining a technical team. Our offering is structured to suit your unique requirements and budget – we won’t burn a hole in your pocket.",
    },
  ];

  return (
    <div className="container mx-auto px-4 my-[-80px]">
      <h2 className="text-3xl  font-bold text-center mb-8 text-white mt-8 ">
        POWERED BY PRESCIENT, ACCURATE A.I. ALGORITHMS. Swathes of transactions
        are analysed at light-speed, along with parameters like promotions, door
        counts and more. Powerful, predictive formulae are automatically derived
        to drive your decisions for every SKU, at every
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card
            key={index}
            imageSrc={card.imageSrc}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default SeerInsights;











