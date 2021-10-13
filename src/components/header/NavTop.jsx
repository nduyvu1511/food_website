import React from "react";
import { BiMobileAlt } from "react-icons/bi"
import {
  IoLocationOutline,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoYoutube,
} from "react-icons/io5";

const NavTop = () => {
  return (
    <section className="bg-black h-10 items-center hidden lg:flex">
      <nav className="flex items-center justify-between text-white layout">
        <div className="flex items-center ">
          <div className="flex items-center">
            <BiMobileAlt className="text-white text-sm" />
            <p className="ml-3 text-sm font-light uppercase">call us: 0977066216</p>
          </div>
          <div className="flex ml-6 items-center">
            <IoLocationOutline className="text-white text-sm" />
            <p className="ml-3 text-sm font-light">71 Madison Ave</p>
          </div>
        </div>
        <div className="flex items-center">
          <a className="mx-2" href="/">
            <IoLogoFacebook className="text-white text-sm" />
          </a>
          <a className="mx-2" href="/">
            <IoLogoTwitter className="text-white text-sm" />
          </a>
          <a className="mx-2" href="/">
            <IoLogoYoutube className="text-white text-sm" />
          </a>
          <a className="mx-2" href="/">
            <IoLogoLinkedin className="text-white text-sm" />
          </a>
        </div>
      </nav>
    </section>
  );
};

export default NavTop;
