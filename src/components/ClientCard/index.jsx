import React from 'react';
import './index.css';
import SeerLogo from '../../assets/images/SeerLogo.svg'

const ClientCard = () => {
  return (
    <div className='ClientCard'>
        <img src={SeerLogo} alt="Logo" />
        <div className="ClientCardContent">
            <h3>Name</h3>
            <h4>Designation</h4>
            <p>Description Description Description Description</p>
        </div>
    </div>
  )
}

export default ClientCard