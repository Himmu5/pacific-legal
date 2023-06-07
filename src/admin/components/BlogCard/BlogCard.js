import './BlogCard.css'
import {  Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function BlogCard(props){
    const title = props.title;
    const date = props.date;
    const status = props.status;
    const navigate = useNavigate();
    return(
       <>
        <div className='blogcardbody'>
            <div className='cardcontent'>
                <p>
                    Title: {title} <br></br>
                    Date Added: {date} <br></br>
                    Status: {status}
                </p>
            </div>
            <div>
                <button onClick={()=>{navigate('/editblog')}}>Edit</button>
                <button onClick={()=>alert("are you sure you wanna hide")}>Hide</button>
                <button style={{"backgroundColor": "#c23b22 "}} onClick={()=>{alert("are you sure you wanna delete?")}}>Delete</button>
            </div>
        </div>
       </>
    )


}

export default BlogCard;