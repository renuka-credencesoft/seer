import React from 'react';
import './index.css';
import SeerLogo from '../../assets/images/brothers.png'

const ClientCard = () => {
  return (
    <div className={`${ClientCard} border shadow rounded-lg border-gray-900`}>
        <img src={SeerLogo} alt="Logo" />
        <div className="ClientCardContent">
            <h3>Name</h3>
            <h4>Designation</h4>
            <p style={{fontFamily:'Roboto, sans-serif'}}>Description Description Description Description</p>
        </div>
    </div>
  )
}

export default ClientCard