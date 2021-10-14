import React, { useEffect, useState } from "react"
import { FiChevronRight } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { fetchshopProducts } from "../../features/productSlice"
import banner from "../../assets/img/banner/h1_banner-4.jpg"
import ProductListItems from "../ProductItemsView/ProductListItems"

export const Recipes = () => {
  const [currentButtonId, setCurrentButtonId] = useState(0)
  const { data: products } = useSelector(
    (state) => state.product.recipesProducts
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchshopProducts("foods?_page=3&_limit=8"))
  }, [dispatch])

  return (
    <section className="layout mt-16">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-40">
          Top recipes
        </h1>
        <Link to="/shop" className="flex items-center">
          <p className="mr-2">See all</p>
          <button className="w-7 h-7 flex items-center justify-center rounded-md bg-green">
            <FiChevronRight className="text-white text-base" />
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
        <div className="w-full item1 col-span-2 mr-8">
          <ul className=" grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {products &&
              products.length > 0 &&
              products.map((product, index) => (
                <ProductListItems
                  key={index}
                  type="home"
                  currentButtonId={currentButtonId}
                  setCurrentButtonId={setCurrentButtonId}
                  product={product}
                />
              ))}
          </ul>
        </div>
        <div className="hidden item2 col-span-1 lg:block relative">
          <img src={banner} className="rounded-3xl h-full" alt="" />
          <div
            className="absolute top-10 left-1/2 transform -translate-x-1/2 
          text-white flex flex-col justify-center text-center"
          >
            <p className="text-5xl font-Norican-Font">Super Delicious</p>
            <h1 className="text-5xl xl:text-6xl my-3 font-bold text-red-500">
              CHICKEN
            </h1>
            <p className="uppercase text-xl font-bold">Call us now:</p>
            <p className="text-4xl font-bold text-red-500">1-800-555-333</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Recipes
