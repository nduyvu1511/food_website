import React from "react";
import { Link } from "react-router-dom";

import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";
import "../../index.css";
import dot from "../../assets/img/footer/shape_dot.png";
import creditcard from "../../assets/img/footer/footer_img1.png";
import logo from "../../assets/icon/logo.svg";

const Footer = () => {
  return (
    <footer className="mt-24 mb-69 lg:mb-0">
      <div className="bg-footerBg relative px-8 py-24 overflow-hidden">
        <div className="absolute top-0 left-1/4">
          <img src={dot} alt="" />
        </div>
        <div className="absolute top-0 left-0 tranform ">
          <img src={dot} alt="" />
        </div>
        <div className="absolute top-0 right-0">
          <img src={dot} alt="" />
        </div>
        <div className="flex justify-between items-center">
          <div className="flex-1 relative border-footer"></div>
          <div className="mx-4 transform scale-110">
            <img className="w-120" src={logo} alt="" />
          </div>
          <div className="flex-1 relative border-footer"></div>
        </div>
        <div className="max-w-7xl w-full mx-auto mt-10">
          <ul className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
            <li className="text-white flex flex-col items-center p-3">
              <h3 className="text-xl mb-4 font-semibold uppercase ">Address</h3>
              <div className="text-center leading-7 font-normal text-white50 text-sm">
                <p>570 8th Ave,</p>
                <p>New York, NY 10018</p>
                <p>United States</p>
              </div>
            </li>
            <li className="text-white flex flex-col items-center p-3">
              <h3 className="text-xl mb-4 font-semibold uppercase ">
                Book a table
              </h3>
              <div className="text-center leading-7 font-normal text-white50 text-sm">
                <p>Dogfood och Sliders foodtruck. </p>
                <p>Under Om oss kan ni läsa</p>
                <p className="text-xl font-bold text-primaryColor mt-4">
                  (850) 435-4155
                </p>
              </div>
            </li>
            <li className="text-white flex flex-col items-center p-3">
              <h3 className="text-xl mb-4 font-semibold uppercase ">
                opening hours
              </h3>
              <div className="text-center leading-7 font-normal text-white50 text-sm">
                <p>
                  Monday – Friday: <span className="font-bold">8am – 4pm</span>
                </p>
                <p>
                  Saturday: <span className="font-bold">9am – 5pm</span>
                </p>
                <div className="flex items-center mt-5">
                  <Link
                    className="mx-2 w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-primaryColor transition-all"
                    to="/"
                  >
                    <IoLogoFacebook className="text-black text-base" />
                  </Link>
                  <Link
                    className="mx-2 w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-primaryColor transition-all"
                    to="/"
                  >
                    <IoLogoTwitter className="text-black text-base" />
                  </Link>
                  <Link
                    className="mx-2 w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-primaryColor transition-all"
                    to="/"
                  >
                    <IoLogoYoutube className="text-black text-base" />
                  </Link>
                  <Link
                    className="mx-2 w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-primaryColor transition-all"
                    to="/"
                  >
                    <IoLogoLinkedin className="text-black text-base" />
                  </Link>
                </div>
              </div>
            </li>
            <li className="text-white flex flex-col items-center p-3">
              <h3 className="text-xl mb-4 font-semibold uppercase ">
                newsletter
              </h3>
              <div className="text-center leading-7 font-normal text-white50 text-sm">
                <p>Subscribe to the weekly newsletter for all </p>
                <p>the latest updates</p>
                <div className="flex items-center relative mt-3">
                  <input
                    type="email"
                    placeholder="Your Email..."
                    className="py-2 rounded-sm bg-transparent border border-white10 focus:outline-none px-2"
                  />
                  <Link
                    to="/"
                    className="absolute right-0 top-0 btn-primary uppercase rounded-sm px-4 h-full"
                  >
                    Subscribe
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-green">
        <div className="max-w-7xl w-full mx-auto py-8 flex items-center flex-col md:flex-row justify-between px-0 md:px-3 xl:px-0">
          <p className="text-white text-sm mb-6 md:mb-0">
            Copyright © 2021{" "}
            <Link to="/" className="text-primaryColor">
              pocofood
            </Link>
            . All Rights Reserved.
          </p>
          <img src={creditcard} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
