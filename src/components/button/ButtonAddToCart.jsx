import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { v4 as uuidv4 } from "uuid"
import shoppingCart from "../../assets/icon/shopping-cart.png"
import {
  fetchAddCartProducts,
  fetchEditQuantityCartProducts,
} from "../../features/cartSlice"
import { FaSpinner } from "react-icons/fa"
import { addCartMessage } from "../../features/messageSlice"

const ButtonAddToCart = ({
  quantity = 1,
  product,
  type,
  currentButtonId,
  setCurrentButtonId,
  deleteCartItem,
}) => {
  const history = useHistory()
  const currentUser = useSelector((state) => state.user.currentUser)
  const dispatch = useDispatch()
  const { data: carts, isLoading } = useSelector(
    (state) => state.cart.allCartItems
  )

  const handleAddToCart = () => {
    if (!currentUser) {
      history.push("/log-in")
      return
    }
    deleteCartItem && deleteCartItem()

    if (quantity <= 0) {
      dispatch(addCartMessage({ title: "Invalid quantity!", type: "warning" }))
      return
    }

    const newProduct = {
      id: uuidv4(),
      productId: type === "wishListPage" ? product.productId : product.id,
      name: product.name,
      userId: currentUser.id,
      quantity: quantity,
      image: product.images.image1,
      price: product.prices.lastPrice,
    }

    if (carts.length === 0) {
      dispatch(fetchAddCartProducts(newProduct))
      dispatch(addCartMessage({ title: "Added to cart", type: "success" }))
      return
    }

    const cartQuantity = carts.find(
      (item) =>
        item.productId === newProduct.productId &&
        item.userId === currentUser.id
    )
    if (cartQuantity) {
      dispatch(
        fetchEditQuantityCartProducts({
          id: cartQuantity.id,
          quantity: cartQuantity.quantity + quantity,
        })
      )
      dispatch(addCartMessage({ title: "Updated to cart", type: "success" }))
    } else {
      dispatch(fetchAddCartProducts(newProduct))
      dispatch(addCartMessage({ title: "Added to cart", type: "success" }))
    }
  }

  return (
    <>
      {type === "productDetail" ? (
        <button
          onClick={() => {
            setCurrentButtonId && setCurrentButtonId(product.id)
            handleAddToCart()
          }}
          className="btn-primary whitespace-nowrap w-full flex items-center hover:opacity-80 uppercase hover:text-black text-sm font-semibold transition-all"
        >
          {isLoading && product.id === currentButtonId ? (
            <FaSpinner className="animate-spin text-white text-xl" />
          ) : (
            <>
              <img className="w-5 mr-2" src={shoppingCart} alt="" />
              <span>Add To Cart</span>
            </>
          )}
        </button>
      ) : type === "wishListPage" ? (
        <button
          onClick={() => {
            setCurrentButtonId && setCurrentButtonId(product.id)
            handleAddToCart()
          }}
          className="uppercase text-15 font-bold mt-2"
        >
          Add to cart
        </button>
      ) : (
        <button
          onClick={() => {
            setCurrentButtonId && setCurrentButtonId(product.id)
            handleAddToCart()
          }}
          className="whitespace-nowrap w-10 h-10 group hover:bg-primaryColorHover transition-all rounded-2xl bg-primaryColor
          flex items-center justify-center"
        >
          {isLoading && product.id === currentButtonId ? (
            <FaSpinner className="animate-spin text-white text-xl" />
          ) : (
            <img className="w-5" src={shoppingCart} alt="" />
          )}
        </button>
      )}
    </>
  )
}

export default ButtonAddToCart
