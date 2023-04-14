import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import CTAButton from '../CTAButton/CTAButton';
import {  Link } from "react-router-dom";
import menu from '../../assets/menu.png';
import { useState } from 'react';

function Navbar() {
  const [isMenuOpened, setMenuOpened] = useState(false);
  return (
<>
<div className='nav-r1-c-all'>
<div className='nav-r1-c1'>
<img src={logo} alt="" className='logo'/>
<p className='companytitle'>Pacific Legal Professional Corporation</p>
</div>
<div className='right-content'>
<div>
<CTAButton title="Free consultation" handleClick={()=>{console.log("clicked")}}/>
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
    <li className='li'><Link to="/contact">CONTACT US</Link></li>
</div>: <div></div>}

<div className='items-desktop'>
    <li className='li'><Link to="/">HOME</Link></li>
    <li className='li'><Link to="/blog">BLOG</Link></li>
    <li className='li'><Link to="/about">ABOUT</Link></li>
    <li className='li'><Link to="/team">THE TEAM</Link></li>
    <li className='li'><Link to="/practices">PRACTICES</Link></li>
    <li className='li'><Link to="/services">SERVICES</Link></li>
    <li className='li'><Link to="/contact">CONTACT US</Link></li>
</div>


</>
  );
}

export default Navbar;
