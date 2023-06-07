import { useNavigate } from "react-router-dom";
import "./Admin.css";
import BlogCard from "../components/BlogCard/BlogCard";

function Admin() {
  const navigate = useNavigate();
  const data =[{"name":"dummy1"},{"name":"dumm2"}];
  return (
    <>
      <div className="AdminPage">
        <div className="row1">
          <h1>Admin Panel - Pacific Legal</h1>
          <button
            onClick={() => {
              navigate("/editblog");
            }}
          >
            Create New Blog
          </button>
        </div>
        <div>
          <h4>Posted Blogs</h4>
        </div>
        <div>
          {data.map(function (d, idx) {
            return <BlogCard title="xyz" date="23/3/23" status="hidden" />;
          })}
          
        </div>
      </div>
    </>
  );
}

export default Admin;
