import './aboutbody.css';
import comp3 from '../assets/corporate-law.png';
import CTAButton from "./CTAButton/CTAButton"; 

function AboutBody(){
    return(
        <> 
        <div className='about-body'>

            <div className='b1'>
               <img className='a-image' src={comp3} alt='About-Us-Image'/>
            </div>

            <div className='b2'>
                <h2 className='a-head'>About Us</h2>
                <p className='a-text'>Pacific Legal is dedicated to working with clients to help them achieve their business goals and overcome legal challenges anywhere in the world. From a global platform spanning 2 countries, Pacific Legal lawyers help clients succeed. We are committed to helping clients achieve their business strategies and providing outstanding legal services around the world. Clients depend on the firm to find innovative solutions to complex business issues, and Pacific Legal lawyers leverage the firm’s global platform to help clients handle these challenges.</p>
                <CTAButton title="Get in touch"/>
            </div>
             </div>        
        </>
    )
}

export default AboutBody;