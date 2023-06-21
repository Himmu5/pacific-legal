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
import pfp from "../assets/pfp.png";
import Bimage1 from "../assets/blog1.png";
import Bimage2 from "../assets/blog2.png";
import Bauthor from "../assets/blogauth.png";
import Bcards from "./Bcards/Bcards";
import Footer from "./footer";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";
import { useEffect, useState } from "react";
import BlogDataService from '../admin/backend/firestore'


function SingleBlog() {
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
    const id = queryParameters.get("id")
    // console.log("id is ", id);

    const [btitle, setBtitle] = useState(null);
    const [burl, setBurl] = useState(null);
    const [bauthor, setBauthor] = useState(null);
    const [bdate, setBdate] = useState(null);
    const [btime, setBtime] = useState(null);
    const [bcontent, setBcontent] = useState(null);
    const [imgurl, setImgurl] = useState(null)



    const getSingleBlog = async (id) => {
        const data = await BlogDataService.getBlog(id);
        console.log(data.data());
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

    useEffect(()=>{
        getSingleBlog(id);
    }, [])
  return (
    <>
    <Navbar index={1}/>
        <Hero title={btitle}/>
      <div className="Medical-body">
        <div className="b1">
           <img className="m-image" src={imgurl} alt="MedicalBody-Image" />
        </div>

        <div className="b2">
          <div className="info-bar">
            <div className="profile-img-details">
              <img className="profile-image" src={pfp} alt="profile-image" />
              <div className="name-info">
                <div className="name">{bauthor}</div>
                <div className="date-time">
                  {bdate}{"  •  "}
                 {btime}
                </div>
              </div>
            </div>
            <div className="share-bt">
              <img className="share-button" src={comp3} alt="share-button" />
            </div>
          </div>
          <div className="partation-line"></div>
          

          <div className="body">
            <p>
               {bcontent}
                  </p>
          </div>

          <div className="partation-line"></div>
          <div className="share-post">
            <p style={{"fontSize": "1.3rem"}}>Share Post</p>
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
              <div className="comment-box">
                <textarea className="leave-comment" placeholder="Write a comment" />
                <div className="commentbox-line"></div>
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
                </div>
              </div>

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
