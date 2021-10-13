import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchWishList } from "../../features/wishListSlice"
import ProductGridItems from "../ProductItemsView/ProductGridItems"

const ProductGridLayout = ({ products, type }) => {
  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.user.currentUser)
  const wishList = useSelector((state) => state.wishList)
  const [currentWishListId, setCurrentWishListId] = useState(0)
  const [currentButtonId, setCurrentButtonId] = useState(0)

  useEffect(() => {
    currentUser && dispatch(fetchWishList(currentUser.id))
  }, [currentUser, dispatch])

  return (
    <div
      className={`gap-5 xl:gap-8 grid ${
        type === "relatedProduct"
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          : type === "shopProduct"
          ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3"
          : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4"
      }`}
    >
      {products &&
        products.length > 0 &&
        products.map((product) => (
          <ProductGridItems
            setCurrentWishListId={(id) => setCurrentWishListId(id)}
            currentWishListId={currentWishListId}
            setCurrentButtonId={(id) => setCurrentButtonId(id)}
            key={product.id}
            wishList={wishList}
            currentUser={currentUser}
            product={product}
            currentButtonId={currentButtonId}
          />
        ))}
    </div>
  )
}

export default ProductGridLayout
