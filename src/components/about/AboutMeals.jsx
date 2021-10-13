import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { fadeRight } from "../../utils/animation";

const AboutMeals = ({ img, desc, name, reverse = false }) => {

 

  return (
    <div
      className={`flex ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } flex-col-reverse`}
    >
      <div className="w-full text-center md:w-1/2 md:text-left mr-0 md:mr-4">
        <p className="font-Norican-Font text-2xl text-primaryColor font-normal">
          Our Quality
        </p>
        <h3 className="text-3xl lg:text-40 font-bold my-4">{name}</h3>
        <p className="leading-7 text-gray-600 text-sm lg:text-15">{desc}</p>
        <div className="flex justify-center md:justify-start ">
          <Link to="/shop" class="uppercase btn-primary w-52 mt-8">
            Order now
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 mb-5 md:mb-0">
        <Fade keyframes={fadeRight} triggerOnce distance={100} direction="left" delay={300} duration={1000}>
          <img src={img} alt="" />
        </Fade>
      </div>
    </div>
  );
};

export default AboutMeals;
