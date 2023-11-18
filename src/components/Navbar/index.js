import React, { useEffect, useRef, useState } from 'react';
import SeerLogo from '../../assets/images/SeerLogo.svg';
import {RiMenu2Fill} from 'react-icons/ri';
import {ImCross} from 'react-icons/im';
import './index.css';
import {
    Link
  } from "react-router-dom";

const Navbar = ({setShowResponsiveNav,showResponsiveNav,responsiveNav}) => {

  return (
    <div  className='NavbarContainer'>
        <div className="NavbarLogo">
            <img src={SeerLogo} alt="Logo" />
        </div>
        <ul className="NavbarLinks">
        <li className="NavbarLink">
                <Link to="/" style={{fontFamily:'Oswald, sans-serif'}}>Home</Link>
            </li>
            <li className="NavbarLink">
                <Link to="/solutions"  style={{fontFamily:'Oswald, sans-serif'}}>Solutions</Link>
            </li>
            <li className="NavbarLink">
                <Link to="/caseStudies"  style={{fontFamily:'Oswald, sans-serif'}}>Case Studies</Link>
            </li>
            <li className="NavbarLink">
                <Link to="/about"  style={{fontFamily:'Oswald, sans-serif'}}>About Us</Link>
            </li>
            <li className="NavbarLink">
                <Link to="/blog"  style={{fontFamily:'Oswald, sans-serif'}}>Blog</Link>
            </li>
            <li className="NavbarLink">
                <Link to="/contact"  style={{fontFamily:'Oswald, sans-serif'}}>Contact</Link>
            </li>
        </ul>
        {!responsiveNav ? <RiMenu2Fill size={30} onClick={()=>{setShowResponsiveNav(true)}} /> :
        <ImCross size={30} onClick={()=>{setShowResponsiveNav(false)}} /> }
        {/* <ResponsiveNav setShowResponsiveNav={setShowResponsiveNav} showResponsiveNav={showResponsiveNav} /> */}
    </div>
  )
}

export default Navbar