import './blogbody.css';

import Bauthor from '../assets/blogauth.png';
import Bcards from './Bcards/Bcards';
import { useEffect, useState } from 'react';
import BlogDataService from '../admin/backend/firestore'


function BlogBody(){
    const [blogId, setBlogId] = useState("");
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
      getBlogs();
    }, []);

    const getBlogs = async () => {
        const data = await BlogDataService.getAllBlog();
        console.log(data.docs);
        setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };

    return(
        <>
        <div className='b-container'>
            <h1 className='b-head'> All Post</h1>
            <div className='b-cards'>

            {blogs.map((doc, index) => {
                {
                    if(doc.hidden==false){
                        return(

                            <Bcards url={doc.imgUrl} title={doc.btitle} authImage={Bauthor} authName = {doc.name} detail={doc.date + " • " + doc.time} id={doc.id} />
                            
                                              );
                    }
                }
                })}
            </div>
             </div>
        
        </>
    )
}

export default BlogBody;