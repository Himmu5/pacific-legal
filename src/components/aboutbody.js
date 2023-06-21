import "./aboutbody.css";
import comp3 from "../assets/corporate-law.png";
import CTAButton from "./CTAButton/CTAButton";

function AboutBody() {
  return (
    <>
    
      <div className="About-box">
        <div className="img-box">
          <img className="image" src = {comp3} alt ='About-Us-image'/>
        </div>

        <div className="text-box"> 
        <h2 className="A-head">About US</h2>
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

        <CTAButton title="Get In Touch"/>
 
        </div>
      </div>
    </>
  );
}

export default AboutBody;
