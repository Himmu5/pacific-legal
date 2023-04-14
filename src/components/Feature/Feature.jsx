import '../Feature/Feature.css'
import Navbar from '../Navbar/Navbar';

function Feature(props){
    return(
        <>
        <div className='feature-parent'>
            <img src={props.url} alt="" className='feature-img' />
            <h1>{props.metric}</h1>
            <h4 className='feature-sub'>{props.title}</h4>
        </div>

        </>
    )


}

export default Feature;