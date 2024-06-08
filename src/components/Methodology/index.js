import React from "react";
import "./index.css";
import aboutUsCircle from "../../assets/images/aboutUsCircle.png";
import aboutUsLogo from "../../assets/images/Seer.png";
import methodologyLogo from "../../assets/images/METHODOLOGY.png";
import processLogo from "../../assets/images/processLogo.png";
import App from "../apppp/App/App";
// import AppTwo from '../apppp/AppTwo/AppTwo';

function Methodology() {
  return (
    <div className="MethodologyContainer pt-40 -mb-32">
      <div className="MethodologyLeftSection py-40 px-10">
        <div className="MethodologyLeftSectionContent">
          {/* <div className="MethodologyLeftSectionContentImg"> */}
          <img src={aboutUsLogo} alt="logo" className="" />
          <div className="py-4 px-20">
            <div className="h-1 w-full rounded-lg line"></div>
          </div>
          <img src={methodologyLogo} alt="logo" className="-mt-40" />
          <p style={{fontFamily:'Comfortaa, sans-serif'}} className="py-10">
            At Seer we understand each customer is unique and adapt our
            algorithms and interfaces to meet your exact requirements. Our
            methodology is nimble, it eliminates disruption and minimizes cost.
          </p>
          <img src={processLogo} alt="process" />
          {/* </div> */}
        </div>
      </div>
      <div className="MethodologyRightSection">
        <div className="SectionOne">
          <div className="MethodologyRightSectionImg">
            {/* <img src={aboutUsCircle} alt="logo" /> */}
            <App />
          </div>
        </div>

        <div className="MethodologyRightSectionImg">{/* <AppTwo /> */}</div>
      </div>
    </div>
  );
}

export default Methodology;
