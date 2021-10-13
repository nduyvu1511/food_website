import React from "react";
import bg1 from "../../assets/img/content/h1_banner1-2.png";
import img1 from "../../assets/img/content/h1_banner1-1.png";
import bg2 from "../../assets/img/content/h1_banner2-1.png";
import img2 from "../../assets/img/content/h1_banner2-2.png";
import img3 from "../../assets/img/content/h1_banner3.png";
import { Link } from "react-router-dom";

const BannerContent = () => {
  return (
    <section className="bg-contentBanner py-20">
      <div className="max-w-7xl w-full px-5 lg:px-2 xl:px-0 mx-auto">
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-8">
          <li className="bg-white px-4 sm:px-8 py-6 group rounded-4">
            <div className="flex justify-between group">
              <div className="flex flex-col justify-between">
                <div className="text-2xl font-bold">
                  <h1 className="">Any day </h1>
                  <h1 className="">offers</h1>
                </div>
                <div className="uppercase text-xs font-light leading-5">
                  <p>new phenomenon</p>
                  <p>burger taste</p>
                </div>
                <div className="">
                  <p className="text-green font-bold text-base">$12.90</p>
                </div>
              </div>
              <div className="">
                <div className="relative">
                  <img src={bg1} className="transform transition duration-300 group-hover:scale-125" alt="" />
                  <div className="absolute top-1/2 transform -translate-y-1/2 -left-6">
                    <img src={img1} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          
          <li className="px-4 sm:px-8 py-6 group bg-green rounded-4">
            <div className="flex justify-between group">
              <div className="flex flex-col justify-between">
                <div className="text-2xl font-bold text-white">
                  <h1 className="">Other</h1>
                  <h1 className="">flavors</h1>
                </div>
                <div className="uppercase text-xs font-light leading-5 text-white">
                  <p>Save room</p>
                  <p>we made salats</p>
                </div>
                <div className="">
                  <p className="text-primaryColor font-bold text-base">$12.90</p>
                </div>
              </div>
              <div className="">
                <div className="relative">
                  <img src={bg2} className="transform transition duration-300 group-hover:scale-125" alt="" />
                  <div className="absolute top-1/2 transform -translate-y-1/2 -left-6">
                    <img src={img2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </li>
          
          <li className="bg-white px-4 sm:px-8 py-6 group rounded-4">
            <div className="flex justify-between group">
              <div className="flex flex-col justify-between">
                <div className="text-2xl font-bold">
                  <h1 className="">Find a Poco</h1>
                  <h1 className="">store</h1>
                  <h1 className="">near you</h1>
                </div>
                <div className="uppercase leading-5 text-primaryColor font-bold text-15">
                  <Link to='/contact'>Contact us</Link>
                </div>
              </div>
              <div className="">
                <div className="relative">
                  <img src={bg2} className="transform transition duration-300 group-hover:scale-125" alt="" />
                  <div className="absolute top-1/2 transform -translate-y-1/2 -left-6">
                    <img src={img3} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default BannerContent

