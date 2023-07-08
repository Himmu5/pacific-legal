import "./CarouselCard.css";
import test0 from '../../assets/testimonials/0.png';
import test1 from '../../assets/testimonials/1.png';
import test2 from '../../assets/testimonials/2.png';
import test3 from '../../assets/testimonials/3.png';
import test4 from '../../assets/testimonials/4.png';
import test5 from '../../assets/testimonials/5.png';

const CarouselCard = (props) => {
    var testimonials = [
        {
          text: "“I have worked with Avi over the past few years. He is focused, determined, and works very hard to achieve results for his clients. Avi has great passion for law and will settle for nothing less than a realistic and successful outcome. I am very impressed and inspired by Avi,s work ethic and enthusiasm to always achieve the best. It is truly an asset to have Avi on your team. I strongly recommend him”.",
          url: test0,
        },
        {
          text: "Avi initially helped us with a start-up organization but subsequently has been retained by us as our Legal Counsel. The quality of work is exceptional, and the fees charged by him are very reasonable. He was able to finalize a major share purchase transaction within a short deadline and was very responsive. I am glad to have him on board.",
          url: test1,
        },
        {
          text: "Avi and his business associate Jonas are very knowledgeable and competent in Corporate & Trade law practice. In my particular case, not only did they take their time to understand my unique situation and need, but they were effective at outlining a good strategy and executing against it. Avi and Jonas are approachable and responsive, and they were successful for provide valuable trade related dispute and deal effectively with foreign corporations in Turkey and the USA. I would highly recommend their services.",
          url: test2,
        },
        {
          text: "I have worked with Avi over the past few years. He is focused, determined, and works very hard to achieve results for his clients. Avi has great passion for law and will settle for nothing less than a realistic and successful outcome. I am very impressed and inspired by Avi’s work ethic and enthusiasm to always achieve the best. It is truly an asset to have Avi on your team. I strongly recommend him.",
          url: test3,
        },
        {
          text: "The team at Pacific Legal is a very friendly, transparent, and responsive modern law firm. When we spoke to Avi, he just got us straight away. The supportive, personal, and proactive approach taken by Avi got our merger across the line, which could have dragged on for months. We would like to thank the Corporate Team for their expertise and robust approach. It made the merger of our regulated businesses a much more positive experience",
          url: test4,
        },
        {
          text: "We as a housing management company have enjoyed working with Avi. He is a very dedicated and hardworking lawyer. We can say with conviction that Avi is one of the best lawyers we dealt with so far.",
          url: test5,
        },
      ];
    
  return (
    <>
      {props.active === false ? (
        <div
          className="carousel-card-cont"
          id="cont"
          style={{ transform: "scale(0.7)" }}
        >
          <div className="carousel-text">
            <p>
             {testimonials[props.index]["text"]}
            </p>
          </div>
          <div>
            <img src={testimonials[props.index]["url"]} alt="" className="carousel-img" />
          </div>
        </div>
      ) : (
        <div
          className="carousel-card-cont"
          id="cont"
          style={{ transform: "scale(1)" }}
        >
          <div className="carousel-text">
            <p>
            {testimonials[props.index]["text"]}
            </p>
          </div>
          <div>
            <img src={testimonials[props.index]["url"]} alt="" className="carousel-img" />
          </div>
        </div>
      )}
    </>
  );
};

export default CarouselCard;
