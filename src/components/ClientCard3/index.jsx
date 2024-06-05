import React from 'react';
import './index.css';
import SeerLogo from '../../assets/images/glassons.png'

const ClientCard = () => {
  return (
    <div className={`${ClientCard} border md:h-[500px] rounded-2xl border-gray-900 p-10 `}>
      <div className="flex items-center justify-center">
        <img src={SeerLogo} alt="Logo" className='h-40 rounded-2xl' />
        </div>
        <div className="ClientCardContent">
            <h3 className='text-center'  style={{fontFamily:'Oswald, sans-serif'}}>CHRIS REID, C.I.O., HALLENSTEIN GLASSON</h3>
            <p style={{fontFamily:'Roboto, sans-serif'}}className='text-center'>Our stores were swamped with web- returns. Seer AI swiftly and elegantly enabled us to re-distribute the returns to locations with the greatest sales potential.</p>
        </div>
    </div>
  )
}

export default ClientCard



