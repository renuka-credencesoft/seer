import React from 'react';
import Navbar from '../Navbar';
import './index.css';
import {
    Link
  } from "react-router-dom";

const ResponsiveNav = ({setShowResponsiveNav,showResponsiveNav}) => {
  return (
    <div className="responsiveMenu" style={showResponsiveNav ? {opacity: "1", transform: 'translateX(0px)',display: "block"} : null}>
        <Navbar setShowResponsiveNav={setShowResponsiveNav} showResponsiveNav={showResponsiveNav} responsiveNav={true} />
        <ul className="responsiveMenuNavbarLinks">
            <li className="NavbarLink">
                <Link to="/">Home</Link>
            </li>
            <li className="NavbarLink">
                <Link to="/solutions">Solutions</Link>
            </li>
            <li className="NavbarLink">
                <Link to="/about">About Us</Link>
            </li>
            <li className="NavbarLink">
                <Link to="/blog">Blog</Link>
            </li>
            <li className="NavbarLink">
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </div>
  )
}

export default ResponsiveNav