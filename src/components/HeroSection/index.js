import React from "react";
import HeroImg from "../../assets/images/SeerHeroImg.svg";
import MobileImg from "../../assets/images/Seer_Oracle_phone.svg";
import "./index.css";
import { MdContactPhone, MdEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="HeroSectionContainer">
      <div className="">
        <div className="HeroSectionLeftText">
          <h1>
            Your accurate, intuitive
            <br />
            <span className="">demand forecaster.</span>
          </h1>
          <p style={{ fontFamily: "roboto" }}>
            Helping inventory planners get the right stock, in the right
            place,at <br /> the right time.
          </p>
          <button
            className="lg:text-lg text-white mt-8 lg:bg-[#22bbff]  lg:px-4 lg:py-2 lg:rounded-3xl hidden lg:block "
            style={{ fontFamily: "gothic-book, sans-serif" }}
          >
            Learn more
          </button>
        </div>

        <div className="ContactRightSectionHome lg:flex">
          <div className="cc flex bg-white rounded-lg pl-4  ">
            <div className="w-2/3 ">
              <h1
                style={{ fontFamily: "gothic-book" }}
                className="text-2xl text-[#141722] font-bold py-2"
              >
                Get in touch
              </h1>
              <p
                className="py-2 text-[#374151]"
                style={{ fontFamily: "roboto" }}
              >
                Name:
              </p>
              <div className="mr-4">
                <input type="text" className="w-full border p-2 rounded-lg" />
              </div>
              <p
                className="py-2   text-[#374151]"
                style={{ fontFamily: "roboto" }}
              >
                Email:
              </p>
              <div className="mr-4">
                <input type="email" className="w-full border p-2 rounded-lg" />
              </div>
              <p
                className="py-2   text-[#374151]"
                style={{ fontFamily: "roboto" }}
              >
                Phone:
              </p>
              <div className="mr-4">
                <input type="text" className="w-full border p-2 rounded-lg" />
              </div>
              <p
                className="py-2   text-[#374151]"
                style={{ fontFamily: "roboto" }}
              >
                Enquiry:
              </p>
              <div className="mr-4 hidden md:block">
                <textarea
                  name=""
                  cols="30"
                  className="w-full border p-2 rounded-lg"
                  rows="2"
                ></textarea>
              </div>
              <div className="mr-4 block md:hidden">
                <textarea
                  name=""
                  cols="30"
                  className="w-full border p-2 rounded-lg"
                  rows="2"
                ></textarea>
              </div>
              <div className="pt-2 pb-6  submit">
                <button
                  className="lg:text-lg  text-white lg:bg-[#22bbff] lg:px-4 lg:py-1 lg:rounded-lg hidden lg:block button"
                  style={{ fontFamily: "gothic-book, sans-serif" }}
                >
                  Submit
                </button>
              </div>
            </div>

            <div className="w-1/3 rightsection  rounded-r-lg text-white">
              <div className="grid place-content-center place-items-center grid-cols-1 justify-center items-center pt-20">
                <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gray-200 transition duration-300">
                  <MdEmail className="text-4xl text-black transition duration-300 hover:opacity-0" />
                </div>

                <div className="mb-20">
                  <p
                    style={{ fontFamily: "roboto" }}
                    className="gmail inc text-white pl-4 lg:pl-0"
                  >
                    <a href="mailto:sales@seer-inc.com" className="text-white">
                      sales@seer-inc.coms
                    </a>
                  </p>
                </div>

                <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gray-200 transition duration-300">
                  <MdContactPhone className="text-4xl text-black transition duration-300 hover:opacity-0" />
                </div>
                <div className="mb-20">
                  <p
                    style={{ fontFamily: "roboto" }}
                    className="text-white gmail"
                  >
                    <a href="tel:+6498892409" className="text-white">
                      +6498892409
                    </a>
                  </p>
                </div>

                <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gray-200 transition duration-300">
                  <FaMapLocationDot className="text-4xl text-black transition duration-300 hover:opacity-0" />
                </div>
                <div className="mb-20">
                  <p
                    style={{ fontFamily: "roboto" }}
                    className="text-white gmail pl-4"
                  >
                    Auckland, New Zealand
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="HeroSectionBgImg">
        <img src={HeroImg} alt="hero" className="desktop-image" />
        <img src={MobileImg} alt="hero" className="mobile-image" />
      </div>
    </div>
  );
};

export default HeroSection;
