import React from "react";
import "./index.css";
import VideoSection from "../../assets/images/VideoSection.png";
import calendar1 from "../../assets/images/365.png";
import calendar2 from "../../assets/images/7.png";
import ReactPlayer from "react-player";

const SolutionVideo = () => {
  return (
    <div className="SolutionVideoContainer">
      <div className="SolutionVideoLeftSection">
        <div className="videoSectionRightSection">
          <ReactPlayer url="https://www.youtube.com/watch?v=9uXpgjIF-3c" />
        </div>
      </div>
      <div className="SolutionVideoRightSection">
        <div className="SolutionVideoRightSectionCard">
          <div className="SolutionVideoRightSectionCardTopContent">
            <div className="SolutionVideoRightSectionCardImg">
              <img src={calendar2} alt="365" />
            </div>
            <p style={{ fontFamily: "Oswald, sans-serif" }}>
              UNIVERSALLY ADOPTABLE
            </p>
          </div>
          <div className="SolutionVideoRightSectionCardBottomContent">
            <p style={{ fontFamily: "Roboto, sans-serif" }} className="mb-4">
              Regardless of your size and vertical, you can seamlessly and
              economically link your ERP to our service – thanks to our
              proprietary APIs and cloud infrastructure.
            </p>
          </div>
        </div>
        <div className="SolutionVideoRightSectionCard">
          <div className="SolutionVideoRightSectionCardTopContent">
            <div className="SolutionVideoRightSectionCardImg">
              <img src={calendar1} alt="365" />
            </div>
            <p style={{ fontFamily: "Oswald, sans-serif" }}>
              ADAPTABLE TO ANY INVENTORY PROBLEM
            </p>
          </div>
          <div className="SolutionVideoRightSectionCardBottomContent">
            <p style={{ fontFamily: "Roboto, sans-serif" }} className="mb-4">
              All your inventory decisions require prescience for what will
              sell, where and when. Our solution provides precisely this
              capability – alleviating manual effort, optimising stock levels
              and lifting the bottom line.
            </p>
          </div>
        </div>
        
        <div className="SolutionVideoRightSectionCard">
          <div className="SolutionVideoRightSectionCardTopContent">
            <div className="SolutionVideoRightSectionCardImg">
              <img src={calendar1} alt="365" />
            </div>
            <p style={{ fontFamily: "Oswald, sans-serif" }}>
              POWERED BY PRESCIENT, ACCURATE A.I. ALGORITHMS
            </p>
          </div>
          <div className="SolutionVideoRightSectionCardBottomContent">
            <p style={{ fontFamily: "Roboto, sans-serif" }}>
              Swathes of transactions are analysed at light-speed, along with
              parameters like promotions, door counts and more. Powerful,
              predictive formulae are automatically derived to drive your
              decisions for every SKU, at every store.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionVideo;
