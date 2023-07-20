import Hero from "../components/Hero/Hero";
import s1 from "../assets/s1.jpg";
import CTAButton from "../components/CTAButton/CTAButton";
import "./SingleService.css";
import data from "../data/services";
import Navbar from "../components/Navbar/Navbar";

import Footer from "../components/footer";
import Modal from 'react-modal';
import { useState } from "react";
import close from '../assets/close.png'
function Service1() {
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
  

//   const [textData, setTextData] = useState(null);

//   const [pointsList, setPointsList] = useState(null);

//   useEffect(() => {
//     var service = window.location.search.split('?')[1];
// if(data[service]!=null){
//   setTextData(data[service])

//   setPointsList(data[service]["points"].map(function (point) {
//     return <li key={point}>{point}</li>;
//   }))
// }
//       }, [] );
    

//   return (
//     <>
//     <Navbar index={6}/>
      

//       {
//         textData==null?<div className="nodata"><p>No Data Found</p></div>:
//         <>
//         <Hero title={textData["title"]}/>
//         <div className="single-service-content">
//         <img src={corpbg} alt="" className="corpbg-img" />

//         <h2 className="service-title">{textData["title"]}</h2>
//         <p className="service-subtitle">{textData["subtitle"]}</p>

//         <ul>{pointsList}</ul>
//         <div className="consultation">
//             <CTAButton title="Book your consultation" handleClick = {()=>{console.log("consultation button clicked")}}/>
//         </div>
//       </div>
//         </>
//       }
//       <Footer/>
//     </>
//   );


return( 
  <>
     <Navbar index={5}/>
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




   <Hero title="Commencing a Business Entity"/>
         <div className="single-service-content">
         <img src={s1} alt="" className="corpbg-img" />

         <h2 className="service-title"></h2>
         <p className="service-subtitle">When starting a new business venture, entrepreneurs should make sure they're complying with ad the legal obligations of running a small business. You may have a terrific new business idea, but to get your startup off the ground you first must make sure you comply with all the legal requirements involved in starting a business Pacific Legal business law group is fully equipped to provide you services such as

Name searches and registrations

Organizational resolutions
</p>

         <ul>
         <li> Incorporation</li>

<li> intial government filings</li>

<li>General and limited liability partnerships</li>

 <li>Minute book updates</li>

 <li>Share capital structure</li>

<li>Corporate governance</li>

<li>Master Business Licence</li>

 <li>Shareholder or partnership agreements</li>
         </ul>
        <div className="consultation">
             <CTAButton title="Book your consultation" handleClick = {openModal}/>
         </div>
</div>
  <Footer/>
  </>
);

}

export default Service1;
