import React from 'react';
import './index.css';
import SeerLogo from '../../assets/images/barkers.png'

const ClientCard = () => {
  return (
    <div className={`${ClientCard} border shadow rounded-2xl border-gray-900 p-10`}>
          <img src={SeerLogo} alt="Logo" className='image rounded-2xl' />
        <div className="ClientCardContent">
            <h3 className='text-center'>NINA GRAHAM, C.F.O., CUE</h3>
            <p className='text-center'>Seer Insights provides us with a depth of analytical capability, unrivalled by any competitor in the market, enabling us to make critical decisions lightning fast with confidence.</p>
        </div>
    </div>
  )
}

export default ClientCard