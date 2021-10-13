import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import CategoryItem from "../components/categoryItem/CategoryItem"
import PageHeader from "../components/pageHeader/PageHeader"
import { fetchProductsByCategory } from "../features/productSlice"
import banner from "../assets/img/banner/bg1-h4.png"
import { Link } from "react-router-dom"
import ProductListItems from "../components/ProductItemsView/ProductListItems"
import Loading from "../components/loading/Loading"
import { Fade } from "react-awesome-reveal"
import { fade50px } from "../utils/animation"
import { banners, meals } from "../utils/menudata"

const MenuPage = () => {
  const { id } = useParams()
  const history = useHistory()
  const dispatch = useDispatch()
  const [currentId, setCurrentId] = useState(1)
  const [currentButtonId, setCurrentButtonId] = useState(0)
  console.log(id, currentId)
  const {
    data: { data: productsList },
    isLoading,
  } = useSelector((state) => state.product.productsByCategory)

  const handleClick = (currentId) => {
    history.push("/menu")
    setCurrentId(currentId)
    currentId > 0 &&
      dispatch(
        fetchProductsByCategory(
          `categories/${currentId}/foods/?page=1&_limit=8`
        )
      )
  }

  useEffect(() => {
    if (id) {
      setCurrentId(id)
      dispatch(
        fetchProductsByCategory(`categories/${id}/foods?page=1&_limit=8`)
      )
    } else {
      dispatch(fetchProductsByCategory(`categories/1/foods?page=1&_limit=8`))
    }
  }, [dispatch, id])

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section>
          <PageHeader title="Menu Restaurant" />

          <div className="mt-8">
            <div className="layout">
              <Fade keyframes={fade50px} duration={800} delay={200} triggerOnce>
                <div className="text-center my-8 mt-12 md:my-16">
                  <h1 className="text-3xl md:text-4xl font-bold">
                    Menus Of The Day
                  </h1>
                </div>
                <div className="my-16">
                  <CategoryItem
                    type="menuPage"
                    currentId={Number(id) || currentId}
                    onClick={handleClick}
                  />
                </div>
              </Fade>
              <div className="mt-10">
                <ul className=" grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7">
                  {productsList &&
                    productsList.length > 0 &&
                    productsList.map((product, index) => (
                      <ProductListItems
                        currentButtonId={currentButtonId}
                        setCurrentButtonId={(id) => setCurrentButtonId(id)}
                        sizeStar={15}
                        key={index}
                        type="menu"
                        product={product}
                      />
                    ))}
                </ul>
              </div>
            </div>
          </div>

          <section className="grid grid-cols-1 lg:grid-cols-2 mt-20">
            <div className="bg-explore-bg bg-center bg-cover relative h-500 lg:h-768">
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-black50"></div>
              <div
                className="absolute px-4 md:px-10 z-10 top-0 left-0 right-0 bottom-0 flex flex-col
           justify-center items-center text-white"
              >
                <Fade
                  keyframes={fade50px}
                  duration={500}
                  delay={200}
                  triggerOnce
                >
                  <h1 className="text-3xl sm:text-5xl font-bold text-center">
                    Explore the new taste
                  </h1>
                  <h3 className="text-lg sm:text-xl my-8 font-normal">
                    Enjoy our luscious dishes wherever you want
                  </h3>
                  <Link to="/menu" className="btn-primary uppercase">
                    Order now
                  </Link>
                </Fade>
              </div>
            </div>
            <div className="bg-banner-right relative h-500 lg:h-768 bg-pageHeaderBg">
              <div className="absolute top-0 left-0 right-0 bottom-0 z-1">
                <img src={banner} alt="" className="w-full h-full" />
              </div>
              <div
                className="flex flex-col absolute top-0 right-0 left-0 bottom-0 items-center justify-center
           px-12 md:px-20 lg:px-28"
              >
                <ul className="w-full">
                  {meals.map((meal, index) => (
                    <li key={index} className="mb-5">
                      <Fade
                        keyframes={fade50px}
                        duration={500}
                        delay={200 * (index + 1)}
                        triggerOnce
                      >
                        <div
                          className="flex justify-between text-lg font-bold w-full py-2 border-b-2 border-gray-300
                border-dashed"
                        >
                          <p className="text-xl">{meal.title}</p>
                          <p className="text-primaryColor">${meal.price}</p>
                        </div>
                        <p className="text-sm mt-3 text-gray-500">
                          {meal.desc}
                        </p>
                      </Fade>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section
            className="layout my-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
      gap-8 px-3 xl:px-0"
          >
            {banners.map((banner, index) => (
              <Fade
                keyframes={fade50px}
                duration={500}
                delay={200 * (index + 1)}
                triggerOnce
              >
                <div
                  key={index}
                  className="flex items-center p-5 border-dashed border-4 rounded-lg
          hover:border-primaryColor group transition-all"
                >
                  <div className="p-2">{banner.icon}</div>
                  <div className="p-3 ml-1">
                    <h3 className="text-base font-bold">{banner.title}</h3>
                    <p className="text-13 font-normal text-gray-500 mt-2">
                      {banner.desc}
                    </p>
                  </div>
                </div>
              </Fade>
            ))}
          </section>
        </section>
      )}
    </>
  )
}

export default MenuPage
