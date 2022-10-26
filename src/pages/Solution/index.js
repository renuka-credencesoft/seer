import React from 'react';
import ClientsCarousel from '../../components/ClientsCarousel';
import VideoSection from '../../components/VideoSection';
import './index.css';

const Solution = () => {
  return (
    <div className='SolutionContainer'>
        <VideoSection />
        <ClientsCarousel />
    </div>
  )
}

export default Solution