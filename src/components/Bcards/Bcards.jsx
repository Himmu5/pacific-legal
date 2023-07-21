import "../Bcards/Bcards.css";
import { Link, useNavigate } from "react-router-dom";
import blogauth from "../../assets/blogauth.png";

function Bcards(props) {
  const url = props.url;
  // console.log("URL : ", url);
  const title = props.title;
  const authImage = props.authImage;
  const authName = props.authName;
  const detail = props.detail;
  const id = props.id;
  const navigate = useNavigate();
  return (
    <>
      <div className="bcardbox">
        <div>
          <img src={url} style={{ height: "250px", width: "100%" }} alt="" />
        </div>
        <h3 className="bcardtitle">
          <Link to={"/blogs/"+id}> {title} </Link>
        </h3>
        <div className="bd-box">
          <img className="bcardauthor" src={blogauth} />
          <div className="bnt-box">
            <h4 className="bcardname">{authName}</h4>
            <h7 className="bcarddetail">{detail} </h7>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bcards;
