import React from "react"
import { FaHeart } from "react-icons/fa"
import { useHistory } from "react-router"
import getDate from "../../utils/getDate"
import { useDispatch } from "react-redux"
import { v4 as uuidv4 } from "uuid"
import { ImSpinner7 } from "react-icons/im"
import {
  fetchAddWishList,
  fetchDeleteWishList,
} from "../../features/wishListSlice"
import { addWishListMessage } from "../../features/messageSlice"

const ButtonAddTowishList = ({
  currentWishListId,
  setCurrentWishListId,
  currentUser,
  product,
  wishList,
  type,
}) => {
  const { data: wishListData = [], isLoading = false } = wishList
  const history = useHistory()
  const dispatch = useDispatch()

  const findWishItem = () => {
    if (!wishListData) return

    return wishListData.find(
      (item) => item.userId === currentUser.id && item.productId === product.id
    )
  }

  const handleAddtoWishList = () => {
    if (!currentUser) {
      history.push("/log-in")
      return
    }

    const newWishItem = {
      ...product,
      id: uuidv4(),
      productId: product.id,
      userId: currentUser.id,
      date: getDate(),
    }

    const wishItem = findWishItem()
    if (wishItem) {
      dispatch(fetchDeleteWishList(wishItem.id))
      dispatch(
        addWishListMessage({ title: "Deleted from wishlist!", type: "success" })
      )
    } else {
      dispatch(fetchAddWishList(newWishItem))
      dispatch(
        addWishListMessage({ title: "Added to wishlist!", type: "success" })
      )
    }
  }
  return (
    <>
      {type !== "productDetail" ? (
        <button
          onClick={() => {
            setCurrentWishListId && setCurrentWishListId(product.id)
            handleAddtoWishList()
          }}
          className="top-4 z-2 absolute right-3"
        >
          {product.id === currentWishListId && isLoading ? (
            <ImSpinner7 className="text-xl animate-spin text-black" />
          ) : (
            <FaHeart
              className={`text-xl hover:text-black ${
                currentUser &&
                wishListData &&
                wishListData.length > 0 &&
                findWishItem()
                  ? "text-red-500"
                  : "text-gray-300"
              }`}
            />
          )}
        </button>
      ) : (
        <button
          onClick={() => {
            setCurrentWishListId && setCurrentWishListId(product.id)
            handleAddtoWishList()
          }}
          className="top-4 rounded-lg px-4 py-4 bg-primaryColorOpacity z-2"
        >
          {product.id === currentWishListId && isLoading ? (
            <ImSpinner7 className="text-xl animate-spin text-black" />
          ) : (
            <FaHeart
              className={`text-lg hover:text-black ${
                currentUser &&
                wishListData &&
                wishListData.length > 0 &&
                findWishItem()
                  ? "text-red-500"
                  : "text-gray-400"
              }`}
            />
          )}
        </button>
      )}
    </>
  )
}

export default ButtonAddTowishList
