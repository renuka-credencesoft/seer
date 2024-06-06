import React from "react";
import HeroImg from "../../assets/images/SeerHeroImg.svg";
import "./index.css";

const HeroSection = () => {
  return (
    <div className="HeroSectionContainer">
      <div className="HeroSectionLeftText">
        <h1 >
          Your accurate, intuitive{" "}
          <span>
            demand <br /> forecaster.
          </span>
        </h1>
        <p>
          Helping inventory planners get the right stock, in the right place, at
          the right time.
        </p>
        <button
          className="lg:text-lg text-white lg:bg-blue-400 lg:px-4 lg:py-2 lg:rounded-3xl hidden lg:block "
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          Learn more
        </button>
      </div>
      <div className="ContactRightSectionHome">
        <p style={{ fontFamily: "Oswald, sans-serif" }}>Name:</p>
        <input type="text" />
        <p style={{ fontFamily: "Oswald, sans-serif" }}>Email:</p>
        <input type="email" />
        <p style={{ fontFamily: "Oswald, sans-serif" }}>Phone:</p>
        <input type="text" />
        <p style={{ fontFamily: "Oswald, sans-serif" }}>Enquiry:</p>
        <textarea name="" cols="30" rows="5"></textarea>
        <button
          className="lg:text-lg text-white lg:bg-blue-400 lg:px-4 lg:py-2 lg:rounded-3xl hidden lg:block "
          style={{ fontFamily: "Oswald, sans-serif" }}
        >
          Submit
        </button>
      </div>
      <div className="HeroSectionBgImg">
        <img src={HeroImg} alt="hero" />
      </div>
    </div>
  );
};

export default HeroSection;
