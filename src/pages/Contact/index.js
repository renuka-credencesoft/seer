import React from 'react';
import './index.css';
import Faceboook from '../../assets/images/Facebook.png';
import Google from '../../assets/images/Google.png';
import LinkedIn from '../../assets/images/LinkedIn.png';
import Message from '../../assets/images/Message.png';

const Contact = () => {
  return (
    <div className='ContactContainer'>
        <div className="ContactLeftSection">
            <h1  style={{fontFamily:'Oswald, sans-serif'}}>Get In Touch</h1>
            <p style={{fontFamily:'Roboto, sans-serif'}}>Drop us a message and we will get back to you as soon as possible.</p>
            <p style={{fontFamily:'Roboto, sans-serif'}}>Give us a shout we’ll make you a believer.</p>
            <div className="ContactLeftSectionContactDetails">
                <p style={{fontFamily:'Roboto, sans-serif'}}>Reach out to SEER</p>
                <p style={{fontFamily:'Roboto, sans-serif'}}><span>Contact No:</span> 9090909090</p>
                <p style={{fontFamily:'Roboto, sans-serif'}}><span>Email Id:</span>iugiyvyv@.com</p>
            </div>
            <div className="ContactLeftSectionIcons">
              <img src={Faceboook} alt="facebook" />
              <img src={Google} alt="Google" />
              <img src={LinkedIn} alt="LinkedIn" />
              <img src={Message} alt="Message" />
            </div>
        </div>
        <div className="ContactRightSection">
            <p style={{fontFamily:'Roboto, sans-serif'}}>Name:</p>
            <input type="text" />
            <p style={{fontFamily:'Roboto, sans-serif'}}>Email:</p>
            <input type="email" />
            <p style={{fontFamily:'Roboto, sans-serif'}}>Phone:</p>
            <input type="text" />
            <p style={{fontFamily:'Roboto, sans-serif'}}>Enquiry:</p>
            <textarea name="" cols="30" rows="5"></textarea>
            <button className="lg:text-xl text-sm text-white bg-blue-400 px-4 py-2 rounded-3xl  lg:block lg:mt-5 mt-3  ">
            Submit
          </button>
        </div>
    </div>
  )
}

export default Contact