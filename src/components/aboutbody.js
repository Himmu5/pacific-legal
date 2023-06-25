import "./aboutbody.css";
import comp3 from "../assets/corporate-law.png";
import CTAButton from "./CTAButton/CTAButton";
import Modal from 'react-modal';
import { useState } from "react";
import close from '../assets/close.png'
function AboutBody() {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: "70vh",
      width: "70vw"
    },
  };
  const [modalIsOpen, setIsOpen] = useState(false);
 
  function openModal() {
    setIsOpen(true);
  }



  function closeModal() {
    setIsOpen(false);
  }
  
  return (
    <>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        
        contentLabel="Modal"
      >
      <div className="freeconsult-form">
        <div  onClick={closeModal} className='close-form' style={{"position": "absolute", "top": "2rem", "left": "2rem", "cursor": "pointer"}}>
           <img src={close} alt="" srcset="" height={"10rem"} />
        </div>
        <div className='free-consult-left'>
        <div className="free-consult-form-fields">
        <label for="name">Name</label>
        <input type="text" name="" id="name" className='consult-input' placeholder="Name"/>
        </div>
       <div className="free-consult-form-fields">
       <label for="email">Email</label>
        <input type="text" name="" id="email" className='consult-input' placeholder="Email"/>

       </div>
       <div className="free-consult-form-fields">
       <label for="phone">Phone</label>
        <input type="text" name="" id="phone" className='consult-input' placeholder="Phone"/>

       </div>
        </div>
      <div className="free-consult-form-fields free-consult-right">
      <label for="message">Message</label>
      <textarea name="" id="message" className='consult-input free-consult-right-in' cols="30" rows="10" placeholder='Message'></textarea>
      </div>

      </div>
      <div className='free-consult-cta'><CTAButton title="Send Message" handleClick={closeModal}/></div>
      </Modal>

      <div className="About-box">
        <div className="img-box">
          <img className="image" src = {comp3} alt ='About-Us-image'/>
        </div>

        <div className="text-box"> 
        <h2 className="A-head">About Us</h2>
        <p className="A-text">
          Pacific Legal is dedicated to working with clients to help them achieve their business
          goals and overcome legal challenges anywhere in the world. From a global platform spanning 
          2 countries, Pacific Legal lawyers help clients succeed. We are committed to helping
            clients achieve their business strategies and providing outstanding
            legal services around the world. Clients depend on the firm to find
            innovative solutions to complex business issues, and Pacific Legal
            lawyers leverage the firm’s global platform to help clients handle
            these challenges.
        </p>
<CTAButton title='Get In Touch' handleClick={openModal}></CTAButton>
      {/* <Link to = "/contactus">  <CTAButton title="Get In Touch"/></Link> */}
 
        </div>
      </div>
    </>
  );
}

export default AboutBody;
