import React from "react";
import "./index.css";
import ReactPlayer from "react-player";

const VideoSection = () => {
  return (
      <div className="videoSectionContainer">
        <div className="videoSectionLeftSection">
          <p>
            Our storied history in retail has taught us that each retailer is
            unique. At Seer we recognize your uniqueness and adapt our deep
            learning algorithms to your business to unleash operational
            improvements across the board, boosting your revenue and margins.
          </p>
          <p>
            Meet <span>Stock Seer</span> - your accurate, intuitive demand
            forecasting assistant.
          </p>
        </div>
        <div className="videoSectionRightSection">
          <ReactPlayer url="https://www.youtube.com/watch?v=9uXpgjIF-3c" />
        </div>
      </div>
  );
};

export default VideoSection;
