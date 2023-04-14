import Hero from "../components/Hero/Hero";
import corpbg from "../assets/corporate-advisory-bg.png";
import CTAButton from "../components/CTAButton/CTAButton";
import "./SingleService.css";
import data from "../data/services";
import Navbar from "../components/Navbar/Navbar";
import { useEffect, useState } from "react";
function SingleService() {
  const subtitle =
    "Pacific Legal takes great pride in representing clients at all stages of their business cycle, and offer legal and strategic advice to our clients and structure, negotiate and implement all manner of business transactions on their behalf, such as:";
  const points = [
    "Supply, licensing, distribution, and outsourcing arrangements and other commercial agreements",
    "Acquisitions and divestitures, including share and asset purchases and sales",
    "Corporate recapitalizations, receiverships, and turnarounds",
    "Business structuring - corporations, partnerships, business trusts",
    "Public/private partnerships",
    "Shareholder and partnership agreements, joint ventures, and other strategic alliances",
    "Corporate governance",
    "Private equity investments, venture capital, and angel financings",
    "Competition matters",
    "Project financing",
    "International trade issues",
    "Acquisitions and divestitures, including share and asset purchases and sales",
    "Stock option plans and executive compensation",
    "Supply, licensing, distribution, and outsourcing arrangements and other commercial agreements"
  ];

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
    <Navbar/>
      

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
    </>
  );
}

export default SingleService;
