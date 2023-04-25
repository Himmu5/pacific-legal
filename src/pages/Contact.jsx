import Footer from '../components/footer.js';
import Hero from "../components/Hero/Hero";
import Navbar from '../components/Navbar/Navbar.jsx';
import ContactUsBody from '../components/contactus.js';



function Contact(){
    return(
        <>
        <Navbar index={6}/>
        <Hero title="Contact Us"/>
        <ContactUsBody/>
        <Footer/>
        </>
    )


}

export default Contact;