import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import PageHeader from "../components/pageHeader/PageHeader"
import { fetchDeleteWishList, fetchWishList } from "../features/wishListSlice"
import CartEmpty from "../components/cart/CartEmpty"
import ButtonAddToCart from "../components/button/ButtonAddToCart"
import { deleteWishListMessage } from "../features/messageSlice"

const WishListPage = () => {
  const dispatch = useDispatch()
  const { data: wishList } = useSelector((state) => state.wishList)
  const currentUser = useSelector((state) => state.user.currentUser)

  useEffect(() => {
    dispatch(deleteWishListMessage())
    currentUser && dispatch(fetchWishList(currentUser.id))
  }, [currentUser, dispatch])

  return (
    <section>
      <PageHeader title="Wishlist" />
      {wishList && wishList.length === 0 ? (
        <CartEmpty title="Wishlist" />
      ) : (
        <div className="max-w-7xl w-full mx-auto px-5 xl:px-0 mt-16">
          {wishList.map((wishItem, index) => (
            <div
              key={wishItem.id}
              className={`grid grid-cols-12 hover:bg-gray-100 ${
                index % 2 !== 0 ? "bg-gray-100" : "bg-white"
              }`}
            >
              <div className="col-span-3 md:col-span-2 xl:col-span-1 border">
                <div className="p-3 flex items-center justify-center">
                  <Link to={`/product/${wishItem.productId}`}>
                    <img
                      className="w-20 h-20"
                      src={wishItem.images.image1}
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <div className="col-span-6 md:col-span-6 border-t border-b">
                <div className="p-3 text-gray-500 text-15 font-normal">
                  <Link
                    to={`/product/${wishItem.productId}`}
                    className="text-primaryColor font-bold"
                  >
                    {wishItem.name}
                  </Link>
                  <p className="my-1">
                    ${wishItem.prices.lastPrice.toFixed(2)}
                  </p>
                  <p>{`${wishItem.date.date}, ${wishItem.date.month}, ${wishItem.date.year}`}</p>
                </div>
              </div>
              <div className="col-span-3 md:col-span-4 xl:col-span-5 border">
                <div className="p-3">
                  <p className="text-gray-500 text-15 font-normal">In stock</p>
                  <ButtonAddToCart
                    deleteCartItem={() =>
                      dispatch(fetchDeleteWishList(wishItem.id))
                    }
                    type="wishListPage"
                    product={wishItem}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default WishListPage
