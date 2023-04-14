import CTAButton from '../CTAButton/CTAButton';
import '../Scards/Scards.css'
function Scards(props){
    const url = props.url;
    const title = props.title;
    const btn = props.btn;
    return(
       <>
       <div className='scardtile' style={{"backgroundImage": "url("+url+")"}}>
        <h3 className='scardtitle'>{title}</h3>
        <div className='scardbtn'>
        <CTAButton   title="Learn More" />
        </div>
       </div>
       </>
    )


}

export default Scards;