import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import CTAButton from "../CTAButton/CTAButton";
import { Link, useNavigate } from "react-router-dom";
import menu from "../../assets/menu.png";
import menuclose from "../../assets/menuclose.png";
import { useState } from "react";
import Modal from "react-modal";
import close from "../../assets/close.png";
import { motion, AnimatePresence } from "framer-motion";

function Navbar(props) {
  const home = "HOME",
    blog = "BLOG",
    team = "THE TEAM",
    services = "SERVICES",
    practices = "PRACTICES",
    contact = "CONTACT US",
    about = "ABOUT";
  const navigate = useNavigate();
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: "70vh",
      width: "70vw",
    },
  };
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
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
          <div
            onClick={closeModal}
            className="close-form"
            style={{
              position: "absolute",
              top: "2rem",
              left: "2rem",
              cursor: "pointer",
            }}
          >
            <img src={close} alt="" srcset="" height={"10rem"} />
          </div>
          <div className="free-consult-left" style={{ alignItems: "start" }}>
            <div className="free-consult-form-fields">
              <label for="name">Name</label>
              <input
                type="text"
                name=""
                id="name"
                className="consult-input"
                placeholder="Name"
              />
            </div>
            <div className="free-consult-form-fields">
              <label for="email">Email</label>
              <input
                type="text"
                name=""
                id="email"
                className="consult-input"
                placeholder="Email"
              />
            </div>
            <div className="free-consult-form-fields">
              <label for="phone">Phone</label>
              <input
                type="text"
                name=""
                id="phone"
                className="consult-input"
                placeholder="Phone"
              />
            </div>
          </div>
          <div className="free-consult-form-fields free-consult-right">
            <label for="message">Message</label>
            <textarea
              name=""
              id="message"
              className="consult-input free-consult-right-in"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
          </div>
        </div>
        <div className="free-consult-cta">
          <CTAButton title="Send Message" handleClick={closeModal} />
        </div>
      </Modal>
      <div className="nav-r1-c-all">
        <div className="nav-r1-c1">
          <img
            src={logo}
            alt=""
            className="logo"
            onClick={() => {
              navigate("/");
            }}
          />
          <p className="companytitle">Pacific Legal Professional Corporation</p>
        </div>
        <div className="right-content">
          <div>
            <CTAButton title="Free consultation" handleClick={openModal} />
          </div>
          <div>
            {/* <img src={menu} alt="" className='menu' onClick={()=>{
    
    setMenuOpened(!isMenuOpened) 
    console.log(isMenuOpened)
  }} />
  */}
            <div className="menu">
              <label
                className="check"
                style={{ position: isMenuOpened ? "fixed" : "" }}
              >
                <input
                  type="checkbox"
                  id="check"
                  onClick={() => {
                    setMenuOpened(!isMenuOpened);
                    console.log(isMenuOpened);
                  }}
                />
                <span className="nav-span"></span>
                <span className="nav-span"></span>
                <span className="nav-span"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpened ? (
          <motion.div
            initial={{ opacity: 0 }}
            variants={variants}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, z: 1 }}
            className="items "
            style={{ position: "fixed" }}
          >
            {/* <li className='li'><Link to="/">HOME</Link></li>
    <li className='li'><Link to="/blog">BLOG</Link></li>
    <li className='li'><Link to="/about">ABOUT</Link></li>
    <li className='li'><Link to="/team">THE TEAM</Link></li>
    <li className='li'><Link to="/practices">PRACTICES</Link></li>
    <li className='li'><Link to="/services">SERVICES</Link></li>
    <li className='li'><Link to="/contactus">CONTACT US</Link></li> */}
            <li className="li">
              <Link to="/">{props.index == 0 ? <b>{home}</b> : home}</Link>
            </li>
            <li className="li">
              <Link to="/blog">{props.index == 1 ? <b>{blog}</b> : blog}</Link>
            </li>
            <li className="li">
              <Link to="/about">
                {props.index == 2 ? <b>{about}</b> : about}
              </Link>
            </li>
            <li className="li">
              <Link to="/team">{props.index == 3 ? <b>{team}</b> : team}</Link>
            </li>
            <li className="li">
              <Link to="/practices">
                {props.index == 4 ? <b>{practices}</b> : practices}
              </Link>
            </li>
            <li className="li">
              <Link to="/services">
                {props.index == 5 ? <b>{services}</b> : services}
              </Link>
            </li>
            <li className="li">
              <Link to="/contactus">
                {props.index == 6 ? <b>{contact}</b> : contact}
              </Link>
            </li>
          </motion.div>
        ) : (
          <div></div>
        )}
      </AnimatePresence>

      <div className="items-desktop">
        <li className="li">
          <Link to="/">{props.index == 0 ? <b>{home}</b> : home}</Link>
        </li>
        <li className="li">
          <Link to="/blog">{props.index == 1 ? <b>{blog}</b> : blog}</Link>
        </li>
        <li className="li">
          <Link to="/about">{props.index == 2 ? <b>{about}</b> : about}</Link>
        </li>
        <li className="li">
          <Link to="/team">{props.index == 3 ? <b>{team}</b> : team}</Link>
        </li>
        <li className="li">
          <Link to="/practices">
            {props.index == 4 ? <b>{practices}</b> : practices}
          </Link>
        </li>
        <li className="li">
          <Link to="/services">
            {props.index == 5 ? <b>{services}</b> : services}
          </Link>
        </li>
        <li className="li">
          <Link to="/contactus">
            {props.index == 6 ? <b>{contact}</b> : contact}
          </Link>
        </li>
      </div>
    </>
  );
}

export default Navbar;
