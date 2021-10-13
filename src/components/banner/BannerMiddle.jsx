import React from "react"
import banner from "../../assets/img/content/h1_img.png"
import cloudImg from "../../assets/img/content/h1_think.png"
import thunder1 from "../../assets/img/content/h1_thunder-1.png"
import thunder2 from "../../assets/img/content/h1_thunder-2.png"
import { Link } from "react-router-dom"
import { Fade } from "react-awesome-reveal"
import { fadeRight } from "../../utils/animation"

const BannerMiddle = () => {
  return (
    <section className="bg-banner-footer relative">
      <div className="">
        <img src={banner} alt="" />
      </div>
      <div className="w-full top-0 bottom-0 left-0 right-0 absolute flex justify-evenly items-center">
        <Fade keyframes={fadeRight} duration={1000} delay={200} triggerOnce>
          <div className="relative mr-20 hidden sm:block">
            <img src={cloudImg} className="w-full h-auto" alt="" />
            <div className="absolute top-1/8 left-1/4 ">
              <p className="font-Norican-Font font-bold">Get Up to</p>
              <p className="text-4xl font-bold text-primaryColor">50%</p>
              <p className="text-4xl font-bold">OFF</p>
            </div>
          </div>
        </Fade>
        <div className="flex flex-col ">
          <div className="">
            <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold font-Norican-Font text-sm-shadow">
              Hot Fresh
            </h3>
          </div>
          <div className="">
            <h1 className="text-5xl md:text-7xl lg:text-9xl text-primaryColor uppercase text-shadow font-bold my-4 sm:my-8 relative">
              <span>hotdog</span>
              <div className="hidden xl:flex absolute -top-1/2 left-2/3 items-center">
                <img src={thunder1} alt="" />
                <img src={thunder2} alt="" />
              </div>
            </h1>
          </div>
          <div className="">
            <Link
              to="/menu"
              className="btn-primary shadow-md bg-white uppercase font-bold w-44 hover:bg-primaryColor hover:text-white"
            >
              order now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerMiddle
