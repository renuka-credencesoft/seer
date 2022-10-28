import React from 'react';
import ClientsCarousel from '../../components/ClientsCarousel';
import SeerInsights from '../../components/SeerInsights';
import SolutionVideo from '../../components/SolutionVideo';
import VideoSection from '../../components/VideoSection';
import './index.css';

const Solution = () => {
  return (
    <div className='SolutionContainer'>
        <SolutionVideo />
        <VideoSection />
        <ClientsCarousel />
        <SeerInsights />
    </div>
  )
}

export default Solution