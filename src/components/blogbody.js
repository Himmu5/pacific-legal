import './blogbody.css';
import Bimage1 from '../assets/blog1.png';
import Bimage2 from '../assets/blog2.png';
import Bimage3 from '../assets/blog3.png';
import Bimage4 from '../assets/blog4.png';
import Bimage5 from '../assets/blog5.png';
import Bimage6 from '../assets/blog6.png';
import Bauthor from '../assets/blogauth.png';
import Bcards from './Bcards/Bcards';


function BlogBody(){
    return(
        <>
        <div className='b-container'>
            <h1 className='b-head'> All Post</h1>
            <div className='b-cards'>
           <Bcards url={Bimage1} title={"Short-Term Residence permit in Turkey"} authImage={Bauthor} authName = {"Avi Aporve Khanna"} detail={"May 10, 2022   4 min"} />
           <Bcards url={Bimage2} title={"Medical Malpractice Cases in Turkey"} authImage={Bauthor} authName = {"Avi Aporve Khanna"} detail={"May 10, 2022   4 min"} />
           <Bcards url={Bimage3} title={"Short-Term Rental VS Tenancies Act"} authImage={Bauthor} authName = {"Avi Aporve Khanna"} detail={"May 10, 2022   4 min"} />
           
            </div>
            <div className='b-cards'>
            <Bcards url={Bimage4} title={"The libor rigging Scandal Candle And Its Aftermath"} authImage={Bauthor} authName = {"Avi Aporve Khanna"} detail={"May 10, 2022   4 min"} />
            <Bcards url={Bimage5} title={"Boeing 737 Max and Airline Compensation: Both Grounded."} authImage={Bauthor} authName = {"Avi Aporve Khanna"} detail={"May 10, 2022   4 min"} />
            <Bcards url={Bimage6} title={"Seeking flight compensation? Better know the time limitation."} authImage={Bauthor} authName = {"Avi Aporve Khanna"} detail={"May 10, 2022   4 min"} />
                
            </div>
            <div className='b-cards'>
            <Bcards url={Bimage1} title={"Short-Term Residence permit in Turkey"} authImage={Bauthor} authName = {"Avi Aporve Khanna"} detail={"May 10, 2022   4 min"} />
            <Bcards url={Bimage2} title={"Medical Malpractice Cases in Turkey"} authImage={Bauthor} authName = {"Avi Aporve Khanna"} detail={"May 10, 2022   4 min"} />
            <Bcards url={Bimage3} title={"Short-Term Rental VS Tenancies Act"} authImage={Bauthor} authName = {"Avi Aporve Khanna"} detail={"May 10, 2022   4 min"} />
                
            </div>
             </div>
        
        </>
    )
}

export default BlogBody;