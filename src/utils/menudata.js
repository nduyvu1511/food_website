import { AiOutlineFieldTime } from "react-icons/ai"
import { FaPizzaSlice, FaShippingFast } from "react-icons/fa"

export const meals = [
  {
    title: "Pizza Hut",
    desc: "Shrimp, Squid, Pineapple",
    price: 4.95,
  },
  {
    title: "Peperoni Pizza",
    desc: "Shrimp, Squid, Pineapple",
    price: 9.66,
  },
  {
    title: "Apricot Chicken",
    desc: "Shrimp, Squid, Pineapple",
    price: 6.99,
  },
  {
    title: "Summer Pizza",
    desc: "Shrimp, Squid, Pineapple",
    price: 7.95,
  },
]

export const banners = [
  {
    title: "Free Shipping",
    desc: "Sign up for updates and get free shipping",
    icon: (
      <FaShippingFast
        className="text-6xl text-primaryColor container transition-all duration-300 transform 
            group-hover:scale-110"
      />
    ),
  },
  {
    title: "30 Minutes Delivery",
    desc: "Everything you order will quickly delivered to your door.",
    icon: (
      <AiOutlineFieldTime
        className="text-6xl text-primaryColor container transition-all duration-300 transform 
            group-hover:scale-110"
      />
    ),
  },
  {
    title: "Best Quality Guarantee",
    desc: "Poco is an international chain of family restaurants.",
    icon: (
      <FaPizzaSlice
        className="text-6xl text-primaryColor container transition-all duration-300 transform 
            group-hover:scale-110"
      />
    ),
  },
]
