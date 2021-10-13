import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { addReview } from "../../features/ratingSlice";
import { FaClock } from "react-icons/fa";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import getDate from "../../utils/getDate";

const Rating = ({listReview}) => {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [stars, setStars] = useState(3);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "" || name === "" || email === "") return;
    
    const date = getDate()

    dispatch(
      addReview({
        name,
        email,
        review: text,
        stars: stars,
        time: {
          date: date.date,
          month: date.month,
          year: date.year,
        },
        avatar:
          "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=120&d=mm&r=g",
      })
    );
    setText("");
    setEmail("");
    setName("");
  };
  return (
    <section className="grid grid-cols-1 mt-4 lg:grid-cols-2 gap-8">
      <div className="">
        <ul>
          {listReview.map((item, index) => (
            <li key={index} className="my-8">
              <div className="flex">
                <div className="w-14 mr-3">
                  <img
                    className="w-full h-auto rounded-full"
                    src={item.avatar}
                    alt=""
                  />
                </div>
                <div className="flex-1">
                  <ReactStars
                    count={5}
                    size={16}
                    value={item.stars}
                    isHalf={true}
                    edit={false}
                    emptyIcon={<BsStar/>}
                    halfIcon={<BsStarHalf/>}
                    filledIcon={<BsStarFill/>}
                    activeColor="#ffd700"
                  />
                  <div className="flex flex-wrap flex-row items-baseline mt-2">
                    <p className="text-xl font-bold mr-4 flex items-center">
                      {item.name}
                    </p>
                    <small className="text-xs font-normal text-gray-500 flex items-center">
                      <FaClock className="mr-2 text-sm text-gray-500" />
                      {item.time.date +
                        ", " +
                        item.time.month +
                        " " +
                        item.time.year}
                    </small>
                  </div>
                  <div className="mt-2">
                    <p className="text-15 text-gray-500 font-normal leading-6">
                      {item.review}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="">
        <p className="text-gray-500 font-normal my-6 text-15">
          Your email address will not be published. Required fields are marked *
        </p>
        <div className="my-4">
          <p className="text-gray-900 font-normal text-15 mb-2">Your rating *</p>
          <ReactStars
            count={5}
            size={18}
            value={stars}
            isHalf={true}
            onChange={(stars) => setStars(stars)}
            edit={true}
            emptyIcon={<BsStar/>}
            halfIcon={<BsStarHalf/>}
            filledIcon={<BsStarFill/>}
            activeColor="#ffd700"
          />
          <form onSubmit={handleSubmit} className="my-4 mt-6">
            <div>
              <label
                className="text-gray-900 font-normal text-15 block mb-3"
                htmlFor="reviewForm"
              >
                Your review *
              </label>
              <textarea
                className="border focus:outline-none p-4 rounded-lg w-full"
                name="review"
                id="reviewForm"
                cols="30"
                rows="8"
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </div>
            <div className="flex mt-6 mb-4 flex-col md:flex-row">
              <div className="mr-0 mb-4 md:mb-0 md:mr-6 w-full md:w-1/2">
                <label
                  className="text-gray-900 font-normal text-15 inline-block mb-2"
                  htmlFor="nameInput"
                >
                  Name *
                </label>
                <input
                  className="border p-3 text-15 text-gray-900 rounded-md w-full outline-none"
                  id="nameInput"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="w-full md:w-1/2">
                <label
                  className="text-gray-900 font-normal text-15 inline-block mb-2"
                  htmlFor="emailInput"
                >
                  Email *
                </label>
                <input
                  className="border p-3 text-15 text-gray-900 rounded-md w-full outline-none"
                  id="emailInput"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-baseline my-4">
              <input type="checkbox" name="checkInput" id="checkInput" />
              <label
                htmlFor="checkInput"
                className="ml-3 text-gray-700 font-normal text-15"
              >
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>
            <div className="mt-6 mb-4">
              <button type="submit" className="btn-primary">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Rating;
