import Navbar from "../components/Navbar/Navbar";
import dawn from '../assets/Dawn.png';
import './Home.css'
import CTAButton from "../components/CTAButton/CTAButton";

function Home(){
    return(
        <>
<div className="home-header">
<img
    className="dawn-bg"
    src={dawn}
    alt=""
  />
  <div className="header-content">
    
    <div className="col1">
        <div>
        <h1>Pacific Legal Welcomes You</h1>
        <p>Lawyers For Emerging And High Growth Companies.</p>
        <CTAButton title="Services"/>
        </div>
        <div>
        <p>info@pacificlegal.ca</p>
        </div>
    </div>
    <div className="col2">

    </div>
  </div>
</div>

<div className="whoarewe">

</div>
        </>
    )


}

export default Home;