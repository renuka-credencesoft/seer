import React from 'react';
import './index.css';
import SeerLogo from '../../assets/images/animates.png'

const ClientCard = () => {
  return (
    <div className={`${ClientCard} border shadow rounded-2xl border-gray-900 p-10`}>
         <img src={SeerLogo} alt="Logo" className='image rounded-2xl' />
        <div className="ClientCardContent">
            <h3 className='text-center'>PHILLIP CHRISTOPHER, C.I.O., ANIMATES NZ</h3>
            <p className='text-center'>Out teams are spending days a week managing the parameters which drive our vendor re-order calculation. Seer AI Forecasts will help us automate the process, eliminate manual effort, and improve order accuracy.</p>
        </div>
    </div>
  )
}

export default ClientCard