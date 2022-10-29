import React from 'react';
import './index.css';
import aboutUsCircle from '../../assets/images/aboutUsCircle.png'; 
import aboutUsLogo from '../../assets/images/aboutUsLogo.png'; 
import processLogo from '../../assets/images/processLogo.png'; 

function Methodology() {
  return (
    <div className='MethodologyContainer'>
      <div className="MethodologyLeftSection">
        <div className="MethodologyLeftSectionContent">
          {/* <div className="MethodologyLeftSectionContentImg"> */}
            <img src={aboutUsLogo} alt="logo" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo esse sapiente fuga eius sint reprehenderit natus perspiciatis ipsam facilis vel modi adipisci, deserunt amet voluptates quos autem veritatis! Iusto, sunt!</p>
            <img src={processLogo} alt="process" />
          {/* </div> */}
        </div>
      </div>
      <div className="MethodologyRightSection">
          <div className="MethodologyRightSectionImg">
            <img src={aboutUsCircle} alt="logo" />
          </div>
      </div>
    </div>
  )
}

export default Methodology;