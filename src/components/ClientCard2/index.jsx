import React from 'react';
import './index.css';
import SeerLogo from '../../assets/images/client_barkers.png'

const ClientCard = () => {
  return (
    <div className={`${ClientCard}  md:h-[500px]  p-10`}>
      <div className="flex items-center justify-center ">
          <img src={SeerLogo} alt="Logo" className='h-8 ' />
          </div>
        <div className="ClientCardContent mt-8">
           
            <p style={{fontFamily:'Roboto, sans-serif'}} className='text-center'>"Seer Insights provides us with a depth of analytical capability, unrivalled by any competitor in the market, enabling us to make critical decisions lightning fast with confidence."</p>
            <h3 className='text-center'  style={{fontFamily:'gothic-book'}}> NINA GRAHAM, C.F.O., CUE</h3>
        </div>
    </div>
  )
}

export default ClientCard




