import Areas from "../components/Areas/Areas";
import Hero from "../components/Hero/Hero";
import comp1 from '../assets/commercial-law.png';
import comp2 from '../assets/corporate-immigration.png';
import comp3 from '../assets/corporate-law.png';
import comp4 from '../assets/civil-and-criminal.png';
import comp5 from '../assets/intellectual-property.png'
import './Practices.css'
function Practices(){
    const india_content1 = "Recognized as an upcoming global financial hub, India ranks as a top-five financial center in the Asia Pacific region with a GDP of $3.29 trillion and serves as the regional headquarters for numerous multinationals. India's standing as a global leader in investment management, infrastructure financing, and structured products are reflected in our service offering to innovators in the financial services sector.";
    const india_content2 = " Pacific Legal has partnered with some of the brilliant legal minds in India and has built enduring relationships with some of the unique, most successful companies in the IP and finance, property and construction, energy and resources, and information technology sectors.";
    const na_content = "Our passionate attorneys bring a unique approach to every case. Today, we are overwhelmed with a confusing array of regulations, rules and requirements. See our areas of expertise and call us with your legal questions today.";
    return(
        <>
        <Hero title="Practices"/>
        <div className="NorthA">
        <div className="NorthAText">
            <h2>North America</h2>
        <p>{na_content}</p>
        </div>
        <div className="areas-tiles">
            <Areas title="Commercial Law" url={comp1}/>
            <Areas title="Corporate Immigration" url={comp2}/>
            <Areas title="Corporate Law" url={comp3}/>
        </div>
        </div>
        <div className="india">
            <h2>India</h2>
            <p>{india_content1}</p>
            <p>{india_content2}</p>
        </div>
        <div className="misc">
        <div className="areas-tiles">
            <Areas title="Intellectual Property Rights" url={comp4}/>
            <Areas title="Civil and Criminal Litigaton" url={comp5}/>
            <Areas title="Corporate Law" url={comp3}/>
        </div>
        </div>
        </>
    )


}

export default Practices;