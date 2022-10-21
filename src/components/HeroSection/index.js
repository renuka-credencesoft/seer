import React from 'react';
import HeroImg from '../../assets/images/SeerHeroImg.svg';
import './index.css';

const HeroSection = () => {
  return (
    <div className='HeroSectionContainer'>
        <div className="HeroSectionLeftText">
            <h1>Your accurate, intuitive <span>demand <br /> forecaster.</span></h1>
            <p>Helping inventory planners get the right stock, in the right place, at the right time.</p>
        </div>
        <div className="HeroSectionBgImg">
            <img src={HeroImg} alt="hero" />
        </div>
    </div>
  )
}

export default HeroSection