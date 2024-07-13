import React from "react";
import "./index.css";
import { Link, useLocation } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import logo from "../../assets/images/logo-credencesoft.png";
const Footer = ({ setShowResponsiveNav, showResponsiveNav, responsiveNav }) => {
  const location = useLocation();
  return (
    <div className="FooterContainer bottom-0 left-0 right-0 absolute">
      <span style={{ fontFamily: "gothic-book" }}>
        ©202<span style={{ fontFamily: "serif" }}>4</span> Seer Inc <br />
        <span
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "nowrap",
            whiteSpace: "nowrap",
          }}
        >
          <img
            src={logo}
            alt="Small Image"
            style={{
              width: "22px",
              height: "14px",
              verticalAlign: "middle",
              marginRight: "5px",
              marginTop: "-2px",
              // borderRadius: "50%",
            }}
          />
          Made with ❤️ by CredenceSoft
        </span>
      </span>

      <ul className="NavbarLinks pt-4 md:pb-4 ">
        <li className="NavbarLink">
          <Link
            to="/"
            className={
              location.pathname === "/"
                ? "NavbarLinkText active"
                : "NavbarLinkText"
            }
          >
            Home
          </Link>
        </li>
        <li className="NavbarLink">
          <Link
            to="/solutions"
            className={
              location.pathname === "/solutions"
                ? "NavbarLinkText active"
                : "NavbarLinkText"
            }
          >
            Solutions
          </Link>
        </li>
        <li className="NavbarLink">
          <Link
            to="/caseStudies"
            className={
              location.pathname === "/caseStudies"
                ? "NavbarLinkText active"
                : "NavbarLinkText"
            }
          >
            Case Studies
          </Link>
        </li>
        <li className="NavbarLink">
          <Link
            to="/about"
            className={
              location.pathname === "/about"
                ? "NavbarLinkText active"
                : "NavbarLinkText"
            }
          >
            About Us
          </Link>
        </li>
        <li className="NavbarLink">
          <Link
            to="/blog"
            className={
              location.pathname === "/blog"
                ? "NavbarLinkText active"
                : "NavbarLinkText"
            }
          >
            Blog
          </Link>
        </li>
        <li className="NavbarLink">
          <Link
            to="/contact"
            className={
              location.pathname === "/contact"
                ? "NavbarLinkText active"
                : "NavbarLinkText"
            }
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
