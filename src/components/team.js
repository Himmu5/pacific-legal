import "./team.css";
import comp1 from "../assets/team1.png";
import comp2 from "../assets/team2.png";
import comp3 from "../assets/team3.png";


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
            and software tech, where he contributed substantially <b>Read More</b>
          </p>
        </div>

        
      </div>

      <div  id="team2" className="team-body">
        <div className="left-part">
          <div>
            <img className="t-image" src={comp2} alt="team-Image" />
          </div>
         
        </div>

        <div id ="text2"  className="right-part">
          <h2 className="t-head">Kangan Roda</h2>
          <h3 className="t-designation">
          Associate: India Practice
          </h3>
          <p className="t-text">
          Kangan is member of Pacific Legal, located in New Delhi, India. She specializes and heads an IP prosecution and litigation practice in India. She is an advocate registered with the Bar Council of India since 2014. The key areas of practice include Intellectual Property Rights - trade marks, copyright and designs. Kangan has represented eminent and acclaimed companies from sectors like Fast Moving Consumer Goods (FMCG) sector, Pharmaceuticals sector, Food & Beverages (F&B) sector, Information Technology sector, Banking sector and others.
he has gained a comprehensive understanding and deep knowledge of the industry requirements relating to the role intellectual  <b>Read More</b>
          </p>
        </div>

        
      </div>
      <div className="team-body">
        <div className="left-part">
          <div>
            <img className="t-image" src={comp3} alt="team-Image" />
          </div>
         
        </div>

        <div className="right-part">
          <h2 className="t-head">Munira Mughal</h2>
          <h3 className="t-designation">
           Law Clerk
          </h3>
          <p className="t-text">
          Munira has a background of 10+ years of cumulative working experience, including 7 years as an Executive Assistant to high profile directors in the petroleum and steel industries in the African market. She is highly proficient in office administration, and documentation. She is also studying to be a Paralegal in Ontario.Read more
          </p>
        </div>

        
      </div>
    </>
  );
}

export default TeamBody;
