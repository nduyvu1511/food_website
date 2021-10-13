import React from "react"
import { Link } from "react-router-dom"
import AboutFeedBackItems from "./../components/about/AboutFeedBackItems"
import PageHeader from "./../components/pageHeader/PageHeader"
import img1 from "../assets/img/about/img1.jpg"
import img2 from "../assets/img/about/img2.jpg"
import img3 from "../assets/img/about/img3.jpg"
import img4 from "../assets/img/about/about-imager-5.png"
import img5 from "../assets/img/about/about-imager-6.png"
import img6 from "../assets/img/about/about-imager-7.png"
import chef1 from "../assets/img/about/chef1.jpg"
import chef2 from "../assets/img/about/chef2.jpg"
import chef3 from "../assets/img/about/chef3.jpg"
import avatar1 from "../assets/img/feedback/avatar-1.jpg"
import avatar2 from "../assets/img/feedback/avatar-2.jpg"
import avatar3 from "../assets/img/feedback/avatar-3.jpg"
import avatar4 from "../assets/img/feedback/avatar-4.jpg"
import AboutMeals from "./../components/about/AboutMeals"
import ChefItem from "../components/about/ChefItem"
import { Fade } from "react-awesome-reveal"
import Slider from "react-slick"
import { fade50px } from "../utils/animation"

const AboutPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }

  return (
    <section>
      <PageHeader title="About Us" />
      <section className="layout h-full">
        <section className="grid grid-cols-1 md:grid-cols-12 gap-14 py-16">
          <div className="col-span-1 md:col-span-5 text-center md:text-left">
            <p className="font-Norican-Font text-primaryColor text-3xl md:text-4xl font-semibold">
              Welcome!
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-6xl leading-9 lg:leading-12 font-bold mt-3">
              Best burger ideas & traditions from the whole world
            </h1>
            <div className="text-gray-500 font-normal mt-6 text-sm md:text-15">
              <p className="leading-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <p className="my-6 leading-6">
                Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat
                fermentum. Aliquam non tincidunt urna. Integer tincidunt nec
                nisl vitae ullamcorper. Proin sed ultrices erat.
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
              <Link to="/contact" className="btn-primary uppercase w-48">
                Contact now
              </Link>
            </div>
          </div>

          <div className="col-span-7 hidden md:block">
            <div className="grid grid-cols-7 gap-6">
              <div className="col-span-3 h-3/4 overflow-hidden transition-all duration-300 transform hover:-translate-y-1">
                <Fade
                  className="w-full h-full"
                  keyframes={fade50px}
                  duration={1200}
                  delay={200}
                  distance="50px"
                  direction="up"
                  triggerOnce
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={img1}
                    alt=""
                  />
                </Fade>
              </div>
              <div className="col-span-4">
                <div className="h-3/7 w-full overflow-hidden transition-all duration-300 transform hover:-translate-y-1">
                  <Fade
                    className="w-full h-full"
                    keyframes={fade50px}
                    duration={1200}
                    delay={400}
                    distance="50px"
                    direction="up"
                    triggerOnce
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={img2}
                      alt=""
                    />
                  </Fade>
                </div>
                <div className="w-3/4 h-4/7 mt-6 overflow-hidden transition-all duration-300 transform hover:-translate-y-1">
                  <Fade
                    keyframes={fade50px}
                    duration={1200}
                    delay={800}
                    distance="50px"
                    direction="up"
                    triggerOnce
                  >
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      src={img3}
                      alt=""
                    />
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="h-530 lg:h-screen-90 bg-banner-about-slide w-full  bg-no-repeat bg-center relative">
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black50"></div>
        <div className="absolute top-0 bottom-0 z-10 left-0 right-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-8 text-center">
            Make the thing Anything is Possible
          </h1>
          <p className="text-sm md:text-lg mb-10 text-center">
            Enjoy our luscious dishes wherever you want
          </p>
          <Link
            to="/contact"
            className="uppercase btn-primary font-bold px-10 text-black"
          >
            {" "}
            Order now
          </Link>
        </div>
      </section>

      <section className="layout py-20">
        <AboutMeals
          name="Chicken"
          desc="Quality is our #1 ingredient. That’s why our Chicken Wings,
          Chicken Bites and Grilled Chicken Topping are made from chickens
          raised without antibiotics and fed an all vegetable-grain diet,
          with no animal by-products. Plus, our Bites are made with 100%
          chicken breast meat."
          img={img4}
          reverse={false}
        />
        <br />
        <br />
        <AboutMeals
          name="Burger"
          desc="Some of the world’s best cheese is made close to home! All our deliciously melty Mozzarella is made with 100% Canadian milk. We’re proud to support Canadian dairy farmers."
          img={img5}
          reverse={true}
        />
        <br />
        <br />
        <AboutMeals
          name="Pizza Douch"
          desc="Quality is our #1 ingredient. That’s why our Chicken Wings, Chicken Bites and Grilled Chicken Topping are made from chickens raised without antibiotics and fed an all vegetable-grain diet, with no animal by-products. Plus, our Bites are made with 100% chicken breast meat."
          img={img6}
          reverse={false}
        />
      </section>

      <section className="bg-banner-about-slide bg-center bg-no-repeat bg-cover h-650 relative">
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black50"></div>
        <div className="absolute z-10 w-full px-3 md:px-10 lg:px-20 h-full top-1/4 text-white overflow-hidden">
          <Slider {...settings}>
            <div className="">
              <AboutFeedBackItems
                stars={4.2}
                avatar={avatar1}
                name="Nina"
                desc={` "I am completely blown away. I would also like to say thank
                    you to all your staff. It's really wonderful."`}
                job="CEO, Apple"
              />
            </div>
            <div className="">
              <AboutFeedBackItems
                stars={4}
                avatar={avatar2}
                name="Clara"
                desc={`  "I would be lost without restaurant. I would like to personally thank you for your outstanding product."`}
                job="Manager"
              />
            </div>
            <div className="">
              <AboutFeedBackItems
                stars={4.5}
                avatar={avatar3}
                name="John Doe"
                desc={`  "Without food, we would have gone bankrupt by now. Thanks food! The service was excellent."`}
                job="Designer"
              />
            </div>
            <div className="">
              <AboutFeedBackItems
                stars={5}
                avatar={avatar4}
                name="Stephen Tinder"
                desc={`   “Forget the trendy pizza shops, This hidden spot makes the best New York-style pizza slice in naples”`}
                job="Developer"
              />
            </div>
          </Slider>
        </div>
      </section>

      <section className="layout py-16">
        <div className="text-center">
          <Fade keyframes={fade50px} duration={500} delay={200} triggerOnce>
            <h5 className="text-2xl font-Norican-Font text-primaryColor">
              Always Quality
            </h5>
          </Fade>
          <Fade keyframes={fade50px} duration={500} delay={400} triggerOnce>
            <h1 className="text-3xl md:text-4xl font-bold mt-2">
              Our Talented Chefs
            </h1>
          </Fade>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-8">
          <ChefItem
            name="william smith"
            desc="Everything We Pizza, We Pizza With Love. Designer Fastfood."
            img={chef1}
            job="CHEF"
            delay={200}
          />
          <ChefItem
            name="John Doe"
            desc="Everything We Pizza, We Pizza With Love. Designer Fastfood."
            img={chef2}
            job="MANAGER"
            delay={400}
          />
          <ChefItem
            name="Bradd L."
            desc="Everything We Pizza, We Pizza With Love. Designer Fastfood."
            img={chef3}
            job="CHEF"
            delay={600}
          />
        </div>
      </section>
      <div className="bg-banner-about-l bg-center -mb-24 bg-no-repeat bg-cover h-530 relative">
        <div className="absolute z-10 top-0  left-0 right-0 bottom-0">
          <div className="w-full lg:w-3/5 h-full px-1 xl:px-0 flex items-center m-auto justify-center flex-col text-center">
            <Fade keyframes={fade50px} duration={500} delay={200} triggerOnce>
              <p className="font-Norican-Font font-semibold text-2xl md:text-3xl lg:text-4xl text-primaryColor ">
                We guarantee
              </p>
            </Fade>
            <Fade
              keyframes={fade50px}
              duration={500}
              delay={400}
              distance="50px"
              direction="up"
              triggerOnce
            >
              <p className="text-3xl md:text-5xl lg:text-6xl mt-4 font-bold">
                30 Minutes Delivery!
              </p>
            </Fade>

            <div className="text-gray-500 text-center font-normal w-full sm:w-1/2 lg:w-2/3 xl:w-1/2 leading-8 mt-4 mb-6 text-sm md:text-15">
              <Fade keyframes={fade50px} duration={500} delay={600} triggerOnce>
                <p className="">
                  If you’re having a meeting, working late at night and need an
                  extra push. Let us know and we will be there
                </p>
              </Fade>
            </div>
            <div className="flex justify-center mt-3 lg:mt-0">
              <Fade keyframes={fade50px} duration={500} delay={600} triggerOnce>
                <Link
                  to="/shop"
                  className="uppercase font-weight w-52 btn-primary"
                >
                  Make an order
                </Link>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
