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
            <li className="responsiveMenuNavbarLink">
                <Link to="/">Home</Link>
            </li>
            <li className="responsiveMenuNavbarLink">
                <a href="">Solutions</a>
            </li>
            <li className="responsiveMenuNavbarLink">
                <Link to="/about">About Us</Link>
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