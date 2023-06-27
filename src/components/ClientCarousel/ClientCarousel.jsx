import { useState } from "react";
import CarouselCard from "./CarouselCard";
import "./ClientCarousel.css";
import left from '../../assets/left.png'
import right from '../../assets/right.png'

const ClientCarousel = () => {
    var testimonialslen = 6
function calculateNext(middle){
if(middle == testimonialslen - 1){
    return 0;
}
else{
    return middle+1;
}
}

function calculatePrevious(middle){

    if(middle==0){
        return testimonialslen - 1;
        
    }
    else{
        return middle-1;
    }
}

  const [middle, setMiddle] = useState(0);
  return (
    <>
      <div className="carousel-slider">
        {<div onClick={()=>setMiddle(calculatePrevious(middle))}>
            <CarouselCard active={false} index={calculatePrevious(middle)}/>
            <div className="arrows">
                
                <img src={right} alt="" srcset="" className="change-slide" onClick={()=>setMiddle(calculatePrevious(middle))}/>
            </div>    
        </div>
            }
        {<div>
            <CarouselCard active={true} index = {middle}/>
            <br></br>
       
        </div>
            
            }
        {
            <div onClick={()=>setMiddle(calculateNext(middle))}>
                <CarouselCard active={false} index={calculateNext(middle)}/>
                <div className="arrows2">
                <img src={left} alt="" srcset="" className="change-slide" onClick={()=>setMiddle(calculateNext(middle))}/>
            </div>
            </div>
        }
      </div>
    </>
  );
};

export default ClientCarousel;
