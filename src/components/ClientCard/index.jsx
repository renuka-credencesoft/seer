import React from "react";
import "./index.css";
import SeerLogo from "../../assets/images/animates.png";

const ClientCard = () => {
  return (
    <div
      className={`${ClientCard} border md:h-[500px] rounded-2xl border-gray-900 p-10`}
    >
      <div className="flex items-center justify-center">
        <img src={SeerLogo} alt="Logo" className="h-40 rounded-2xl" />
      </div>
      <div className="ClientCardContent">
        
        <p style={{fontFamily:'Roboto, sans-serif'}}className="text-center">
          Out teams are spending days a week managing the parameters which drive
          our vendor re-order calculation. Seer AI Forecasts will help us
          automate the process, eliminate manual effort, and improve order
          accuracy.
        </p>
        <h3 className="text-center"  style={{fontFamily:'Comfortaa, sans-serif'}}>
          PHILLIP CHRISTOPHER, C.I.O., ANIMATES NZ
        </h3>
      </div>
    </div>
  );
};

export default ClientCard;



