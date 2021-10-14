import React from "react"
import { Fade } from "react-awesome-reveal"
import { Link } from "react-router-dom"
import pizza from "../../assets/img/banner/h1_pizza.png"
import tomatoes from "../../assets/img/banner/h1_tomato.png"
import pepper from "../../assets/img/banner/h2_pepper.png"
import mushrooms from "../../assets/img/banner/h2_shape-5.png"
import "../../index.css"
import { fade50px, fadeBottom } from "../../utils/animation"

const Banner = () => {
  return (
    <section className="h-full bg-bannerColor mt-70 lg:mt-120 relative">
      <div className="overflow-hidden relative py-10 px-8 lg:py-15 lg:px-10 xl:py-20">
        {/* Tomatoes */}
        <div className="absolute z-10 -top-24 left-1/2 md:left-1/4 transform flex justify-center">
          <Fade
            keyframes={fadeBottom}
            duration={1500}
            delay={700}
            triggerOnce
          >
            <img src={tomatoes} alt="" />
          </Fade>
        </div>

        <div className="absolute bottom-0 -right-20">
          <img className="w-36 h-40" src={mushrooms} alt="" />
        </div>

        <div className="absolute lg:top-0 right-0 bottom-0">
          <img className="" src={pepper} alt="" />
        </div>

        <div className="flex relative flex-col md:flex-row">
          <div className="flex-1 flex flex-col lg:pl-8 xl:pl-12 justify-center z-10 mb-8 md:mb-0 text-center md:text-left">
            <Fade
              keyframes={fade50px}
              duration={1000}
              delay={700}
              triggerOnce
            >
              <div className="">
                <h1 className="text-white text-5xl md:text-6xl lg:text-7xl text-shadow font-bold">
                  UNLIMITED
                </h1>
                <h1 className="text-5xl md:text-6xl lg:text-7xl text-shadow text-white font-bold">
                  MEDIUM <span className="text-primaryColor">PIZZAS</span>
                </h1>
              </div>
              <div className="mt-4">
                <h2 className="text-green text-2xl md:text-3xl font-bold text-sm-shadow">
                  Medium 2-topping* pizza
                </h2>
              </div>
              <div className="my-4">
                <p className="text-white text-base md:text-lg font-medium text-sm-shadow">
                  *Additional charge for premium toppings. Minimum of 2
                  required.
                </p>
              </div>
              <div className="flex mt-4 items-center flex-col md:flex-row justify-center md:justify-start">
                <button className="btn-primary">ORDER NOW</button>
                <h3 className="text-green text-sm-shadow text-4xl font-bold ml-0 mt-5 md:ml-8 relative">
                  $12.99
                  <p className="absolute -top-4 -right-16 text-lg text-gray-400">
                    $19.99
                  </p>
                </h3>
              </div>
            </Fade>
          </div>
          <div className="flex-1 mb-8 md:mb-0 z-20">
            <Fade
              keyframes={fade50px}
              duration={2000}
              delay={700}
              triggerOnce
            >
              <img src={pizza} alt="" />
            </Fade>
          </div>
        </div>
      </div>

      <Link
        to="/menu"
        className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 btn-primary"
      >
        MENUS
      </Link>
    </section>
  )
}

export default Banner
