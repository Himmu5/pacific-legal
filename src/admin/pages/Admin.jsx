import { useNavigate } from "react-router-dom";
import "./Admin.css";
import BlogCard from "../components/BlogCard/BlogCard";
import { useEffect, useState } from "react";
import { auth } from "../backend/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import BlogList from "../components/ReadCard"; 

function Admin() {

  const [blogId, setBlogId] = useState("");

  const getBlogIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setBlogId(id);
  };
  const navigate = useNavigate();
  const data =[{"name":"dummy1"},{"name":"dumm2"}];

  
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    // console.log(currentUser);
  }, [currentUser]);


  return currentUser==null?(
    <>
    <div className="noaccess">
    <h1>No Access Allowed</h1>
    <button onClick={()=>{navigate('/login')}}>Login to access admin panel</button>
    </div>
    </>
  ):
  (
    <>
      <div className="AdminPage">
        <div className="row1">
          <h1>Admin Panel - Pacific Legal</h1>
          <div className="subrow1-admin">
            <button
            onClick={()=>{
                signOut(auth).then(() => {
                    // navigate("/");
                    console.log("Signed out successfully")
                    
                }).catch((error) => {
                // An error happened.
                console.log(error)
                });
            }}
          >
            Logout
          </button>
          <button
            onClick={() => {
              navigate("/editblog");
            }}
          >
            Create New Blog
          </button>
          </div>
        </div>
        <div>
          <h4>Your Blogs</h4>
        </div>
        <div>
          {data.map(function (d, index) {
            // return <BlogCard title="xyz" date="23/3/23" status="hidden" key={index} />;
            return<BlogList getBlogId={getBlogIdHandler}/>;
          })}
          
        </div>
      </div>
    </>
  );
}

export default Admin;
