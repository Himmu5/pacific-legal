import '../Hero/Hero.css'
import Navbar from '../Navbar/Navbar';

function Hero(props){
    return(
        <>
        <div className='hero-parent'>
            <h1>{props.title} </h1>
        </div>

        </>
    )


}

export default Hero;