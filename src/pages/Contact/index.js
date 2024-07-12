import React from "react";
import "./index.css";
import Faceboook from "../../assets/images/Facebook.png";
import Google from "../../assets/images/Google.png";
import LinkedIn from "../../assets/images/LinkedIn.png";
import Message from "../../assets/images/Message.png";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdContactPhone, MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="ContactContainer  bg-[#edeeff] pb-10 md:pb-0 lg:pb-0">
      <div className="ContactLeftSection">
        <h1
          className="shadow-none"
          style={{ fontFamily: "gothic-book, sans-serif", boxShadow: "none" }}
        >
          Get In Touch
        </h1>

        <p style={{ fontFamily: "roboto" }} className="md:mt-4 mt-2">
          Tell us about your retail challenges.
        </p>
        <div className="ContactLeftSectionContactDetails ml-1">
          <p style={{ fontFamily: "roboto" }}>
            <span>Phone:</span> +6498892409
          </p>
          <p style={{ fontFamily: "roboto" }}>
            <span>Address:</span> Auckland, New Zealand
          </p>
          <p style={{ fontFamily: "roboto" }}>
            <span>Email:</span> contact@seer-inc.com
          </p>
        </div>
        <div className="ContactLeftSectionIcons">
          <img src={Faceboook} alt="facebook" />
          <img src={Google} alt="Google" />
          <img src={LinkedIn} alt="LinkedIn" />
          <img src={Message} alt="Message" />
        </div>
      </div>

      <div className="ContactRightSection">
        <div className="flex rounded-l-lg">
          <div className="w-2/3 rounded-l-lg bg-white  text-[#374151]  pl-4">
            <p
              style={{ fontFamily: "gothic-book" }}
              className="text-2xl get-in font-bold py-6 text-[#141722]"
            >
              Get in touch
            </p>
            <p
              className="py-2  text-[#374151]"
              style={{ fontFamily: "roboto" }}
            >
              Name:
            </p>
            <div className="mr-4">
              <input type="text" className="w-full border p-2 rounded-lg" />
            </div>
            <p
              className="py-2  text-[#374151]"
              style={{ fontFamily: "roboto" }}
            >
              Email:
            </p>
            <div className="mr-4">
              <input type="email" className="w-full border p-2 rounded-lg" />
            </div>
            <p
              className="py-2  text-[#374151]"
              style={{ fontFamily: "roboto" }}
            >
              Phone:
            </p>
            <div className="mr-4">
              <input type="text" className="w-full border p-2 rounded-lg" />
            </div>
            <p className="py-2 text-[#374151]" style={{ fontFamily: "roboto" }}>
              Enquiry:
            </p>
            <div className="mr-4">
              <textarea
                name=""
                cols="30"
                className="w-full border p-2 rounded-lg"
                rows="5"
              ></textarea>
            </div>
            <div className="pt-2 pb-6">
              <button
                className="lg:text-lg text-white lg:bg-[#22bbff] lg:px-4 lg:py-1 lg:rounded-lg hidden lg:block "
                style={{ fontFamily: "gothic-book" }}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="flex rightsec justify-center rounded-r-lg items-center">
            <div className=" px-2 md:10  text-[10px] md:text-[15px] rounded-r-lg text-white flex flex-col justify-center items-center text-center h-full space-y-10 lg:space-y-20 md:space-y-14">
              <div className="flex flex-col items-center">
                <MdEmail size={60} />
                <p
                  style={{ fontFamily: "roboto" }}
                  className="pt-1 text-white text-[10px] md:text-[15px]"
                >
                  <a href="mailto:sales@seer-inc.com" className="text-white text-[10px] md:text-[15px]">
                    contact@seer-inc.com
                  </a>
                </p>
              </div>
              <div className="flex flex-col items-center">
                <MdContactPhone size={60} />
                <p
                  style={{ fontFamily: "roboto" }}
                  className="text-white pt-2 text-[10px] md:text-[15px]"
                >
                  <a href="tel:+6498892409" className="text-white text-[10px] md:text-[15px]">
                    +6498892409
                  </a>
                </p>
              </div>
              <div className="flex flex-col items-center">
                <FaMapLocationDot size={60} />
                <p
                  style={{ fontFamily: "roboto" }}
                  className="text-white pt-1 text-[10px] md:text-[15px]"
                >
                  Auckland, New Zealand
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Contact;
