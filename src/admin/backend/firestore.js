// // import { useState } from "react"

// import { useState } from "react"
// import { useNavigate } from "react-router-dom"

// // addblog

// // updateblog

// // deleteblog

// // readblog
// const navigate = useNavigate();

// const firebasedata = () =>{
//     const [name, setName] = useState(null);
//     const [time, setTime] = useState(null);
//     const [btitle, setBtitle] = useState(null);
//     const [bcontent, setBcontent] = useState(null);
//     const [mtitle, setMtitle] = useState(null);
//     const [mtag, setMtag] = useState(null);
//     const [mdesc, setMdesc] = useState(null);
//     const [slugs, setSlugs] = useState(null);
//     const [excrept, setExcrept] = useState(null);
//     const [category, setCategory] = useState(null); 
//     const [tags, setTags] = useState(null);


//     function uploadToDB(data, docid){
//         // firestore.collection(blogs).doc(docid).set({
//         //     data
//         // }).then((){
//         //     navigate('/'); 
//         // }).catch(err){
//         //     alert(err);
//         // }

//         firestore.collection('blogs').doc(docid).set(data)
//         .then(() => {
//            navigate('/');
//          })
//         .catch(err => {
//       alert(err);
//       });


//     }

//     var data = {
//         "author-name": name,
//         "published-date": date,
//         "read-time": time,
//         "blog-title": btitle,
//         "blog-content": bcontent,
//         "meta-title": mtitle,
//         "meta-tag": mtag,
//         "meta-desc": mdesc,
//         "slugs": slugs,
//         "excrept": excrept,
//         "category": category,
//         "tags": tags
//     } 




//     return (
//         <>
//         <button onClick={()=>{
//             uploadToDB(data, docid);
//         }}>push</button>
//         </>
//     )
// }




//services CRUD KI 

import { db } from "../backend/firebase";


import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const blogCollectionRef = collection(db, "blogs");
class BlogDataService {
  addBlogs = (newBlog) => {
    return addDoc(blogCollectionRef, newBlog);
  };

  updateBlog = (id, updatedBlog) => {
    const blogDoc = doc(db, "blogs", id);
    return updateDoc(blogDoc, updatedBlog);
  };

  deleteBlog = (id) => {
    const blogDoc = doc(db, "blogs", id);
    return deleteDoc(blogDoc);
  };

  getAllBlog = () => {
    return getDocs(blogCollectionRef);
  };

  getBlog= (id) => {
    const blogDoc = doc(db, "blogs", id);
    return getDoc(blogDoc);
  };
}

export default new BlogDataService();