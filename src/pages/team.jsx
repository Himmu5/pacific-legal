import Footer from '../components/footer.js';
import Hero from "../components/Hero/Hero";
import Navbar from '../components/Navbar/Navbar.jsx';
import TeamBody from '../components/team.js';



function Team(){
    return(
        <>
        <Navbar index={3}/>
        <Hero title="The Team"/>
        <TeamBody/>
        <Footer/>
        </>
    )


}

export default Team;