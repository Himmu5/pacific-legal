import '../teamcard/teamcard.css'

function teamcard(props){
    const name = name.url;
    const designation = designation.url;
    const textpara = textpara.url;
    

    return(
       <>
        <div className="left-part">
          {/* <img className="a-image" src={comp1} alt="About-Us-Image" /> */}
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
       </>
    )


}

export default Bcards;