import React from 'react';
import './index.css';
import Insights from '../../assets/images/Insights.png';

const SeerInsights = () => {
  return (
    <div className='SeerInsightsContainer'>
        <h1>Seer insights</h1>
        <p>Seer Insights is the bridge between Stock Seer forecasts and execution. It empowers users across the organization with “self-service” access to information, delivering insights and guiding action.</p>
        <div className="SeerInsightsImg">
            <img src={Insights} alt="insights" />
        </div>
    </div>
  )
}

export default SeerInsights