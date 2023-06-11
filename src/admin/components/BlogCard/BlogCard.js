import './BlogCard.css'
import { useNavigate } from 'react-router-dom';
import BlogDataService from "../../backend/firestore";
import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import EditBlog from '../../pages/EditBlog';






const BlogCard = ({ getBlogId }) => {
  const [blogId, setBlogId] = useState("");

  // const getBlogIdHandler = (id) => {
  //   console.log("The ID of document to be edited: ", id);
  //   setBlogId(id);
  // };
    

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
      getBlogs();
    }, []);
  
    const getBlogs = async () => {
      const data = await BlogDataService.getAllBlog();
      console.log(data.docs);
      setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
  
    const deleteHandler = async (id) => {
      await BlogDataService.deleteBlog(id);
      getBlogs();
    };
        const navigate = useNavigate();
    return(
       <>
        <div className="mb-2">
        <Button variant="dark edit" onClick={getBlogs}>
          Refresh List
        </Button>
      </div>
<Table>
{blogs.map((doc, index) => {
    return(
        <div className='blogcardbody'>
            <div className='cardcontent'>
                <p> 
                    Blog Title: {doc.btitle} <br></br>
                    Publish Date: {doc.date} <br></br>
                    Author Name: {doc.name} <br></br>
                    Status: {doc.time}
                </p>
            </div>
            <div>
                <button  onClick={(e) =><EditBlog id={blogId} setBlogId={setBlogId} />}>Edit</button>
                <button onClick={()=>alert("are you sure you wanna hide")}>Hide</button>
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