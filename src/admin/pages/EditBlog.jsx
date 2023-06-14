import { useNavigate } from 'react-router-dom';
import './EditBlog.css'
import uploadimg from '../../assets/upload.png'
// import { useState } from 'react';
import React, { useState, useEffect } from "react";
import BlogDataService from "../backend/firestore";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



const EditBlog = ({ id, setBlogId })=>{
  const queryParameters = new URLSearchParams(window.location.search)
  const id_ = queryParameters.get("id")

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
        const [message, setMessage] = useState({ error: false, msg: "" });

       
  const handleSubmit = async (e) => {
    console.log("working")
    e.preventDefault();
    setMessage("");
    if (name==="" ) {
      setMessage({ error: true, msg: "Please mandatory fields" });
      return;
    }
    const newBlog = {
     name,
     time,
     date,
     btitle,
     bcontent,
     mtitle,
     mtag,
     mdesc,
     slugs,
     excrept,
     category,
     tags,
    };
    console.log(newBlog);  
    
    try {
      if (id_ !== undefined && id_ !== "") {
        await BlogDataService.updateBlog(id_, newBlog);
        setBlogId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } 
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }


      setName("");
      setTime("");
      setDate("");
      setBtitle("");
      setBcontent("");
      setMtitle("");
      setMtags("");
      setMdesc("");
      setSlugs("");
      setExcrept("");
      setCategory("");
      setTags("");

   navigate("/admin");

    }

    const editHandler = async () => {
      setMessage("");
      try {
        const docSnap = await BlogDataService.getBlog(id_);
        console.log("the record is :", docSnap.data());
      setName(docSnap.data().name);
      setTime(docSnap.data().time);
      setDate(docSnap.data().date);
      setBtitle(docSnap.data().btitle);
      setBcontent(docSnap.data().bcontent);
      setMtitle(docSnap.data().mtitle);
      setMtags(docSnap.data().mtag);
      setMdesc(docSnap.data().mdesc);
      setSlugs(docSnap.data().slugs);
      setExcrept(docSnap.data().excrept);
      setCategory(docSnap.data().category);
      setTags(docSnap.data().tags);
       
      } catch (err) {
        setMessage({ error: true, msg: err.message });
      }

      
    };
  
    useEffect(() => {
      console.log("The id here is : ", id_);
      if (id_ !== undefined && id_ !== "") {
        editHandler();
      }
    }, [id_]);
    
      

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
          <h1>Edit A Blog </h1>
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
            // onClick={() =>{
            //    console.log("wroking");
            // }}
            
             onClick={handleSubmit}
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
                <input type='text' className='admin-title-input' placeholder='Type Name..' value={name} onChange={handleChangename}></input>
               <br></br>
               </div>
               <div className='date-time'>
               <h4>Published Date</h4>
                <input type='text' className='admin-title-input' placeholder='Type Date ..' value={date} onChange={handleChangedate}></input>
                <br></br>
                <h4>Read Time</h4>
                <input type='text' className='admin-title-input' placeholder='Enter Time ..' value={time} onChange={handleChangetime}></input>
                </div>
                </div>
            
        </div>

        <div>
            <div className='editblogtitle'>
                <h4>Blog Title</h4>
                <input type='text' className='admin-title-input' placeholder='Type Here..' value={btitle} onChange={handleChangebtitle}></input>
            </div>
            <div className='editblogcontent'>
                <h4>Blog Content</h4>
                <ReactQuill theme="snow" value={bcontent} onChange={() => setBcontent} />

                {/* <textarea className='admin-bcontent-input' placeholder='Type Here..' value={bcontent} onChange={handleChangebcontent}></textarea>
             */}
            
            </div>


            <div className='editblogtitle'>
                <h4>Meta Title</h4>
                <input type='text' className='admin-title-input' placeholder='Type Here..' value={mtitle} onChange={handleChangemtitle}></input>
            </div>
            <div className='editblogtitle'>
                <h4>Meta Tags</h4>
                <input type='text' className='admin-title-input' placeholder='Type Here..' value={mtag} onChange={handleChangemtags}></input>
            </div>
            <div className='editblogcontent'>
                <h4>Meta Description</h4>
                <textarea className='admin-other-content-input' placeholder='Type Here..' value={mdesc} onChange={handleChangemdesc}></textarea>
            </div>
            <div className='editblogtitle'>
                <h4>Slugs</h4>
                <input type='text' className='admin-title-input' placeholder='Type Here..'  value={slugs} onChange={handleChangeslugs}></input>
            </div>
            <div className='editblogcontent'>
                <h4>Excrept</h4>
                <textarea className='admin-other-content-input' placeholder='Type Here..' value={excrept} onChange={handleChangeexcrept}></textarea>
            </div>
            <div className='editblogtitle'>
                <h4>Category</h4>
                <input type='text' className='admin-title-input' placeholder='Type Here..' value={category} onChange={handleChangecategory}></input>
            </div>
            <div className='editblogtitle'>
                <h4>Tags</h4>
                <input type='text' className='admin-title-input' placeholder='Type Here..' value={tags} onChange={handleChangetags}></input>
            </div>



        </div>
        
        </div>
        </>
    )


}



export default EditBlog;