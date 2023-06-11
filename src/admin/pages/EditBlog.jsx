import { useNavigate } from 'react-router-dom';
import './EditBlog.css'
import uploadimg from '../../assets/upload.png'
import { useState } from 'react';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';

// import { db } from '../backend/firebase';
// import { addDoc, collection, doc, setDoc} from 'firebase/firestore';

function EditBlog(){
    const navigate = useNavigate();
    const [name, setName] = useState(null);
    const [time, setTime] = useState(null);
    const [date, setDate] = useState(null);
    const [btitle, setBtitle] = useState(null);
    const [bcontent, setBcontent] = useState(null);
    const [mtitle, setMtitle] = useState(null);
    const [mtag, setMtags] = useState(null);  
    const [mdesc, setMdesc] = useState(null);
    const [slugs, setSlugs] = useState(null);
    const [excrept, setExcrept] = useState(null);
    const [category, setCategory] = useState(null); 
    const [tags, setTags] = useState(null);
    
    var data = {
      "author-name": name,
      "published-date": date,
      "read-time": time,
      "blog-title": btitle,
      "blog-content": bcontent,
      "meta-title": mtitle,
      "meta-tag": mtag,
      "meta-desc": mdesc,
      "slugs": slugs,
      "excrept": excrept,
      "category": category,
      "tags": tags
  } 

  


    function handleChangename(event){
      setName(event.target.value);
        }
    function handleChangedate(event){
      setDate(event.target.value);
    }
    function handleChangetime(event){
      setTime(event.target.value);
    }
    function handleChangebtitle(event){
      setBtitle(event.target.value);
    }
    function handleChangebcontent(event){
      setBcontent(event.target.value);
    }
    function handleChangemtitle(event){
      setMtitle(event.target.value);
    }
    function handleChangemtags(event){
      setMtags(event.target.value);
    }
    function handleChangemdesc(event){
      setMdesc(event.target.value);
    }
    function handleChangeslugs(event){
      setSlugs(event.target.value);
    }
    function handleChangeexcrept(event){
      setExcrept(event.target.value);
    }
    function handleChangecategory(event){
      setCategory(event.target.value);
    }
    function handleChangetags(event){
      setTags(event.target.value);
    }
   
   
   
   
   
   
   
   
   
   
    


    return(
        <>
        <div className="EditPage">
       
            <div className="row1">
          <h1>Editing Mode</h1>
          <div className='subrow1'>
          <button
            onClick={() => {
                navigate('/admin');
              
            }}

            style={{"backgroundColor": "#c23b22 "}}
          >
            Discard
          </button>
          <button
            onClick={() => {
                navigate("/editblog");
            }}
          >
            Save Draft
          </button>
          <button 
            onClick={() => {
              navigate("/editblog");
            }}
            // onClick={handleAdd(data)}
          >
            Publish
          </button>
          </div>
        </div>

        <div className='row2'>
            <div className='thumbnail-input'>
                {/* <img src={uploadimg} alt="" srcset="" style={{"height": "3rem"}}/> */}
                <img src={uploadimg} alt="" style={{"height": "3rem"}}/>
                <h4>Click to add thumbnail</h4>
            </div>
            <div className='row2-right'>
            <div className='auth-details'>
            <h4>Author Name</h4>
                <input type='text' className='admin-title-input' placeholder='Type Name..' onChange={handleChangename}></input>
               <br></br>
               </div>
               <div className='date-time'>
               <h4>Published Date</h4>
                <input type='text' className='admin-title-input' placeholder='Type Date ..' onChange={handleChangedate}></input>
                <br></br>
                <h4>Read Time</h4>
                <input type='text' className='admin-title-input' placeholder='Enter Time ..' onChange={handleChangetime}></input>
                </div>
                </div>
            
        </div>

        <div>
            <div className='editblogtitle'>
                <h4>Blog Title</h4>
                <input type='text' className='admin-title-input' placeholder='Type Here..' onChange={handleChangebtitle}></input>
            </div>
            <div className='editblogcontent'>
                <h4>Blog Content</h4>
                <textarea className='admin-bcontent-input' placeholder='Type Here..' onChange={handleChangebcontent}></textarea>
            </div>


            <div className='editblogtitle'>
                <h4>Meta Title</h4>
                <input type='text' className='admin-title-input' placeholder='Type Here..' onChange={handleChangemtitle}></input>
            </div>
            <div className='editblogtitle'>
                <h4>Meta Tags</h4>
                <input type='text' className='admin-title-input' placeholder='Type Here..' onChange={handleChangemtags}></input>
            </div>
            <div className='editblogcontent'>
                <h4>Meta Description</h4>
                <textarea className='admin-other-content-input' placeholder='Type Here..' onChange={handleChangemdesc}></textarea>
            </div>
            <div className='editblogtitle'>
                <h4>Slugs</h4>
                <input type='text' className='admin-title-input' placeholder='Type Here..' onChange={handleChangeslugs}></input>
            </div>
            <div className='editblogcontent'>
                <h4>Excrept</h4>
                <textarea className='admin-other-content-input' placeholder='Type Here..' onChange={handleChangeexcrept}></textarea>
            </div>
            <div className='editblogtitle'>
                <h4>Category</h4>
                <input type='text' className='admin-title-input' placeholder='Type Here..' onChange={handleChangecategory}></input>
            </div>
            <div className='editblogtitle'>
                <h4>Tags</h4>
                <input type='text' className='admin-title-input' placeholder='Type Here..' onChange={handleChangetags}></input>
            </div>



        </div>
        
        </div>
        </>
    )


}

export default EditBlog;