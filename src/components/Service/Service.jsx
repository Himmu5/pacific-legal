import '../Service/Service.css'
import CTAButton from '../CTAButton/CTAButton';
function Service(props){
    const url = props.url;
    const title = props.title;
    return(
       <>
       <div className='servicetile' style={{"backgroundImage": "url("+url+")"}}>
        <p className='servicetitle'>{title}</p>
       <div className='learn-more'>
       <CTAButton title="Learn more"/>
       </div>
       </div>
       </>
    )


}

export default Service;