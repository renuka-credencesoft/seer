import React from 'react';
import SeerLogo from '../../assets/images/SeerLogo.svg';
import { RiMenu2Fill } from 'react-icons/ri';
import { ImCross } from 'react-icons/im';
import './index.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ setShowResponsiveNav, showResponsiveNav, responsiveNav }) => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className='NavbarContainer'>
      <div className="NavbarLogo">
        <img src={SeerLogo} alt="Logo" />
      </div>
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
      {!responsiveNav ? (
        <RiMenu2Fill size={30} onClick={() => { setShowResponsiveNav(true) }} />
      ) : (
        <ImCross size={30} onClick={() => { setShowResponsiveNav(false) }} />
      )}
      {/* <ResponsiveNav setShowResponsiveNav={setShowResponsiveNav} showResponsiveNav={showResponsiveNav} /> */}
    </div>
  );
}

export default Navbar;
