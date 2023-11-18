import React from 'react';
import './index.css';
import SeerLogo from '../../assets/images/barkers.png'

const ClientCard = () => {
  return (
    <div className={`${ClientCard} border shadow rounded-2xl border-gray-900 p-10`}>
      <div className="flex items-center justify-center">
          <img src={SeerLogo} alt="Logo" className='h-40 rounded-2xl' />
          </div>
        <div className="ClientCardContent">
            <h3 className='text-center'  style={{fontFamily:'Oswald, sans-serif'}}>NINA GRAHAM, C.F.O., CUE</h3>
            <p style={{fontFamily:'Roboto, sans-serif'}} className='text-center'>Seer Insights provides us with a depth of analytical capability, unrivalled by any competitor in the market, enabling us to make critical decisions lightning fast with confidence.</p>
        </div>
    </div>
  )
}

export default ClientCard