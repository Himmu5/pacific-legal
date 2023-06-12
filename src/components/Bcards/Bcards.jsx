import '../Bcards/Bcards.css'
import {  Link, useNavigate } from "react-router-dom";

function Bcards(props){
    const url = props.url;
    const title = props.title;
    const authImage = props.authImage;
    const authName = props.authName;
    const detail = props.detail;
    const id = props.id;
    const navigate = useNavigate();
    return(
       <>
       <div className='bcardtile' style={{"backgroundImage": "url("+url+")"}} onClick={()=>{
        navigate('/blogs?id='+id);
       }}>
        <div className='bcardbox'>
        <h3 className='bcardtitle'>
            <Link to = "/medical"> {title} </Link></h3>
        <div className='bd-box'>
        <img className='bcardauthor' src={authImage}/> 
        <div className='bnt-box'>
        <h4 className='bcardname'>{authName}</h4>
        <h7 className='bcarddetail'>{detail} </h7>
        </div>
        </div>
        </div>
       </div>
       </>
    )


}


export default Bcards;