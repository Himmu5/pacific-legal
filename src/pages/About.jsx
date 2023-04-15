import Footer from '../components/footer.js';
import Hero from "../components/Hero/Hero";
import AboutBody from '../components/aboutbody.js';
import Navbar from '../components/Navbar/Navbar.jsx';

function About(){
    return(
        <>
        <Navbar/>
        <Hero title="About us"/>
        <AboutBody/>
        <Footer/>
        </>
    )


}

export default About;