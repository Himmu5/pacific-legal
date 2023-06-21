import './servicebody.css';
import Scards from "./Scards/Scards";
import Simage1 from '../assets/service1.png'; 
import Simage2 from '../assets/service2.png'; 
import Simage3 from '../assets/service3.png'; 
import Simage4 from '../assets/service4.png'; 
import Simage5 from '../assets/service5.png'; 
import Simage6 from '../assets/service6.png'; 



function ServiceBody(){
    return(
        <>
         <div className='s-container'>
            <div className='s-box'>
                <h1 className='s-head'>
                Business Law
                </h1>


                <p className='s-para'>
                The Business Law Group at Pacific Legal offers a complete range of corporate and commercial legal services delivered by a dynamic and experienced team. Corporate transactions 
                are a core feature of the modern commercial world; Pacific Legal regularly advises on a range of complex transactions, including mergers and acquisitions, equity and debt
                 capital markets offerings, joint ventures, project financings, and 
                infrastructure development, structured financings, private fund formation and investments, syndicated loans, debt restructurings, and bankruptcies, and privatizations.
                <br/>
                <br/>
                The versatility of our practice areas greatly benefits clients—banks, companies, private equity firms, public utilities, non-profits, and individuals. Because of evolving laws and regulations, 
                coupled with increased scrutiny into corporate governance and compensation practices, publicly traded corporations, privately held entities, and their executives and directors are facing a more
                complex environment than even a year ago.
                </p>
            </div>

            <div className='s-cardbox'>
            <Scards  title="Commencing a Business Entity" url={Simage1}/>
            <Scards title="General Corporate Advisory" url={Simage2}/>
            <Scards title="Purchase and Sale of Businesses" url={Simage3}/>
            </div>
            <div className='s-cardbox'>
            <Scards title="Commercial Contracts " url={Simage4} />
            <Scards title="Public Company Regulatory Compliance and Reporting " url={Simage5}/>
            <Scards title=" Corporate Immigration" url={Simage6}/>

            </div>
         </div>
        </>
    )
}

export default ServiceBody;