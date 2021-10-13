import React from "react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import quote from "../../assets/img/feedback/left-quote.png";
import ReactStars from "react-rating-stars-component";

const AboutFeedBackItems = ({ avatar, stars, name, job, desc }) => {
  return (
    <div className="flex flex-col items-center w-full lg:w-8/12 m-auto h-full justify-center">
      <div className="relative">
        <img className="w-28 h-28 rounded-full" src={avatar} alt="" />
        <img className="absolute bottom-0 right-0 w-9" src={quote} alt="" />
      </div>
      <div className="mt-7 mb-5">
        <ReactStars
          count={5}
          size={22}
          value={stars}
          isHalf={true}
          edit={false}
          emptyIcon={<BsStar />}
          halfIcon={<BsStarHalf />}
          filledIcon={<BsStarFill />}
          activeColor="#ffd700"
        />
      </div>
      <div className="text-center">
        <p className="text-xl md:text-2xl font-medium leading-10 md:leading-10">{desc}</p>
        <p className="text-lg mt-4 uppercase font-bold">{name}</p>
        <p className="text-base mb-6">{job}</p>
      </div>
    </div>
  );
};

export default AboutFeedBackItems;
