import Navbar from "../components/Navbar/Navbar";
import dawn from "../assets/Dawn.png";
import "./Home.css";
import CTAButton from "../components/CTAButton/CTAButton";
import building from "../assets/building.png";
import justice from "../assets/justice.png";
import Feature from "../components/Feature/Feature";
import Service from "../components/Service/Service";
import service1 from "../assets/services/1.png";
import service2 from "../assets/services/2.png";
import service3 from "../assets/services/3.png";
import service4 from "../assets/services/4.png";
import service5 from "../assets/services/5.png";
import service6 from "../assets/services/6.png";
import feature1 from "../assets/success.png";
import feature2 from "../assets/hammer.png";
import feature3 from "../assets/case.png";
import feature4 from "../assets/client.png";

function Home() {
  const whoarewe =
    "Pacific Legal is dedicated to working with clients to help them achieve their business goals and overcome legal challenges anywhere in the world. From a global platform spanning 2 countries, Pacific Legal lawyers help clients succeed. We are committed to helping clients achieve their business strategies and providing outstanding legal services around the world. Clients depend on the firm to find innovative solutions to complex business issues, and Pacific Legal lawyers leverage the firm's global platform to help clients handle these challenges.";
  const ourservices =
    "We work closely with clients to provide exceptional legal services that are catered specifically to their needs. Take a look at the services we offer, and get in touch today with any questions.";
  return (
    <>
      <Navbar />
      <div className="home-header">
        <img className="dawn-bg" src={dawn} alt="" />
        <div className="header-content">
          <div className="col1">
            <div>
              <h1 className="h1">Pacific Legal Welcomes You</h1>
              <p className="company-subtitle">
                Lawyers For Emerging And High Growth Companies.
              </p>
              <CTAButton title="Services" />
            </div>
            <div>
              <p>info@pacificlegal.ca</p>
            </div>
          </div>
          <div className="col2">
            <div className="justice">
              <img src={justice} alt="" style={{ width: "15rem" }} />
            </div>
            <div>
              <img src={building} alt="" style={{ width: "20rem" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="whoarewe">
        <h2>Who Are We?</h2>
        <p>{whoarewe}</p>
      </div>

      <div className="services">
        <h2 className="services-header-title">Our Services</h2>
        <p>{ourservices}</p>

        <div className="services-tiles-parent">
          <Service title="Commercial Contract Review" url={service1} />
          <Service
            title="Public Company Regulatory Compliance and Reporting"
            url={service2}
          />
          <Service title="Terms of Service and Privacy Policy" url={service3} />
          <Service title="Corporate Immigration" url={service4} />
          <Service title="General Corporate Advisory" url={service5} />
          <Service title="Purchase and Sale of Businesses" url={service6} />
        </div>
      </div>

      <div className="features">
        <Feature title="Success" metric="95%" url={feature1} />
        <Feature title="Experience" metric="10+ Yrs" url={feature2} />
        <Feature title="Cases" metric="100+" url={feature3} />
        <Feature title="Clients" metric="75+" url={feature4} />
      </div>

      <div className="clients">
      <img className="dawn-bg" src={dawn} alt="" />

      <div className="client-content">
      <h2 className="services-header-title">What Clients Say</h2>
      </div>
     
      </div>

      <div className="getintouch">
      <div className="getintouch-header">
      <h2 className="services-header-title">Get In Touch</h2>
      <p>Contact us and find out how our services can benefit your company.</p>
      </div>
      <div className="getintouch-form">
        <input type="text" name="" id="" placeholder="Name"/>
        <input type="text" name="" id="" placeholder="Email"/>
        <input type="text" name="" id="" placeholder="Phone"/>
        <input type="text" name="" id="" placeholder="Message"/>
<CTAButton title="Submit" handleClick={()=>console.log("nothing")}/>
      </div>
      </div>
    </>
  );
}

export default Home;
