import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { fetchProductsByCategory } from "./../../features/productSlice"
import img1 from "../../assets/img/content/vector1-h3.png"
import img2 from "../../assets/img/content/vector2-h3.png"
import img3 from "../../assets/img/content/vector3-h3.png"
import CategoryItem from "../categoryItem/CategoryItem"
import ProductGridLayout from "./ProductGridLayout"

const PopularProduct = () => {
  const dispatch = useDispatch()
  const {
    data: { data: listProduct },
  } = useSelector((state) => state.product.productsByCategory)
  const [currentId, setCurrentId] = useState(1)
  const handleClick = (id) => {
    setCurrentId(id)
    id > 0 &&
      dispatch(
        fetchProductsByCategory(`categories/${id}/foods/?page=1&_limit=8`)
      )
  }

  useEffect(() => {
    dispatch(fetchProductsByCategory(`categories/1/foods?page=1&_limit=8`))
  }, [dispatch])

  return (
    <>
      {listProduct && listProduct.length > 0 && (
        <section>
          <div className="pt-20 pb-12 layout">
            <div className="text-center">
              <h1 className="text-40 font-bold">Popular dishes</h1>
              <div className="mt-8 mx-auto py-6">
                <CategoryItem currentId={currentId} onClick={handleClick} />
              </div>
            </div>

            {/* Products List */}
            <div className="relative">
              {/*img absolute  */}
              <div className="absolute top-0 -left-8%">
                <img src={img1} alt="" />
              </div>
              <div className="absolute bottom-0 right-0 lg:-right-8%">
                <img src={img3} alt="" />
              </div>
              <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2">
                <img src={img2} alt="" />
              </div>
              <ProductGridLayout products={listProduct} />
            </div>
          </div>
          <div className="flex justify-center mb-16">
            <Link to="/shop" className="btn-primary uppercase">
              All products
            </Link>
          </div>
        </section>
      )}
    </>
  )
}

export default PopularProduct
