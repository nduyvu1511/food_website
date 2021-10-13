import React from "react"
import { Link } from "react-router-dom"
import cartEmpty from "../../assets/img/cart/cart-empty.png"

const CartEmpty = ({ title }) => {
  return (
    <div className="mt-10 max-w-7xl flex flex-col items-center w-full mx-auto px-5 xl:px-0">
      <div className="w-full sm:w-1/3 md:w-1/4 text-center">
        <img className="w-full h-auto" src={cartEmpty} alt="" />
        <p className="text-lg mb-4 text-gray-500">
          Your {title} is currently empty
        </p>
        <Link to="/shop" className="btn-primary uppercase font-bold text-base">
          Return to shop
        </Link>
      </div>
    </div>
  )
}

export default CartEmpty
