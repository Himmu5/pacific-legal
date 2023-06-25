import Hero from "../components/Hero/Hero";
import s6 from "../assets/s6.png";
import CTAButton from "../components/CTAButton/CTAButton";
import "./SingleService.css";
import data from "../data/services";
import Navbar from "../components/Navbar/Navbar";

import Footer from "../components/footer";
import Modal from 'react-modal';
import { useState } from "react";
import close from '../assets/close.png'
function Service6() {
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




   <Hero title="Corporate Immigration"/>
         <div className="single-service-content">
         <img src={s6} alt="" className="corpbg-img" />

         <h2 className="service-title">CORPORATE IMMIGRATION
</h2>
         <p className="service-subtitle">
Pacific Legal provides advice and service for any and all Canadian corporate immigration matters We provide business immigration and offer a wide range of services and strategic advice to meet the needs of domestic and multinational clients Whether you need global immigration assistance for your executives, workers investors or entrepreneurs, either individually or in conjunction with their accompanying family members, our business Immigration team can efficiently and effectively coordinate and facilitate this complex process on your behalf.</p>
         <ul>

         <li>Business/Corporate</li>

         <li>Intra-company transfers to Canada and the US</li>

<li>Planning international movement of personnel to and from Canada and the US</li>

<li>All issues relating to inbound and outbound visa applications temporary visas to Canada, Canadian</li>

<li>Permanent residence, maintenance of lawful immigration status, and other immigration needs of employees</li>

<li>Counseling concerning maintaining status in Canada while traveling abroad for personal or business reasons</li>
<li>Immigration law implications of any corporate changes including mergers acquisitions spin-otts satary or

location changes and reductions in the workforce</li>

       </ul>
        <div className="consultation">
             <CTAButton title="Book your consultation" handleClick = {openModal}/>
         </div>
</div>
  <Footer/>
  </>
);

}

export default Service6;
