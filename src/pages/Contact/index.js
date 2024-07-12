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
    <div className="ContactContainer bg-[#edeeff] pb-10 md:pb-0 lg:pb-0">
      <div className="ContactLeftSection">
        <h1
          className="shadow-none"
          style={{ fontFamily: "gothic-book, sans-serif", boxShadow: "none" }}
        >
          Get In Touch
        </h1>

        <p style={{ fontFamily: "roboto" }}>
          Drop us a message and we will get back to you as soon as possible.
        </p>
        <p style={{ fontFamily: "roboto" }}>
          Give us a shout we’ll make you a believer.
        </p>
        <div className="ContactLeftSectionContactDetails ml-1">
          <p style={{ fontFamily: "roboto" }}>Reach out to SEER</p>
          <p style={{ fontFamily: "roboto" }}>
            Tell us about your retail challenges.
          </p>
          <p style={{ fontFamily: "roboto" }}>
            <span>Contact Us:</span>Phone +6498892409
          </p>
          <p style={{ fontFamily: "roboto" }}>
            <span>Address:</span>Auckland, New Zealand
          </p>
          <p style={{ fontFamily: "roboto" }}>
            <span>Email Id:</span>contact@seer-inc.com
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
        <div className="flex bg-white rounded-xl border border-[#4b5971] pl-4">
          <div className="w-2/3  text-[#374151]/">
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
          <div className="w-1/3  rightsec rounded-r-lg text-white">
            <div className="grid place-content-center place-items-center grid-cols-1 justify-center items-center lg:pt-10 md:pt-4  pt-8">
              <div className="mr-2">
                <MdEmail size={60} />
              </div>
              <div className="mb-32">
                <p
                  style={{ fontFamily: "roboto" }}
                  className="gmail inc pt-1 text-white pl-[12px] lg:pl-0 "
                >
                  <a href="mailto:sales@seer-inc.com" className="text-white  ">
                    contact@seer-inc.com
                  </a>
                </p>
              </div>

              <div>
                <MdContactPhone size={60} />
              </div>
              <div className="mb-10">
                <p
                  style={{ fontFamily: "roboto" }}
                  className="text-white pt-1 gmail"
                >
                  <a href="tel:+6498892409" className="text-white">
                    +6498892409
                  </a>
                </p>
              </div>
              <div className="mt-20 ">
                <FaMapLocationDot size={60} />
              </div>
              <div className="">
                <p
                  style={{ fontFamily: "roboto" }}
                  className="text-white gmail pl-[10px] pt-1 pl-4 pb-8"
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
