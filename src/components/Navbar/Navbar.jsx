import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import CTAButton from '../CTAButton/CTAButton';
import {  Link } from "react-router-dom";
import menu from '../../assets/menu.png';
import { useState } from 'react';
import Modal from 'react-modal';

function Navbar(props) {

  const home="HOME", blog="BLOG", team = "THE TEAM", services="SERVICES", practices="PRACTICES", contact="CONTACT US", about="ABOUT";

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
  const [isMenuOpened, setMenuOpened] = useState(false);
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
<div className='nav-r1-c-all'>
<div className='nav-r1-c1'>
<img src={logo} alt="" className='logo'/>
<p className='companytitle'>Pacific Legal Professional Corporation</p>
</div>
<div className='right-content'>
<div>
<CTAButton title="Free consultation" handleClick={openModal}/>
</div>
<div>
  <img src={menu} alt="" className='menu' onClick={()=>{
    setMenuOpened(!isMenuOpened);
    console.log(isMenuOpened)
  }} />
</div>
</div>

</div>

{isMenuOpened?<div className='items'>
    <li className='li'><Link to="/">HOME</Link></li>
    <li className='li'><Link to="/blog">BLOG</Link></li>
    <li className='li'><Link to="/about">ABOUT</Link></li>
    <li className='li'><Link to="/team">THE TEAM</Link></li>
    <li className='li'><Link to="/practices">PRACTICES</Link></li>
    <li className='li'><Link to="/services">SERVICES</Link></li>
    <li className='li'><Link to="/contactus">CONTACT US</Link></li>
</div>: <div></div>}

<div className='items-desktop'>
    <li className='li'><Link to="/">{props.index==0? <b>{home}</b>: home}</Link></li>
    <li className='li'><Link to="/blog">{props.index==1? <b>{blog}</b>: blog}</Link></li>
    <li className='li'><Link to="/about">{props.index==2? <b>{about}</b>: about}</Link></li>
    <li className='li'><Link to="/team">{props.index==3? <b>{team}</b>: team}</Link></li>
    <li className='li'><Link to="/practices">{props.index==4? <b>{practices}</b>: practices}</Link></li>
    <li className='li'><Link to="/services">{props.index==5? <b>{services}</b>: services}</Link></li>
    <li className='li'><Link to="/contactus">{props.index==6? <b>{contact}</b>: contact}</Link></li>
</div>


</>
  );
}

export default Navbar;
