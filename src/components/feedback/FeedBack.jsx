import React from "react";
import Slider from "react-slick";
import FeedBackItems from "./FeedBackItems";
import avatar1 from "../../assets/img/feedback/avatar-1.jpg";
import avatar2 from "../../assets/img/feedback/avatar-2.jpg";
import avatar3 from "../../assets/img/feedback/avatar-3.jpg";
import avatar4 from "../../assets/img/feedback/avatar-4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../index.css";

const FeedBack = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="mt-20 bg-primaryColorOpacity py-16 pb-24">
      <div className="layout">
        <div className="text-center">
          <h1 className="text-4xl font-bold">What your client says</h1>
        </div>
        <div className="mt-10 mx-0 md:-mr-4">
          <Slider {...settings}>
            <FeedBackItems
              title=' "I would be lost without restaurant. I would like to personally thank you for your outstanding product."'
              name="john doe"
              stars={3.8}
              image={avatar3}
              career="Design"
            />
            <FeedBackItems
              title="“I would be lost without restaurant. I would like to personally thank you for your outstanding product.“"
              name="rose"
              stars={5}
              image={avatar1}
              career="Design"
            />
            <FeedBackItems
              title="“Forget the trendy pizza shops, This hidden spot makes the best New York-style pizza slice in naples”"
              name="Clara"
              stars={3}
              image={avatar2}
              career="CEO apple"
            />
            <FeedBackItems
              title="“I would be lost without restaurant. I would like to personally thank you for your outstanding product.“"
              name="rose"
              stars={4.2}
              image={avatar1}
              career="Architect"
            />
            <FeedBackItems
              title=' "I am completely blown away. I would also like to say thank you to all your staff. Its really wonderful."'
              name="rose"
              stars={5}
              image={avatar4}
              career="Design"
            />
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default FeedBack;
