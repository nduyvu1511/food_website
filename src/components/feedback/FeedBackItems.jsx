import React from "react";
import ReactStars from "react-rating-stars-component";
import quote from "../../assets/img/feedback/left-quote.png";

const FeedBackItems = ({ image, title, name, career, stars }) => {
  return (
    <div className="bg-white px-8 py-10 h-56 flex flex-col justify-between rounded-lg mx-0 md:mr-4 mb-6">
      <div className=" flex justify-between items-center">
        <div className="flex items-center">
          <div className="relative">
            <img className="rounded-full w-16 h-16" src={image} alt="" />
              <img src={quote} className="w-5 bottom-0 right-0 absolute" alt="" />
          </div>
          <div className="ml-3">
            <h3 className="text-base font-bold uppercase">{name}</h3>
            <p className="text-sm font-light">{career}</p>
          </div>
        </div>
        <div className="">
          <ReactStars
            edit={false}
            count={5}
            value={stars}
            isHalf={true}
            size={24}
            activeColor="#ffd700"
          />
        </div>
      </div>
      <div className="mt-6">
        <p className="line-clamp-3 text-sm font-light text-gray-500">{title}</p>
      </div>
    </div>
  );
};

export default FeedBackItems;
