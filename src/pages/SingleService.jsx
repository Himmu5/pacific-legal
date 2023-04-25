import Hero from "../components/Hero/Hero";
import corpbg from "../assets/corporate-advisory-bg.png";
import CTAButton from "../components/CTAButton/CTAButton";
import "./SingleService.css";
import data from "../data/services";
import Navbar from "../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Footer from "../components/footer";
function SingleService() {

  const [textData, setTextData] = useState(null);

  const [pointsList, setPointsList] = useState(null);

  useEffect(() => {
    var service = window.location.search.split('?')[1];
if(data[service]!=null){
  setTextData(data[service])

  setPointsList(data[service]["points"].map(function (point) {
    return <li key={point}>{point}</li>;
  }))
}
      }, [] );
    

  return (
    <>
    <Navbar index={5}/>
      

      {
        textData==null?<div className="nodata"><p>No Data Found</p></div>:
        <>
        <Hero title={textData["title"]}/>
        <div className="single-service-content">
        <img src={corpbg} alt="" className="corpbg-img" />

        <h2 className="service-title">{textData["title"]}</h2>
        <p className="service-subtitle">{textData["subtitle"]}</p>

        <ul>{pointsList}</ul>
        <div className="consultation">
            <CTAButton title="Book your consultation" handleClick = {()=>{console.log("consultation button clicked")}}/>
        </div>
      </div>
        </>
      }
      <Footer/>
    </>
  );
}

export default SingleService;
