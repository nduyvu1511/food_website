import React from "react"
import ButtonAddToCart from "../button/ButtonAddToCart"
import ReactStars from "react-rating-stars-component"
import { Link } from "react-router-dom"
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs"

const ProductListItems = ({
  product,
  currentButtonId,
  setCurrentButtonId,
  type,
  sizeStar = 18,
}) => {
  const {
    id,
    name,
    category,
    rate,
    description,
    images: { image1: image },
    prices: { firstPrice, lastPrice },
  } = product

  return (
    <div className="border rounded-3xl p-2">
      <div
        className={`flex items-center ${
          type === "menu" && "flex-col sm:flex-col lg:flex-row"
        } ${
          type === "shop" && "flex-col sm:flex-row sm:h-300"
        } bg-primaryColorOpacity p-4 pr-4 rounded-3xl`}
      >
        <div
          className={`flex items-center justify-center ${
            type === "menu" || type === "shop"
              ? "w-1/2 md:h-1/2 lg:w-4/12 mr-4 mb-6 lg:mb-0"
              : "w-1/4 mr-4"
          }`}
        >
          <Link
            to={`/product/${id}`}
            className="w-full flex items-center justify-center"
          >
            <img className={`h-auto w-full`} src={image} alt="" />
          </Link>
        </div>
        <div className="flex h-full flex-1 justify-between w-full">
          <div className={`flex-1 flex flex-col justify-center`}>
            <Link
              to={`/product/${id}`}
              className={`font-bold hover:text-primaryColor ${
                type === "menu"
                  ? "mb-3 text-xl"
                  : type === "shop"
                  ? "mb-3 text-2xl"
                  : "text-base"
              }`}
            >
              {name}
            </Link>

            {type === "menu" || type === "shop" ? (
              <>
                <ReactStars
                  count={5}
                  value={rate}
                  edit={false}
                  isHalf={true}
                  size={sizeStar}
                  emptyIcon={<BsStar />}
                  halfIcon={<BsStarHalf />}
                  filledIcon={<BsStarFill />}
                  activeColor="#ffd700"
                />
                <p className="line-clamp-3 lg:line-clamp-4 xl:line-clamp-2 text-15 text-medium mt-3 text-gray-600 ">
                  {description}
                </p>
              </>
            ) : (
              <p className="text-13 text-gray-500 font-light my-1">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </p>
            )}
            <div
              className={`flex font-base font-bold ${
                type === "menu" || type === "shop" ? "mt-3" : "mt-1"
              }`}
            >
              {firstPrice && (
                <p className="mr-2 line-through opacity-40">
                  ${firstPrice.toFixed(2)}
                </p>
              )}
              <p className="text-primaryColor">${lastPrice.toFixed(2)}</p>
            </div>
          </div>
          {(type === "menu" || type === "shop" || type === "home") && (
            <div className="w-10 mt-auto ml-2">
              <ButtonAddToCart
                currentButtonId={currentButtonId}
                setCurrentButtonId={setCurrentButtonId}
                product={product}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductListItems
