import React from 'react';
import './index.css';
import Carousel from 'react-bootstrap/Carousel';
import ClientCard from '../ClientCard';

const ClientsCarousel = () => {
  return (
    <div className='ClientsCarouselContainer'>
        <h1><span>Clients</span></h1>
    <Carousel variant="dark">
        <Carousel.Item>
            <div className="carousel-inner-cards">
                <ClientCard />
                <ClientCard />
                <ClientCard />
                <ClientCard />
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="carousel-inner-cards">
                <ClientCard />
                <ClientCard />
                <ClientCard />
                <ClientCard />
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="carousel-inner-cards">
                <ClientCard />
                <ClientCard />
                <ClientCard />
                <ClientCard />
            </div>
        </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default ClientsCarousel