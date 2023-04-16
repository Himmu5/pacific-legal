import "./team.css";
import comp1 from "../assets/team1.png";

function TeamBody() {
  return (
    <>
      <div className="team-body">
        <div className="left-part">
          <div>
            <img className="t-image" src={comp1} alt="team-Image" />
          </div>
          <div className="contact-details">
          <p>416.688.5567   avi@pacificlegal.ca</p>
          </div>
        </div>

        <div className="right-part">
          <h2 className="t-head">Avi Khanna</h2>
          <h3 className="t-designation">
            Founder & Principal: Corporate & Securities Law
          </h3>
          <p className="t-text">
            Before founding Pacific Legal, Avi worked as a Corporate and
            Securities Lawyer at Owens Wright LLP, Canada’s top 5 boutique firm.
            His practice focuses on legal transactions related to general
            corporate and commercial law, mergers and acquisitions, corporate
            reorganizations, cybersecurity and data protection, corporate
            governance, venture capital, and private equity law. He has led
            frequent private placement transactions on behalf of publicly listed
            companies at TSX, TSXV, and CSE. Prior to being called to the
            Ontario bar, Avi acted as a Legal Consultant for a series of
            Canadian companies covering industries such as travel, real estate,
            and software tech, where he contributed substantially Read more
          </p>
        </div>
      </div>
    </>
  );
}

export default TeamBody;
