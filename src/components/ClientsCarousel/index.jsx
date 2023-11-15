import React from 'react';
import './index.css';
import Carousel from 'react-bootstrap/Carousel';
import ClientCard from '../ClientCard';
import ClientCard2 from '../ClientCard2';
import ClientCard3 from '../ClientCard3';
import ClientCard4 from '../ClientCard4';

const ClientsCarousel = () => {
  return (
    <div>
        <p className='heading'>Partners Predicting Preparing and Prospering - With SEER</p>
    <Carousel variant="dark" >
        <Carousel.Item> 
            <div className="carousel-inner-cards">
                <ClientCard3 />
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="carousel-inner-cards">
                <ClientCard />
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="carousel-inner-cards">
                <ClientCard2 />
            </div>
        </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default ClientsCarousel