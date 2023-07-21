import "./SingleBlog.css";
import comp1 from "../assets/airplane.png";
import comp2 from "../assets/Ellipse1.png";
import comp3 from "../assets/Vector.png";
import comp4 from "../assets/Ellipse2.png";
import comp5 from "../assets/facebook.png";
import comp6 from "../assets/linkedin.png";
import comp7 from "../assets/twitter.png";
import comp8 from "../assets/Ellipse3.png";
import comp9 from "../assets/smile.png";
import comp10 from "../assets/camera.png";
import comp11 from "../assets/videocamera.png";
import comp12 from "../assets/gif.png";
import blogauth from "../assets/blogauth.png";
import Bimage1 from "../assets/blog1.png";
import Bimage2 from "../assets/blog2.png";
import Bauthor from "../assets/blogauth.png";
import Bcards from "./Bcards/Bcards";
import Footer from "./footer";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import { Link, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Modal from 'react-modal';
import close from '../assets/close.png';
import BlogDataService from '../admin/backend/firestore'
import { doc, getDoc } from "firebase/firestore";
import { db } from "../admin/backend/firebase";


function SingleBlog() {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: "20vh",
      width: "70vw"
    },
  };
  const [modalIsOpen, setIsOpen] = useState(false);
 
  function openModal() {
    setIsOpen(true);
  }



  function closeModal() {
    setIsOpen(false);
  }
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

    const queryParameters = new URLSearchParams(window.location.search)
    const id = useParams().id;
    // console.log("id is ", id);

    const [btitle, setBtitle] = useState(null);
    const [burl, setBurl] = useState(null);
    const [bauthor, setBauthor] = useState(null);
    const [bdate, setBdate] = useState(null);
    const [btime, setBtime] = useState(null);
    const [bcontent, setBcontent] = useState(null);
    const [imgurl, setImgurl] = useState(null)

    console.log("Data : ",id , burl , bauthor , bdate , btime , bcontent , imgurl);

    // const t = doc(db , "blogs" , id)
    // getDoc(t).then((res)=>{
    //   console.log("res " , res.data());
    // }).catch((err)=>{
    //   console.log("err :", err);
    // })

    const getSingleBlog = async (id) => {
        const data = await BlogDataService.getBlog(id);

        console.log(data);
        if(data.data()!=undefined){
            const blogData = data.data();
            console.log("not null");
            setBauthor(blogData['name'])
            setBcontent(blogData['bcontent'])
            setBdate(blogData['date'])
            setBtime(blogData['time'])
            setBtitle(blogData['btitle'])
            setImgurl(blogData['imgUrl'])
            // setBurl(blogData)
        }
        else{
            console.log("NULL")
            alert("wrong url!")
        }
        // setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      const ref = useRef(null);
      const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
      };

    useEffect(()=>{
        getSingleBlog(id);
        handleClick();
    }, [id])
  return (
    <>

    {/* Modal share a post */}
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        
        contentLabel="Modal"
      >
      <div className="share-post-modal">
        <div  onClick={closeModal} className='close-form' style={{"position": "absolute", "top": "2rem", "left": "2rem", "cursor": "pointer"}}>
           <img src={close} alt="" srcset="" height={"10rem"} />
        </div>
        <div className="modal-content">
          <h1 className="modal-head">Share post</h1>
          <div className="modal-links">
          <a target="_blank" href="#">
                <img
                  className="m-sharelogo"
                  src={comp5}
                  alt="MedicalBody-Image"
                />
              </a>
              <a target="_blank" href="#">
                <img
                  className="m-sharelogo"
                  src={comp6}
                  alt="MedicalBody-Image"
                />
              </a>
              <a target="_blank" href="#">
                <img
                  className="m-sharelogo"
                  src={comp7}
                  alt="MedicalBody-Image"
                />
              </a>
              <a target="_blank" href="#">
                <img
                  className="m-sharelogo"
                  src={comp8}
                  alt="MedicalBody-Image"
                />
              </a>
          </div>
        </div>
       

      </div> 
      </Modal>

    {/* end of modal  */}
    <Navbar index={1}/>
        <Hero title={btitle}/>
      <div className="Medical-body">
        <div className="b1">
          <div ref={ref}></div>
           <img className="m-image" src={imgurl} alt="MedicalBody-Image" />
        </div>

        <div className="b2">
          <div className="info-bar">
            <div className="profile-img-details">
              <img className="profile-image" src={blogauth} alt="profile-image" />
              <div className="name-info">
                <div className="name">{bauthor}</div>
                <div className="date-time">
                  {bdate}{"  •  "}
                 {btime}
                </div>
              </div>
            </div>
            <div className="share-bt">
       <Link onClick={openModal}>   <img className="share-button" src={comp3} alt="share-button" /></Link>
            </div>

          </div>
          <div className="partation-line"></div>
          

          <div className="body">
            <p dangerouslySetInnerHTML={{ __html: bcontent }}>
               {/* {bcontent}  */}
                  </p>
          </div>

          <div className="partation-line"></div>
          <div className="share-post">
            <p style={{"fontSize": "1.5rem"}}>Share Post</p>
            <div class="links">
              <a target="_blank" href="#">
                <img
                  className="m-sharelogo"
                  src={comp5}
                  alt="MedicalBody-Image"
                />
              </a>
              <a target="_blank" href="#">
                <img
                  className="m-sharelogo"
                  src={comp6}
                  alt="MedicalBody-Image"
                />
              </a>
              <a target="_blank" href="#">
                <img
                  className="m-sharelogo"
                  src={comp7}
                  alt="MedicalBody-Image"
                />
              </a>
              <a target="_blank" href="#">
                <img
                  className="m-sharelogo"
                  src={comp8}
                  alt="MedicalBody-Image"
                />
              </a>
            </div>
          </div>
          <div className="comment-section">
            <div className="comment-wh-body">
              <h3 style={{"fontSize": "1.4rem"}}>Leave a comment</h3>
              {/* <div className="comment-box"> */}
                <textarea className="leave-comment" placeholder="Write a comment" />
                {/* <div className="commentbox-line"></div>
                <div className="add-item-logo">
                  <img
                    className="add-item-image"
                    src={comp9}
                    id="smile"
                    alt="add-item-image"
                  />
                  <img
                    className="add-item-image"
                    src={comp10}
                    id="camera"
                    alt="add-item-image"
                  />
                  <img
                    className="add-item-image"
                    src={comp11}
                    id="videocamera"
                    alt="add-item-image"
                  />
                  <img
                    className="add-item-image"
                    src={comp12}
                    id="gif"
                    alt="add-item-image"
                  />
                </div> */}
              {/* </div> */}

              <div className="btn-commentbox">
                <button className="btn-comment" id="publish-btn">
                  Publish
                </button>
                <button className="btn-comment" id="cancel-btn">
                  Cancel
                </button>
              </div>
            </div>
          </div>

          <div className="b-container">
            <h1 className="b-head"> All Post</h1>
            <div className="b-cards">

              
          {  blogs.map((doc, index) => {
                {
                    if(doc.hidden==false){
                        return(

                            <Bcards url={doc.imgUrl} title={doc.btitle} authImage={Bauthor} authName = {doc.name} detail={doc.date + " " + doc.time} id={doc.id} />
                            
                                              );
                    }
                }})
              }

            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default SingleBlog;
