import React from 'react';
import './index.css';
import Carousel from 'react-bootstrap/Carousel';
import ClientCard from '../ClientCard';
import ClientCard2 from '../ClientCard2';
import ClientCard3 from '../ClientCard3';
import ClientCard4 from '../ClientCard4';

const ClientsCarousel = () => {
  return (
    <div className='ClientsCarouselContainer'>
        <h1><span>Clients</span></h1>
    <Carousel variant="dark">
        <Carousel.Item>
            <div className="carousel-inner-cards">
                <ClientCard />
                <ClientCard2 />
                <ClientCard3 />
                <ClientCard4 />
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="carousel-inner-cards">
                <ClientCard />
                <ClientCard2 />
                <ClientCard3 />
                <ClientCard4 />
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="carousel-inner-cards">
                <ClientCard />
                <ClientCard2 />
                <ClientCard3 />
                <ClientCard4 />
            </div>
        </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default ClientsCarousel