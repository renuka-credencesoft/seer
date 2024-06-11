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
    <div className="ContactContainer">
      <div className="ContactLeftSection">
       
      <h1 className="shadow-none" style={{ fontFamily: 'gothic-book, sans-serif', boxShadow: 'none' }}>Get In Touch</h1>

        <p style={{ fontFamily: "roboto" }}>
          Drop us a message and we will get back to you as soon as possible.
        </p>
        <p style={{ fontFamily: "roboto" }}>
          Give us a shout we’ll make you a believer.
        </p>
        <div className="ContactLeftSectionContactDetails ml-1">
          <p style={{ fontFamily: "roboto" }}>Reach out to SEER</p>
          <p style={{ fontFamily: "roboto" }}>
            <span>Contact No:</span> 9090909090
          </p>
          <p style={{ fontFamily: "roboto" }}>
            <span>Email Id:</span>iugiyvyv@.com
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
        <div className="flex bg-white rounded-lg border border-[#4b5971] pl-4">
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
          <div className="w-1/3 bg-[#303e58] rounded-r-lg text-white">
            <div className="grid place-content-center place-items-center grid-cols-1 justify-center items-center pt-40">
              <div>
                <MdEmail size={40} />
              </div>
              <div className="mb-10">
                <p style={{fontFamily:'roboto'}} className="text-white">seer@gmail.com</p>
              </div>
              <div>
                <MdContactPhone size={40} />
              </div>
              <div className="mb-10">
                <p style={{fontFamily:'roboto'}} className="text-white">9090909</p>
              </div>
              <div>
                <FaMapLocationDot size={40} />
              </div>
              <div className="mb-10">
                <p style={{fontFamily:'roboto'}} className="text-white">India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
