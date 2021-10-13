import React from "react"
import ReactStars from "react-rating-stars-component"
import { Link } from "react-router-dom"
import ButtonAddToCart from "../button/ButtonAddToCart"
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs"
import ButtonAddTowishList from "../button/ButtonAddToWishList"

const ProductGridItems = ({
  setCurrentWishListId,
  currentWishListId,
  product,
  wishList,
  currentUser,
  setCurrentButtonId,
  currentButtonId,
}) => {
  const {
    id,
    name,
    description,
    rate,
    images: { image1: image },
    prices: { firstPrice, lastPrice },
  } = product
  return (
    <div
      className={`border rounded-3xl p-3 group bg-white z-10 transition-all`}
    >
      <div className="relative py-4">
        {firstPrice && (
          <span className="left-3 absolute top-4 z-2 py-1 px-3 bg-black font-bold text-sm rounded-3xl text-white">
            Sale!
          </span>
        )}

        <ButtonAddTowishList
          wishList={wishList}
          currentWishListId={currentWishListId}
          setCurrentWishListId={setCurrentWishListId}
          currentUser={currentUser}
          product={product}
        />

        <div
          className="w-full h-1/2 rounded-3xl absolute bottom-0 bg-primaryColorOpacity
         transition-all duration-300 group-hover:h-full group-hover:bg-primaryColor"
        ></div>

        <Link to={`/product/${id}`}>
          <div className="relative flex items-center justify-center py-4">
            <img
              className="w-full h-full transform transition-all group-hover:scale-115"
              src={image}
              alt=""
            />
          </div>
        </Link>
      </div>
      <div className="mt-4 flex flex-col pb-3 px-1">
        <div className="my-2">
          <ReactStars
            count={5}
            size={16}
            value={rate}
            isHalf={true}
            edit={false}
            emptyIcon={<BsStar />}
            halfIcon={<BsStarHalf />}
            filledIcon={<BsStarFill />}
            activeColor="#ffd700"
          />
        </div>
        <div className="">
          <Link
            className="text-lg font-bold hover:text-primaryColor line-clamp-1"
            to={`/product/${id}`}
          >
            {name}
          </Link>
          <p className="mt-2 font-normal text-gray-600 text-sm line-clamp-2 h-10">
            {description}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between mt-2">
          <div className="flex items-center">
            {firstPrice && (
              <p className="line-through opacity-50 font-bold text-base mr-4">
                £{firstPrice.toFixed(2)}
              </p>
            )}
            <p className="font-extrabold text-lg text-primaryColor">
              £{lastPrice.toFixed(2)}
            </p>
          </div>
          <div className="ml-auto mt-2 sm:mt-0">
            <ButtonAddToCart
              currentUser={currentUser}
              currentButtonId={currentButtonId}
              setCurrentButtonId={setCurrentButtonId}
              product={product}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductGridItems
