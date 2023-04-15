import './footer.css';
import Fimage from '../assets/footerimage.png';
import Fface from '../assets/footerfacebook.png';
import Finsta from '../assets/footerinsta.png';
import Flinkd from '../assets/footerlinkedin.png';

function Footer(){
    return(
        <>
        
        <div className='f-container'> 
        <div className='f-box'>
            <div className='f-img'>
            <img className='f-image' src={Fimage} alt="fimage"/>
            </div>
            <div className='f-menu'>
                <h3 className='f-head'>Menu</h3>
                <ul className='f-list'>
                    <li>Home</li> <br/>
                    <li>Blog</li><br/>
                    <li>About</li><br/>
                    <li>The Team</li><br/>
                    <li>Practices</li><br/>
                    <li>Services</li><br/>
                    <li>Contact Us</li><br/>
                </ul>
            </div>

            <div className='f-address'>
                <h3 className='f-head'>Address</h3>
                <ul className='f-list'>
                    <li>
                        416.688.5561 King St W, <br/>
                        Suite 4800, toronto, ON <br/>
                        M5G 1A1
                    </li>
                    <br/>
                    <iframe className='f-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.361676315772!2d-79.42374762264603!3d43.64064298939201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3503d5fb9099%3A0x8d720c653c999783!2s5561%20King%20St%20W%20%23688%2C%20Toronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sin!4v1681474297722!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </ul>
            </div>

            <div className='f-links'>
                <h3 className='f-head'>Contact</h3>
                <ul className='f-list'>
                    <li> Phone <br/>  8888888888</li>
                    <br/>
                    <li> Email <br/>  ertioo@gmail.com</li>
                 
                    <div className='socials'>
                    <img className='s-l' src ={Fface}/>
                    <img className='s-l' src ={Finsta}/>
                    <img className='s-l' src={Flinkd}/>
                    </div>

                </ul>
            </div>

            </div>

        
         <div className='f-row'>
            <p className='f-last'>info@pacificlegal.ca</p>
            <p className='f-last'>©2022 by PACIFIC LEGAL.</p>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            </div>
            
    </div>
 

        </>
    )
}

export default Footer;