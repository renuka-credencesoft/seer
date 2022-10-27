import React from 'react';
import ClientsCarousel from '../../components/ClientsCarousel';
import SolutionVideo from '../../components/SolutionVideo';
import VideoSection from '../../components/VideoSection';
import './index.css';

const Solution = () => {
  return (
    <div className='SolutionContainer'>
        <SolutionVideo />
        <VideoSection />
        <ClientsCarousel />
    </div>
  )
}

export default Solution