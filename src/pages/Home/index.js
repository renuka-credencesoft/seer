import React from 'react';
import ClientsCarousel from '../../components/ClientsCarousel';
import HeroSection from '../../components/HeroSection';
import VideoSection from '../../components/VideoSection';
import './index.css';
import Demo from '../../components/Demos/demo';
import App from '../../components/apppp/App';

const Home = () => {
  return (
    <div className='HomePageContainer'>
        <HeroSection />
        <ClientsCarousel />
        <VideoSection />
        <Demo />
        <App />
    </div>
  )
}

export default Home