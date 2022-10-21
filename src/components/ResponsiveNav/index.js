import React from 'react';
import Navbar from '../Navbar';
import './index.css';

const ResponsiveNav = ({setShowResponsiveNav,showResponsiveNav}) => {
    console.log(showResponsiveNav)
  return (
    <div className="responsiveMenu" style={showResponsiveNav ? {opacity: "1", transform: 'translateX(0px)'} : null}>
        <Navbar />
        <ul className="responsiveMenuNavbarLinks">
            <li className="responsiveMenuNavbarLink">
                <a href="">Home</a>
            </li>
            <li className="responsiveMenuNavbarLink">
                <a href="">Solutions</a>
            </li>
            <li className="responsiveMenuNavbarLink">
                <a href="">About Us</a>
            </li>
            <li className="responsiveMenuNavbarLink">
                <a href="">Blog</a>
            </li>
            <li className="responsiveMenuNavbarLink">
                <a href="">Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default ResponsiveNav