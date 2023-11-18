import React from 'react';
import './index.css';
import aboutUsCircle from '../../assets/images/aboutUsCircle.png';
import aboutUsLogo from '../../assets/images/Seer.png';
import methodologyLogo from '../../assets/images/METHODOLOGY.png';
import processLogo from '../../assets/images/processLogo.png';
import App from '../apppp/App/App';
// import AppTwo from '../apppp/AppTwo/AppTwo';

function Methodology() {
  return (
    <div className='MethodologyContainer'>
      <div className="MethodologyLeftSection">
        <div className="MethodologyLeftSectionContent">
          {/* <div className="MethodologyLeftSectionContentImg"> */}
          <img src={aboutUsLogo} alt="logo" />
          <img src={methodologyLogo} alt="logo" className="-mt-40" />
          <p style={{ fontFamily: 'Roboto, sans-serif'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo esse sapiente fuga eius sint reprehenderit natus perspiciatis ipsam facilis vel modi adipisci, deserunt amet voluptates quos autem veritatis! Iusto, sunt!</p>
          <img src={processLogo} alt="process" />
          {/* </div> */}
        </div>
      </div>
      <div className="MethodologyRightSection">
        <div className='SectionOne'>
          <div className="MethodologyRightSectionImg">
            {/* <img src={aboutUsCircle} alt="logo" /> */}
            <App />
          </div>
        </div>

        <div className="MethodologyRightSectionImg">
          {/* <AppTwo /> */}
        </div>
      </div>
    </div>
  )
}

export default Methodology;