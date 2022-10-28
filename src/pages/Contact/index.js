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
            <h1>Get In Touch</h1>
            <p>Drop us a message and we will get back to you as soon as possible.</p>
            <p>Give us a shout we’ll make you a believer.</p>
            <div className="ContactLeftSectionContactDetails">
                <p>Reach out to SEER</p>
                <p><span>Contact No:</span> 9090909090</p>
                <p><span>Email Id:</span>iugiyvyv@.com</p>
            </div>
            <div className="ContactLeftSectionIcons">
              <img src={Faceboook} alt="facebook" />
              <img src={Google} alt="Google" />
              <img src={LinkedIn} alt="LinkedIn" />
              <img src={Message} alt="Message" />
            </div>
        </div>
        <div className="ContactRightSection">
            <p>Name:</p>
            <input type="text" />
            <p>Email:</p>
            <input type="email" />
            <p>Phone:</p>
            <input type="text" />
            <p>Enquiry:</p>
            <textarea name="" cols="30" rows="5"></textarea>
        </div>
    </div>
  )
}

export default Contact