import React from "react";
import "./index.css";
import Insights from "../../assets/images/Insights.png";

import HeroImg from "../../assets/images/SeerHeroImg.svg";
const Card = ({ description }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img src={HeroImg} alt="Card Image" className="w-full h-48 object-cover" />
    <div className="p-6">
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

const SeerInsights = () => {
  const cards = [
    {
      imageSrc: { HeroImg },
      description:
        "Stores Sale and Sell-Through Analysis:Stores Sale and Sell-Through AnalysisStores Sale and Margin AnalysisStores Sale and Margin .",
    },

    {
      imageSrc: { HeroImg },
      description:
        "Sales Person Performance:Stores Sale and Margin AnalysisStores Sale and Margin AnalysisStores Sale and Margin AnalysisStores Sale and Margin .",
    },

    {
      imageSrc: { HeroImg },
      description:
        "Vendor Performance:Stores Sale and Margin AnalysisStores Sale and Margin AnalysisStores Sale and Margin .",
    },

    {
      imageSrc: { HeroImg },
      description:
        "Category and Item Performance Sales and Margin Analysis:Stores Sale and Margin AnalysisStores Sale and Margin AnalysisStores Sale and Margin .",
    },

    {
      imageSrc: { HeroImg },
      description:
        " Margin Analysis:Category and Item Performance Sales and Margin Analysis:Stores Sale and Margin AnalysisStores Sale and Margin AnalysisStores Sale and Margin .",
    },

    {
      imageSrc:  { HeroImg },
      description:
        " Stock Aging:Sell-Through Analysis:Category and Item Performance Sales and Margin Analysis:Stores Sale and Margin AnalysisStores Sale and Margin AnalysisStores Sale and Margin .",
    },

    {
      imageSrc:  { HeroImg },
      description:
        "Customer Analysis:Category and Item Performance Sales and Margin Analysis:Stores Sale and Margin AnalysisStores Sale and Margin AnalysisStores Sale and Margin .",
    },

    {
      imageSrc:  { HeroImg },
      description:
        "Category and Item Performance Sales and Margin Analysis:Stores Sale and Margin AnalysisStores Sale and Margin AnalysisStores Sale and Margin .",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className=" paragraph text-3xl font-bold text-center mb-8 text-blue-500">
        POWERED BY PRESCIENT, ACCURATE A.I. ALGORITHMS. Swathes of transactions
        are analysed at light-speed, along with parameters like promotions, door
        counts and more. Powerful, predictive formulae are automatically derived
        to drive your decisions for every SKU, at every
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
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
