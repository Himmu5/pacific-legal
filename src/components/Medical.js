import "./Medical.css";
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
// import comp9 from "../assets/Vector1.png";

function MedicalBody() {
  return (
    <>
      <div className="Medical-body">
        <div className="b1">
          <img className="m-image" src={comp1} alt="MedicalBody-Image" />
        </div>

        <div className="b2">
          <div className="info-bar">
            <div className="profile-img-details">
              <img className="profile-image" src={comp2} alt="profile-image" />
              <div className="name-info">
                <div className="name">Avi Aporve Khanna</div>
                <div className="date-time">
                  May 10,2022{" "}
                  <img className="dot" src={comp4} alt="dot-image" /> 4 min
                </div>
              </div>
            </div>
            <div className="share-bt">
              <img className="share-button" src={comp3} alt="share-button" />
            </div>
          </div>
          <div className="partation-line"></div>
          <div className="body">
            <h2 className="heading">1.Introduction</h2>
            <p className="m-text">
              <ul>
                <li>
                  <p>
                    It is clear that the matter of malpractice is still the main
                    challenging issue for every single malpractice lawyer in
                    Turkey. Law contains binding rules that govern the rights
                    and responsibilities of medical staff, health workers,
                    medical companies and the people using medical facilities
                    and services. This article analyzes the meaning of medical
                    malpractice and the best legal ways of finalizing
                    malpractice disputes. Other healthcare issues are beyond the
                    scope of this article.
                  </p>
                </li>
                <li>
                  <p>
                    For our work and all legal services on the matter of
                    citizenship, please click our “Practice Areas”, titled
                    “Healthcare”.
                  </p>
                </li>
              </ul>
            </p>
          </div>
          <div className="partation-line"></div>
          <div className="share-post">
            <span>Share post</span>
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
              <h2>Leave a comment</h2>
              <div className="comment-box">
                <input type="text" placeholder="Write a comment"  />
                <div className="commentbox-line"></div>
                <div className="add-item-logo">
                <img className="add-item-image" src={comp9} id="smile" alt="add-item-image" />
                <img className="add-item-image" src={comp10} id="camera" alt="add-item-image" />
                <img className="add-item-image" src={comp11} id="videocamera" alt="add-item-image" />
                <img className="add-item-image" src={comp12} id="gif" alt="add-item-image" />
                </div>
              </div>

              <div className="btn-commentbox">
                <button className="btn-comment" id="publish-btn">Publish</button>
                <button className="btn-comment" id="cancel-btn">Cancel</button>
              </div>
            </div>
          </div>









        </div>
      </div>
    </>
  );
}

export default MedicalBody;
