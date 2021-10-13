import React from "react";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { keyframes } from '@emotion/react';
import { Fade } from "react-awesome-reveal";

const ChefItem = ({ img, name, desc, job, delay }) => {
  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
  return (
    <Fade
      keyframes={customAnimation}
      duration={500}
      delay={delay}
      distance="50px"
      direction="up"
      triggerOnce
    >
      <div className="flex flex-col rounded-md">
        <div className="relative rounded-t-md group overflow-hidden">
          <img
            className="w-full h-auto transition-all duration-500 transform group-hover:scale-110"
            src={img}
            alt=""
          />
        </div>
        <div className="relative pt-10 pb-8 border rounded-b-md">
          <button className="bg-primaryColor h-8 px-2 text-sm rounded-sm absolute left-1/2 transform -top-4 -translate-x-1/2">
            {job}
          </button>
          <div className="text-center" />
          <p className="text-lg uppercase font-bold text-center mb-6 hover:text-primaryColor">
            {name}
          </p>
          <p className="text-15 mb-5 font-normal text-gray-500 text-center">
            {desc}
          </p>
          <div className="flex items-center justify-center">
            <FaFacebook className="mx-2" />
            <FaTwitter className="mx-2" />
            <FaGoogle className="mx-2" />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default ChefItem;
