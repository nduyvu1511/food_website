import React, { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import CartPageItems from "../components/cart/CartPageItems"
import CartTotal from "../components/cart/CartTotal"
import PageHeader from "../components/pageHeader/PageHeader"
import {
  fetchDeleteCartProduct,
  fetchEditQuantityCartProducts,
} from "../features/cartSlice"
import CartEmpty from "../components/cart/CartEmpty"
import { FaSpinner } from "react-icons/fa"
import { addCartMessage } from "../features/messageSlice"

const CartPage = () => {
  const dispatch = useDispatch()
  const { data: carts, isLoading } = useSelector(
    (state) => state.cart.allCartItems
  )
  const currentUser = useSelector((state) => state.user.currentUser)
  const inputQuantity = useRef([])

  const handleDeleteCartItem = (id) => {
    dispatch(fetchDeleteCartProduct(id))
    dispatch(addCartMessage({ title: "Deleted from cart!", type: "success" }))
  }

  const handleUpdateCartItem = (data) => {
    if (data.quantity === 0) return

    if (inputQuantity.current.length === 0) {
      inputQuantity.current.push(data)
    }

    const index = inputQuantity.current.findIndex((item) => item.id === data.id)
    if (index !== -1) {
      inputQuantity.current[index].quantity = data.quantity
    } else {
      inputQuantity.current.push(data)
    }
  }

  const handleUpdateAllCartProducts = () => {
    const diffQuantity = inputQuantity.current.filter(
      ({ quantity: q1, id: id1 }) =>
        !carts.some(({ quantity: q2, id: id2 }) => q2 === q1 && id1 === id2)
    )

    if (diffQuantity.length > 0) {
      diffQuantity.forEach((item) => {
        if (item.quantity <= 0) {
          dispatch(
            addCartMessage({ title: "Invalid quantity!", type: "warning" })
          )
          return
        }
        dispatch(fetchEditQuantityCartProducts(item))
        dispatch(addCartMessage({ title: "Updated cart!", type: "success" }))
      })
    } else {
      dispatch(addCartMessage({ title: "Nothing to update!", type: "warning" }))
    }
  }

  return (
    <section>
      <PageHeader title="Cart" />
      {/* <Message /> */}
      {carts.length === 0 || !currentUser ? (
        <CartEmpty title="Cart" />
      ) : (
        <section className="mt-10 md:mt-20 max-w-7xl w-full mx-auto px-5 xl:px-0 flex flex-col lg:flex-row">
          <div className="w-full lg:w-8/12 mr-8">
            <div className="text-13 font-semibold hidden md:flex uppercase py-4">
              <div className="w-8/12 ml-auto flex justify-between">
                <p className="w-4/12 xl:w-5/12">Product</p>
                <div className="w-8/12 xl:w-7/12 flex items-center">
                  <p className="w-1/3">Price</p>
                  <p className="w-1/3">quantity</p>
                  <p className="w-1/3">subtotal</p>
                </div>
              </div>
            </div>
            <div className="">
              <ul className="w-full">
                {carts &&
                  carts.length > 0 &&
                  carts.map((cart) => (
                    <CartPageItems
                      key={cart.id}
                      deleteCartItem={handleDeleteCartItem}
                      updateCartItem={handleUpdateCartItem}
                      cart={cart}
                    />
                  ))}
              </ul>
              <div className="flex mt-8 flex-col-reverse md:flex-row">
                <div className="w-full md:w-1/2 flex items-center">
                  <input
                    className="w-1/2 py-4 text-sm focus:outline-none px-3 border rounded-md"
                    type="text"
                    placeholder="Coupon code"
                  />
                  <button className="btn-primary whitespace-nowrap uppercase ml-3 w-1/2">
                    Apply coupon
                  </button>
                </div>
                <div className="w-full md:w-1/4 ml-auto mb-6 md:mb-0">
                  <button
                    onClick={handleUpdateAllCartProducts}
                    className={`btn-primary uppercase ml-auto w-full whitespace-nowrap ${"opacity-100 hover:text-white cursor-pointer"}`}
                  >
                    {isLoading ? (
                      <FaSpinner className="animate-spin text-white text-xl" />
                    ) : (
                      <span>Update cart</span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-10 lg:mt-0 lg:w-4/12">
            <CartTotal
              subTotal={
                carts
                  .reduce((a, b) => a + b.price * b.quantity, 0)
                  .toFixed(2) || 0
              }
            />
          </div>
        </section>
      )}
    </section>
  )
}

export default CartPage
