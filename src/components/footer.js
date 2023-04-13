import './footer.css';
import Fimage from '../assets/footerimage.png';

function Footer(){
    return(
        <>
        <h1 className='head'> This is footer </h1>
        <div className='f-container'> 
        <div className='f-box'>
            <img className='f-image' src={Fimage} alt="fimage"/>
            <div className='f-menu'>
                <h3 className='f-head1'>Menu</h3>
                <ul className='f-m-list'>
                    <li>Home</li>
                    <li>Blog</li>
                    <li>About</li>
                    <li>The Team</li>
                    <li>Practices</li>
                    <li>Services</li>
                    <li>Contact Us</li>
                </ul>
            </div>

            <div className='f-address'>
                <h3 className='f-head2'>Address</h3>
                <ul className='f-a-list'>
                    <li>
                        416.688.5561 King St W, <br/>
                        Suite 4800, toronto, ON <br/>
                        M5G 1A1
                    </li>
                    
                </ul>
            </div>

            <div className='f-links'>
                <h3 className='f-head3'>Contact</h3>
                <ul className='f-c-list'>
                    <li> Phone <br/> 8888888888</li>
                    <li> Email <br/> etioio@gmail.com</li>

                </ul>
            </div>

        </div>
        </div>
 

        </>
    )
}

export default Footer;