import React from "react";
import "./index.css";
import { Link } from 'react-router-dom';
import { RiMenu2Fill } from 'react-icons/ri';
import { ImCross } from 'react-icons/im';

const Footer = ({ setShowResponsiveNav, showResponsiveNav, responsiveNav }) => {
  return (
    <div className="FooterContainer bottom-0 left-0 right-0 absolute">
      <span style={{ fontFamily:'Comfortaa, sans-serif' }}>©2022 Seer Inc</span>
      <ul className="NavbarLinks">
        <li className="NavbarLink">
          <Link to="/" className='NavbarLinkText'>Home</Link>
        </li>
        <li className="NavbarLink">
          <Link to="/solutions" className='NavbarLinkText'>Solutions</Link>
        </li>
        <li className="NavbarLink">
          <Link to="/caseStudies" className='NavbarLinkText'>Case Studies</Link>
        </li>
        <li className="NavbarLink">
          <Link to="/about" className='NavbarLinkText'>About Us</Link>
        </li>
        <li className="NavbarLink">
          <Link to="/blog" className='NavbarLinkText'>Blog</Link>
        </li>
        <li className="NavbarLink">
          <Link to="/contact" className='NavbarLinkText'>Contact</Link>
        </li>
      </ul>
      
    </div>
  );
};

export default Footer;
