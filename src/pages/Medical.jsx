import Footer from '../components/footer.js';
import Hero from "../components/Hero/Hero";

import Navbar from '../components/Navbar/Navbar.jsx';
import MedicalBody from '../components/Medical.js';


function Medical(){
    return(
        <>
        <Navbar/>
        <Hero title="Medical Malpractice Cases in Turkey"/>
        <MedicalBody/>
        <Footer/>
        </>
    )


}

export default Medical;