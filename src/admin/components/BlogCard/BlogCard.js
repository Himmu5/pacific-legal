import './BlogCard.css'
import { useNavigate } from 'react-router-dom';
import BlogDataService from "../../backend/firestore";
import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import EditBlog from '../../pages/EditBlog';
import { doc } from 'firebase/firestore';






const BlogCard = ({ getBlogId }) => {
  const [blogId, setBlogId] = useState("");
  const [hidden, setHidden] = useState(null);

  // const getBlogIdHandler = (id) => {
  //   console.log("The ID of document to be edited: ", id);
  //   setBlogId(id);
  // };
    
  useEffect(() => {
    
  }, [hidden]);


    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
      getBlogs();
    }, []);


  
    const getBlogs = async () => {
      const data = await BlogDataService.getAllBlog();
      console.log(data.docs);
      setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

      
    function EditStatusBlog (id, isHidden){
      BlogDataService.updateBlog(id, {"hidden": !isHidden})
      setHidden(!isHidden)
      getBlogs()
      console.log("success")
    };
  



   
    const deleteHandler = async (id) => {
      await BlogDataService.deleteBlog(id);
      getBlogs();
    };
        const navigate = useNavigate();
    return(
       <>
        <div className="mb-2">
        {/* <Button variant="dark edit" onClick={getBlogs}>
          Refresh List
        </Button> */}
      </div>
<Table>
{blogs.map((doc, index) => {
    return(
        <div className='blogcardbody' style={{"cursor": "pointer"}}>
            <div className='cardcontent'>
                <p> 
                    <b>Blog Title:</b> {doc.btitle} <br></br>
                    <b>Publish Date:</b> {doc.date} <br></br>
                    <b>Author Name:</b> {doc.name} <br></br>
                    <b>Status:</b> {doc.hidden?"Hidden":"Live"}
                </p>
            </div>
            <div>
            <button  onClick={()=>{
              navigate('/blogs?id='+doc.id)
            }}>View</button>
                <button  onClick={(e) =><EditBlog id={blogId} setBlogId={setBlogId} />}>Edit</button>
                <button onClick={()=>{
                  EditStatusBlog(doc.id, doc.hidden)
                }}>{doc.hidden?"Unhide":"Hide"}</button>
                <button style={{"backgroundColor": "#c23b22 "}} onClick={()=>deleteHandler(doc.id)}>Delete</button>
            </div>
        </div>
      );
    })}
    </Table>

      </>

    )


}

export default BlogCard;