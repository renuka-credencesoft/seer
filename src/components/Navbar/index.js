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
                <Link to="/">Home</Link>
            </li>
            <li className="NavbarLink">
                <a href="/solutions">Solutions</a>
            </li>
            <li className="NavbarLink">
                <Link to="/about">About Us</Link>
            </li>
            <li className="NavbarLink">
                <a href="">Blog</a>
            </li>
            <li className="NavbarLink">
                <a href="">Contact</a>
            </li>
        </ul>
        {!responsiveNav ? <RiMenu2Fill size={30} onClick={()=>{setShowResponsiveNav(true)}} /> :
        <ImCross size={30} onClick={()=>{setShowResponsiveNav(false)}} /> }
        {/* <ResponsiveNav setShowResponsiveNav={setShowResponsiveNav} showResponsiveNav={showResponsiveNav} /> */}
    </div>
  )
}

export default Navbar