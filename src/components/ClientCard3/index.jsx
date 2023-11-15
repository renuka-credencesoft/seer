import React from 'react';
import './index.css';
import SeerLogo from '../../assets/images/glassons.png'

const ClientCard = () => {
  return (
    <div className={`${ClientCard} border shadow rounded-2xl border-gray-900 p-10 `}>
        <img src={SeerLogo} alt="Logo" className='image rounded-2xl' />
        <div className="ClientCardContent">
            <h3 className='text-center'>CHRIS REID, C.I.O., HALLENSTEIN GLASSON</h3>
            <p className='text-center'>Our stores were swamped with web- returns. Seer AI swiftly and elegantly enabled us to re-distribute the returns to locations with the greatest sales potential.</p>
        </div>
    </div>
  )
}

export default ClientCard