import React from 'react';
import './index.css';
import VideoSection from '../../assets/images/VideoSection.png';
import calendar1 from '../../assets/images/365.png';
import calendar2 from '../../assets/images/7.png';
import ReactPlayer from "react-player";

const SolutionVideo = () => {
  return (
    <div className='SolutionVideoContainer'>
        <div className="SolutionVideoLeftSection">
        <div className="videoSectionRightSection">
          <ReactPlayer url="https://www.youtube.com/watch?v=9uXpgjIF-3c"  />
        </div>
        </div>
        <div className="SolutionVideoRightSection">
            <div className="SolutionVideoRightSectionCard">
                <div className="SolutionVideoRightSectionCardTopContent">
                    <div className="SolutionVideoRightSectionCardImg">
                        <img src={calendar2} alt="365" />
                    </div>
                    <p>Weekly Demand Forecast</p>
                </div>
                <div className="SolutionVideoRightSectionCardBottomContent">
                    <p>Optimize stock levels in near real-time to adapt to dynamic changes in consumption. Respond to proposed promotions, subtle shifts in demand, and known events.</p>
                </div>

            </div>
            <div className="SolutionVideoRightSectionCard">
                <div className="SolutionVideoRightSectionCardTopContent">
                    <div className="SolutionVideoRightSectionCardImg">
                        <img src={calendar1} alt="365" />
                    </div>
                    <p>Annual Demand Forecast</p>
                </div>
                <div className="SolutionVideoRightSectionCardBottomContent">
                    <p>Optimize stock levels in near real-time to adapt to dynamic changes in consumption. Respond to proposed promotions, subtle shifts in demand, and known events.</p>
                </div>

            </div>
            <div className="SolutionVideoRightSectionCard">
                <div className="SolutionVideoRightSectionCardTopContent">
                    <div className="SolutionVideoRightSectionCardImg">
                        <img src={calendar1} alt="365" />
                    </div>
                    <p>Simulation</p>
                </div>
                <div className="SolutionVideoRightSectionCardBottomContent">
                    <p>Optimize stock levels in near real-time to adapt to dynamic changes in consumption. Respond to proposed promotions, subtle shifts in demand, and known events.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SolutionVideo