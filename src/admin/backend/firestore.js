// import { useState } from "react"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

addblog

updateblog

deleteblog

readblog

id2: {
    title: xyz
}


// {
//     "author-name": name,

// }

const navigate = useNavigate();

const firebasedata = () =>{
    const [name, setName] = useState(null);
    const [time, setTime] = useState(null);

    function uploadToDB(data, docid){
        firestore.collection(blogs).doc(docid).set({
            data
        }).then((){
            navigate('/'); 
        }).catch(err){
            alert(err);
        }
    }

    var data = {
        "author-name": name,
        "read-time": time
    } 

    return (
        <>
        <button onClick={()=>{
            uploadToDB(data, docid);
        }}>push</button>
        </>
    )
}