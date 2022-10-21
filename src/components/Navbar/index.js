import React from 'react';
import SeerLogo from '../../assets/images/SeerLogo.svg';
import {RiMenu2Fill} from 'react-icons/ri';
import {ImCross} from 'react-icons/im';
import './index.css';

const Navbar = ({setShowResponsiveNav,showResponsiveNav,responsiveNav}) => {
  return (
    <div className='NavbarContainer'>
        <div className="NavbarLogo">
            <img src={SeerLogo} alt="Logo" />
        </div>
        <ul className="NavbarLinks">
            <li className="NavbarLink">
                <a href="">Home</a>
            </li>
            <li className="NavbarLink">
                <a href="">Solutions</a>
            </li>
            <li className="NavbarLink">
                <a href="">About Us</a>
            </li>
            <li className="NavbarLink">
                <a href="">Blog</a>
            </li>
            <li className="NavbarLink">
                <a href="">Contact</a>
            </li>
        </ul>
        {!responsiveNav ? <RiMenu2Fill size={30} onClick={()=>{setShowResponsiveNav(!showResponsiveNav)}} /> :
        <ImCross size={30} onClick={()=>{setShowResponsiveNav(!showResponsiveNav)}} /> }
    </div>
  )
}

export default Navbar