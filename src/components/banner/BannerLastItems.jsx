import React from "react"
import { Fade } from "react-awesome-reveal"
import { useHistory } from "react-router-dom"
import { fade50px, fadeLeft } from "../../utils/animation"

export const BannerLastItems = ({ image, name, price, color, type, id }) => {
  const history = useHistory()

  return (
    <div
      className={
        `relative bg-${color} h-500 p-10 overflow-hidden` +
        (color === "bannerYellow" && " md:col-span-2 lg:col-span-1")
      }
    >
      <div
        className={`absolute h-full w-full top-0 left-1/2 flex items-center justify-center`}
      >
        <Fade keyframes={fadeLeft} duration={500} delay={500} triggerOnce>
          <img src={image} className="w-full h-auto" alt="" />
        </Fade>
      </div>
      <div className="z-10 absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center p-10">
        <Fade keyframes={fade50px} duration={500} delay={500} triggerOnce>
          <div className="">
            <p className="font-Norican-Font font-bold text-white text-3xl md:text-5xl lg:text-5xl mb-2">
              {type}
            </p>
          </div>
          <div className="">
            <p
              className={
                "text-5xl md:text-6xl lg:text-7xl text-sm-shadow font-bold" +
                (color === "bannerYellow"
                  ? " text-bannerOrange"
                  : " text-primaryColor")
              }
            >
              {name}
            </p>
          </div>
          <div className="text-lg md:text-xl tracking-wide uppercase font-normal text-white my-4">
            <p>new phenomenon</p>
            <p>burger taste</p>
          </div>
          <p
            className={
              "text-3xl md:text-40 font-bold my-5" +
              (color === "bannerYellow" ? " text-black" : " text-primaryColor")
            }
          >
            ${price}
          </p>
          <div className="">
            <button
              onClick={() => history.push(`/menu/${id}`)}
              className="btn-primary bg-white text-black w-40 uppercase hover:bg-black"
            >
              order now
            </button>
          </div>
        </Fade>
      </div>
    </div>
  )
}
