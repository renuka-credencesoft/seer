import React from "react";
import "./index.css";
import ReactPlayer from "react-player";

const VideoSection = () => {
  return (
    <div>
      <div className="videoSectionContainer">
        <div className="videoSectionLeftSection">
          <span className="lg:text-3xl text-lg font-bold">
            <b>Lost sales and wastage cost retailers millions annually.</b>
          </span>
          <p className="lg:text-lg text-sm -mt-6 lg:mt-0 md:mt-0">
            <span className="lg:text-lg text-sm">RETAIL IS PERVASIVE DETAIL:</span> Every retailer, small to
            large, is awash with millions of inventory decisions, informed by
            time-consuming, manual analysis of vast swathes of data.
            <br />
            <span>THE COMPLEXITY IS MIND-BOGGLING:</span>It defeats even the
            largest, most experienced teams - who inevitably resort to crude
            calculations and compromises.
            <br />
            <span>IT’S EXPENSIVE:</span>Stock imbalances (usually excesses)
            result, requiring markdowns and inter-store transfers.
          </p>
        </div>
        <div className="videoSectionRightSection">
          <ReactPlayer url="https://www.youtube.com/watch?v=9uXpgjIF-3c" />
        </div>
      </div>
      {/* <div className="videoSectionContainer">
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
      </div> */}
      {/* <div className="videoSectionContainer">
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
      </div> */}
    </div>
  );
};

export default VideoSection;
