import React from 'react';
import ClientsCarousel from '../../components/ClientsCarousel';
import HeroSection from '../../components/HeroSection';
import VideoSection from '../../components/VideoSection';
import './index.css';

const Home = () => {
  return (
    <div className='HomePageContainer'>
        <HeroSection />
        <ClientsCarousel />
        <VideoSection />
    </div>
  )
}

export default Home