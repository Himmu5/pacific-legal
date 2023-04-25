import Footer from '../components/footer.js';
import ServiceBody from '../components/servicebody.js';
import Hero from "../components/Hero/Hero";
import Navbar from '../components/Navbar/Navbar.jsx';

function Services(){
    return(
        <>
        <Navbar index={5}/>
        <Hero title = "Services"/>
        <ServiceBody/>
        <Footer/>
        </>
    )
}

export default Services;