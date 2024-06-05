// import React from 'react';
// import './index.css';
// import SeerLogo from '../../assets/images/brothers.png'

// const ClientCard = () => {
//   return (
//     <div className={`${ClientCard} border shadow rounded-lg border-gray-900`}>
//         <img src={SeerLogo} alt="Logo" />
//         <div className="ClientCardContent">
//             <h3 className='text-center'>Name</h3>
//             <h4 className='text-center'>Designation</h4>
//             <p className='text-center' style={{fontFamily:'Roboto, sans-serif'}}>Description Description Description Description</p>
//         </div>
//     </div>
//   )
// }

// export default ClientCard



import React from 'react';
import './index.css';
import SeerLogo from '../../assets/images/brothers.png'

const ClientCard = () => {
  return (
    <div className={`${ClientCard} border shadow rounded-2xl border-gray-900 p-10 `}>
      <div className="flex items-center justify-center">
        <img src={SeerLogo} alt="Logo" className='h-40 rounded-2xl' />
        </div>
        <div className="ClientCardContent">
            <h3 className='text-center'  style={{fontFamily:'Oswald, sans-serif'}}>Name</h3>
            <p style={{fontFamily:'Roboto, sans-serif'}}className='text-center'>Our stores were swamped with web- returns. Seer AI swiftly and elegantly enabled us to re-distribute the returns to locations with the greatest sales potential.</p>
        </div>
    </div>
  )
}

export default ClientCard



