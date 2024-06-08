import React from 'react';
import HeroImg from '../../assets/images/SeerHeroImg.svg';
import './index.css';
import { MdContactPhone, MdEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";


const HeroSection = () => {
  return (
    <div className='HeroSectionContainer'>
      <div className=''>
        <div className="HeroSectionLeftText">
          <h1 style={{ fontFamily: 'Oswald, sans-serif' }}>Your accurate, intuitive <span>demand <br /> forecaster.</span></h1>
          <p style={{ fontFamily: 'Roboto, sans-serif' }}>Helping inventory planners get the right stock, in the right place, at the right time.</p>
          <button className='lg:text-lg text-white lg:bg-blue-400 lg:px-4 lg:py-2 lg:rounded-3xl hidden lg:block ' style={{ fontFamily: 'Oswald, sans-serif' }}>
            Learn more
          </button>
        </div>
        <div className="ContactRightSectionHome">
          <div className='flex bg-white rounded-l-lg pl-4'>
            <div className='w-2/3'>
              <p className="text-2xl text-[#4b5971] font-bold py-6">Get in touch</p>
              <p className='py-2' style={{ fontFamily: 'Oswald, sans-serif' }}>Name:</p>
              <div className='mr-4'>
                <input type="text" className='w-full border p-2 rounded-lg' />
              </div>
              <p className='py-2' style={{ fontFamily: 'Oswald, sans-serif' }}>Email:</p>
              <div className='mr-4'>
                <input type="email" className='w-full border p-2 rounded-lg' />
              </div>
              <p className='py-2' style={{ fontFamily: 'Oswald, sans-serif' }}>Phone:</p>
              <div className='mr-4'>
                <input type="text" className='w-full border p-2 rounded-lg' />
              </div>
              <p className='py-2' style={{ fontFamily: 'Oswald, sans-serif' }}>Enquiry:</p>
              <div className='mr-4'>
                <textarea name="" cols="30" className='w-full border p-2 rounded-lg' rows="5"></textarea>
              </div>
              <div className='pt-2 pb-6'>
                <button className='lg:text-lg text-white lg:bg-blue-400 lg:px-4 lg:py-1 lg:rounded-lg hidden lg:block ' style={{ fontFamily: 'Oswald, sans-serif' }}>
                  Submit
                </button>
              </div>
            </div>
            <div className='w-1/3 bg-[#303e58] rounded-r-lg text-white'>
              <div className='grid place-content-center place-items-center grid-cols-1 justify-center items-center pt-40'>
                <div >
                  <MdEmail size={40} />
                </div>
                <div className='mb-10'>
                  <p className='text-white'>seer@gmail.com</p>
                </div>
                <div>
                  <MdContactPhone size={40} />
                </div>
                <div className='mb-10'>
                  <p className='text-white'>9090909</p>
                </div>
                <div>
                  <FaMapLocationDot size={40} />
                </div>
                <div className='mb-10'>
                  <p className='text-white'>India</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="HeroSectionBgImg">
        <img src={HeroImg} alt="hero" />
      </div>
    </div>
  )
}

export default HeroSection