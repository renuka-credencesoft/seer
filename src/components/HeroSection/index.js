import React from "react";
import HeroImg from "../../assets/images/SeerHeroImg.svg";
import "./index.css";
import { MdContactPhone, MdEmail } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="HeroSectionContainer">
      <div className="">
        <div className="HeroSectionLeftText">
          <h1>
            Your accurate, intuitive{" "}
            <span>
              demand <br /> forecaster.
            </span>
          </h1>
          <p>
            Helping inventory planners get the right stock, in the right place,
            at the right time.
          </p>
          <button
            className="lg:text-lg text-white mt-8 lg:bg-[#22bbff]  lg:px-4 lg:py-2 lg:rounded-3xl hidden lg:block "
            style={{ fontFamily: "gothic-book, sans-serif" }}
          >
            Learn more
          </button>
        </div>

        <div className="ContactRightSectionHome lg:flex ">
          <div className="cc flex bg-white rounded-l-lg pl-4  ">
            <div className="w-2/3">
              <p
                style={{ fontFamily: "gothic-book" }}
                className="text-2xl text-[#4b5971] font-bold py-6"
              >
                Get in touch
              </p>
              <p className="py-2" style={{ fontFamily: "roboto" }}>
                Name:
              </p>
              <div className="mr-4">
                <input type="text" className="w-full border p-2 rounded-lg" />
              </div>
              <p className="py-2" style={{ fontFamily: "roboto" }}>
                Email:
              </p>
              <div className="mr-4">
                <input type="email" className="w-full border p-2 rounded-lg" />
              </div>
              <p className="py-2" style={{ fontFamily: "roboto" }}>
                Phone:
              </p>
              <div className="mr-4">
                <input type="text" className="w-full border p-2 rounded-lg" />
              </div>
              <p className="py-2" style={{ fontFamily: "roboto" }}>
                Enquiry:
              </p>
              <div className="mr-4">
                <textarea
                  name=""
                  cols="30"
                  className="w-full border p-2 rounded-lg"
                  rows="3"
                ></textarea>
              </div>
              <div className="pt-2 pb-6">
                <button
                  className="lg:text-lg text-white lg:bg-[#22bbff] lg:px-4 lg:py-1 lg:rounded-lg hidden lg:block button"
                  style={{ fontFamily: "gothic-book, sans-serif" }}
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="w-1/3 rightsection  rounded-r-lg text-white">
              <div className="grid place-content-center place-items-center grid-cols-1 justify-center items-center pt-20">
                {/* <div  className='rounded-full'>
                  <MdEmail size={40} />
                </div> */}

                <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gray-200 transition duration-300">
                  <MdEmail className="text-4xl text-black transition duration-300 hover:opacity-0" />
                </div>

                <div className="mb-20">
                  <p style={{fontFamily:'roboto'}} className=" gmail text-white">seer@gmail.com</p>
                </div>

                  <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gray-200 transition duration-300">
                  <MdContactPhone className="text-4xl text-black transition duration-300 hover:opacity-0" />
                </div>
                <div className="mb-20">
                  <p style={{fontFamily:'roboto'}}  className="text-white">9090909</p>
                </div>

                    <div className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gray-200 transition duration-300">
                  <FaMapLocationDot className="text-4xl text-black transition duration-300 hover:opacity-0"/>
                </div>
                <div className="mb-20">
                  <p style={{fontFamily:'roboto'}}  className="text-white">India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="HeroSectionBgImg">
        <img src={HeroImg} alt="hero" />
      </div>
    </div>
  );
};

export default HeroSection;
