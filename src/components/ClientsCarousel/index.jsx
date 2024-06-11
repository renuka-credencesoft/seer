import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import 'tailwindcss/tailwind.css';
import ClientCard from '../ClientCard';
import ClientCard2 from '../ClientCard2';
import ClientCard3 from '../ClientCard3';
import ClientCard4 from '../ClientCard4';

import SeerLogo from '../../assets/images/client_animates.png';
import SeerLogo2 from '../../assets/images/client_barkers.png';
import SeerLogo3 from '../../assets/images/client_glassons.png';
import SeerLogo4 from '../../assets/images/client_hallensteins.png';

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const ClientsCarousel = () => {
  const cards = [
    { component: <ClientCard key="1" />, imageUrl: SeerLogo },
    { component: <ClientCard2 key="2" />, imageUrl: SeerLogo2 },
    { component: <ClientCard3 key="3" />, imageUrl: SeerLogo3 },
    { component: <ClientCard4 key="4" />, imageUrl: SeerLogo4 },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const intervalRef = useRef(null);
  const cardCount = cards.length;

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % (isMobile ? cardCount : cardCount * 3));
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + (isMobile ? cardCount : cardCount * 3)) % (isMobile ? cardCount : cardCount * 3));
  };

  const startAutoScroll = () => {
    intervalRef.current = setInterval(handleNext, 4000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  useEffect(() => {
    if (!isMobile && activeIndex === cardCount * 2) {
      setTimeout(() => {
        setActiveIndex(cardCount);
      }, 500);
    } else if (!isMobile && activeIndex === 0) {
      setTimeout(() => {
        setActiveIndex(cardCount);
      }, 500);
    }
  }, [activeIndex, cardCount, isMobile]);

  const getMiddleIndex = () => {
    if (isMobile) return 0;
    return 1;
  };

  return (
    <div className="carousel-container -mb-28 relative  bg-[#edeeff]" onMouseEnter={stopAutoScroll} onMouseLeave={startAutoScroll}>
      <p style={{ fontFamily: 'gothic-book' }} className="heading    flex align-center justify-center pb-4 text-lg md:text-xl lg:text-2xl mb-4 ">
        Partners Predicting Preparing and Prospering  With SEER
      </p>
      <div className="relative overflow-hidden ">
        <div
          className={`flex transition-transform duration-500   ${activeIndex === cardCount * 2 || activeIndex === 0 ? 'transition-none' : ''}`}
          style={{ transform: `translateX(-${(activeIndex % (isMobile ? cardCount : cardCount * 3)) * (100 / (isMobile ? 1 : 3))}%)` }}
        >
          {[...cards, ...cards, ...cards].map((card, index) => {
            const isMiddleCard = (index % (isMobile ? cardCount : cardCount * 3)) === ((activeIndex % (isMobile ? cardCount : cardCount * 3)) + getMiddleIndex()) % (isMobile ? cardCount : cardCount * 3);
            return (
              <div key={index} className={`flex-none ${isMobile ? 'w-full' : 'w-full md:w-1/3'} px-2 `}>
                {isMiddleCard ? (
                  <div className={`${isMobile ? 'w-full' : 'full-width-card'} mb-[160px] mt-16 `}>
                    {card.component}
                  </div>
                ) : (
                  <div className={`${isMobile ? 'w-full' : 'h-[190px] w-full md:w-[260px] mx-auto md:ml-[120px] mt-[300px] md:mt-[160px]'} pr-4 flex justify-center items-center `}>
                    <img src={card.imageUrl} alt={`Card ${index % cardCount}`} className={`${isMobile ? 'w-full' : 'w-[400px]'} object-cover `} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <button onClick={handlePrev} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full text-xl ">
        <FaArrowLeft />
      </button>
      <button onClick={handleNext} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-3 rounded-full text-xl">
        <FaArrowRight />
      </button>
    </div>
  );
};

export default ClientsCarousel;




