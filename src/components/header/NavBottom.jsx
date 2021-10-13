import React, { useEffect, useState } from "react"
import { Link, NavLink, useHistory } from "react-router-dom"
import navlinks from "../../utils/navlinks"
import bike from "../../assets/icon/motorbike.png"
import "../../index.css"
import { FiMenu, FiPhoneCall, FiX } from "react-icons/fi"
import logo from "../../assets/icon/logo.svg"
import { FaHeart, FaShoppingCart, FaStore, FaUser } from "react-icons/fa"
import { IoClose } from "react-icons/io5"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import {
  fetchCartProducts,
  fetchDeleteCartProduct,
} from "../../features/cartSlice"
import CartItems from "../cart/CartItems"
import { logout } from "../../features/userSlice"
import LoginForm from "../validations/LoginForm"
import { FaSearch } from "react-icons/fa"
import SearchInput from "../inputs/SearchInput"
import { fetchWishList } from "../../features/wishListSlice"
import { addCartMessage } from "../../features/messageSlice"

const getHeight = () =>
  document.body.scrollTop || document.documentElement.scrollTop

const NavBottom = () => {
  const history = useHistory()
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(getHeight())
  const [menu, setMenu] = useState(false)
  const [cart, setCart] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const currentUser = useSelector((state) => state.user.currentUser)

  const dispatch = useDispatch()
  const { data: carts } = useSelector((state) => state.cart.allCartItems)

  const { data: wishLists } = useSelector((state) => state.wishList)

  const handleDeleteCartProduct = (id) => {
    dispatch(
      addCartMessage({
        title: "Deleted from cart!",
        type: "success",
        position: "top-center",
      })
    )
    dispatch(fetchDeleteCartProduct(id))
  }

  useEffect(() => {
    if (currentUser) {
      dispatch(fetchCartProducts(currentUser.id))
      dispatch(fetchWishList(currentUser.id))
    }
  }, [currentUser, dispatch])

  const handleSearch = (searchUrl) => {
    history.push(`/shop/${searchUrl}`)
    setSearchOpen(false)
  }

  useEffect(() => {
    const heightListener = () => setHeight(getHeight())
    const windowWidth = () => setWidth(window.innerWidth)

    window.addEventListener("scroll", heightListener)
    window.addEventListener("resize", windowWidth)

    return () => {
      window.removeEventListener("resize", windowWidth)
      window.removeEventListener("scroll", heightListener)
    }
  }, [])

  return (
    <nav
      className={` flex fixed top-0 right-0 duration-300 left-0 items-center bg-white
      mt-0 z-999 transition-height h-70 ${
        height > 120
          ? "lg:h-70  shadow-header"
          : height > 40
          ? " mt-0 lg:h-120"
          : " lg:h-120 lg:mt-10"
      }`}
    >
      <div className="flex items-center justify-between layout">
        {/* Menu button Hamburger */}
        <span onClick={() => setMenu(true)} className="none lg:hidden">
          <FiMenu className="hover:text-primaryColor text-3xl font-bold" />
        </span>

        {/* Overlay */}
        <div
          onClick={() => setMenu(false)}
          className={`fixed transition-all top-0 bottom-0 left-0 right-0 z-999 bg-overlay 
            ${menu ? "visible opacity-100" : "invisible opacity-0"}`}
        ></div>

        <div
          onClick={() => setCart(false)}
          className={`fixed transition-all top-0 bottom-0 left-0 right-0 z-999 bg-overlay
             duration-300 ${
               cart ? "visible opacity-100" : "invisible opacity-0"
             }`}
        ></div>

        {/* logo */}
        <Link to="/" className="w-36">
          <img src={logo} alt="" />
        </Link>

        {/* Menu */}
        <div
          className={`flex-1 z-1000 items-center bg-black fixed w-300 top-0 left-0 bottom-0 transition-all
           transform
            ${
              menu === true ? " translate-x-0" : " -translate-x-full"
            } lg:w-auto lg:static lg:translate-x-0 lg:bg-white lg:ml-6 lg:z-0`}
        >
          <ul className="block lg:flex text-white lg:text-textColor">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setMenu(false)}
                className="block lg:hidden text-xl"
              >
                <FiX />
              </button>
            </div>
            {navlinks.map((item, index) => (
              <li
                key={index}
                className="group relative flex items-center mx-4 border-b border-white10 lg:border-b-0"
              >
                <NavLink
                  className="text-15 font-semibold lg:font-bold px-4 py-4 lg:p-0 lg:hover:text-primaryColor"
                  to={item.link}
                  exact={true}
                  onClick={() => setMenu(false)}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden xl:flex items-center">
          <span className="">
            <img className="w-11 h-11 mr-4" src={bike} alt="" />
          </span>
          <span className="mr-4 ">
            <p className="text-xs font-extralight ">Call and Order in</p>
            <p className="text-primaryColor font-bold text-xl">
              +1 718-904-4450
            </p>
          </span>
        </div>

        <Link to='/' className="block lg:hidden">
          <FiPhoneCall className="text-3xl" />
        </Link>

        {/* Nav Bottom on mobile */}
        <div
          className={`fixed bottom-0 left-0 right-0 border-t lg:border-t-0 z-50 lg:z-auto bg-white
          justify-between lg:p-0 lg:static flex items-center`}
        >
          {/* Search Input */}
          <div
            className={`absolute border-black10 lg:border-0 lg:shadow-lg transition-all duration-300 rounded-md -top-91% lg:top-101% z-50 w-screen bg-white items-center
            justify-center lg:w-500
              ${
                searchOpen
                  ? "right-0 opacity-100 visible"
                  : "-right-full opacity-0 invisible"
              }`}
          >
            <SearchInput onSearch={handleSearch} />
          </div>

          <div className="flex-1 py-3 flex flex-col items-center border-r lg:border-r-0">
            <Link
              to="/shop"
              className="w-full h-full lg:hidden mr-2 lg:hover:bg-primaryColor lg:border lg:rounded-full 
          flex flex-col lg:flex-row items-center justify-center"
            >
              <FaStore className="font-semibold text-xl sm:text-2xl lg:text-lg text-black" />
              <p className="lg:hidden text-xs mt-2 font-semibold">Shop</p>
            </Link>
          </div>

          <div className="flex-1 py-3 flex flex-col items-center border-r lg:border-r-0">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="mx-2 w-full h-full lg:w-11 lg:h-11 lg:hover:bg-primaryColor lg:border lg:rounded-full 
          flex flex-col lg:flex-row items-center justify-center relative"
            >
              <FaSearch className="font-semibold text-xl sm:text-2xl lg:text-lg text-black" />
              <p className="lg:hidden text-xs mt-2 font-semibold">Search</p>
            </button>
          </div>

          {width > 1024 ? (
            <div className="py-3 flex-1">
              <button
                className="lg:w-11 lg:h-11 mx-2 group relative lg:hover:bg-primaryColor lg:border lg:rounded-full 
            "
              >
                <Link
                  className="w-full h-full flex items-center justify-center"
                  to={`${currentUser ? "/user" : "/log-in"}`}
                >
                  <FaUser className="font-semibold pointer-events-none text-2xl lg:text-lg text-black" />
                </Link>

                {/* User status hover  */}
                {currentUser ? (
                  <div
                    className={`absolute cursor-auto top-130% right-0 shadow-md transition-all duration-500 invisible opacity-0
               lg:group-hover:visible lg:group-hover:opacity-100 bg-white p-5 rounded-sm`}
                  >
                    <div className="flex items-center z-50 pointer-events-none">
                      <img
                        className="w-10 h-auto rounded-full"
                        src="https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=120&d=mm&r=g"
                        alt="."
                      />
                      <p className="text-sm ml-2">{`${
                        currentUser.firstName.charAt(0).toUpperCase() +
                        currentUser.firstName.slice(1)
                      } ${
                        currentUser.lastName.charAt(0).toUpperCase() +
                        currentUser.lastName.slice(1)
                      }`}</p>
                    </div>
                    <div className="mt-5">
                      <Link
                        className="btn-primary whitespace-nowrap py-2 mb-2"
                        to="/user"
                      >
                        My Account
                      </Link>
                      <button
                        onClick={() => {
                          dispatch(logout())
                          if (history.location.pathName === "/user") {
                            history.push("/")
                          }
                        }}
                        className="btn-primary w-full whitespace-nowrap py-2"
                      >
                        Log out
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="absolute opacity-0 invisible transition-all top-130% right-0 shadow-md z-50 rounded-md lg:group-hover:opacity-100 lg:group-hover:visible">
                    <LoginForm type="loginNav" />
                  </div>
                )}
              </button>
            </div>
          ) : (
            <div className="flex-1 py-3 flex flex-col items-center border-r lg:border-r-0">
              <Link
                className="mx-2 w-full h-full group relative 
              flex flex-col items-center justify-center"
                to={`${currentUser ? "/user" : "/log-in"}`}
              >
                <FaUser className="font-semibold pointer-events-none text-xl sm:text-2xl text-black" />
                <p className="text-xs mt-2 font-semibold">Account</p>
              </Link>
            </div>
          )}
          <div className="flex-1 h-full flex flex-col items-center border-r lg:border-r-0">
            <Link
              className="w-full h-full mx-2 lg:w-11 lg:h-11 lg:rounded-full lg:py-0 flex justify-center"
              to="/wish-list"
            >
              <span
                className="w-11 h-11 lg:w-full lg:h-full lg:hover:bg-primaryColor lg:border lg:rounded-full 
          flex flex-col lg:flex-row items-center justify-center relative"
              >
                <FaHeart className="font-semibold text-xl sm:text-2xl lg:text-lg text-black" />
                <p className="lg:hidden text-xs mt-2 font-semibold">Wishlist</p>

                <span
                  className={`-top-1 lg:top-1 absolute shadow-md right-1 lg:right-1 ${
                    wishLists.length > 9 ? "px-5px" : "w-4 h-4"
                  } rounded-full bg-primaryColor text-black flex
              items-center justify-center text-11 font-bold`}
                >
                  {currentUser ? wishLists.length : 0}
                </span>
              </span>
            </Link>
          </div>

          {width < 1024 ? (
            <div className="flex-1 py-3 flex flex-col items-center">
              <Link
                to="/cart"
                className="flex flex-col ml-2 w-full h-full items-center justify-center"
              >
                <span className="relative">
                  <FaShoppingCart className="font-semibold text-xl sm:text-2xl lg:text-lg text-black" />
                  <span
                    className={`-top-1 lg:top-1 absolute shadow-md -right-1 lg:right-1 ${
                      carts.length > 9 ? "px-5px" : "w-4 h-4"
                    } rounded-full bg-primaryColor text-black flex
              items-center justify-center text-11 font-bold`}
                  >
                    {currentUser ? carts.length : 0}
                  </span>
                </span>
                <p className="lg:hidden text-xs mt-2 font-semibold">Cart</p>
              </Link>
            </div>
          ) : (
            <div className="flex-1 py-3 flex flex-col items-center">
              <button
                onClick={() => setCart(true)}
                className="lg:w-11 lg:h-11 ml-2 lg:hover:bg-primaryColor lg:border lg:rounded-full 
          flex items-center justify-center relative"
              >
                <FaShoppingCart className="font-semibold text-xl sm:text-2xl lg:text-lg text-black" />
                <span
                  className={`-top-1 lg:top-1 absolute shadow-md right-0 lg:right-1 ${
                    carts.length > 9 ? "px-5px" : "w-4 h-4"
                  } rounded-full bg-primaryColor text-black flex
              items-center justify-center text-11 font-bold`}
                >
                  {currentUser ? carts.length : 0}
                </span>
                <p className="lg:hidden text-xs mt-2 font-semibold">Cart</p>
              </button>
            </div>
          )}

          {/* Cart Navbar*/}
          <div
            className={`w-350 fixed top-0 right-0 bottom-0 bg-white p-4 z-1000 transform transition-all ${
              cart === true ? " translate-x-0" : " translate-x-full"
            }
            `}
          >
            <div className="flex justify-between items-center border-b py-6">
              <h1 className="uppercase font-bold text-xl ">shopping cart</h1>
              <button
                onClick={() => setCart(false)}
                className="text-sm font-semibold uppercase flex items-center"
              >
                close <IoClose className="ml-1 text-base" />
              </button>
            </div>
            {currentUser && carts && carts.length > 0 ? (
              <div className="flex flex-col h-full">
                <div className="h-6/10 w-full overflow-y-scroll">
                  <ul>
                    {carts &&
                      carts.length > 0 &&
                      carts.map((cart) => (
                        <CartItems
                          key={cart.id}
                          title="cart"
                          deleteProduct={handleDeleteCartProduct}
                          closeCartNav={() => setCart(false)}
                          cart={cart}
                        />
                      ))}
                  </ul>
                </div>
                <div className="h-4/10 w-full border-t">
                  <div className="flex justify-between text-lg font-bold uppercase my-6">
                    <h1>subtotal:</h1>
                    <p>
                      $
                      {cart && carts.length > 0
                        ? carts
                            .reduce((a, b) => a + b.price * b.quantity, 0)
                            .toFixed(2)
                        : 0}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <button className="btn-primary font-bold uppercase">
                      Checkout
                    </button>
                    <Link
                      to="/cart"
                      onClick={() => setCart(false)}
                      className="btn-primary bg-white font-bold hover:text-primaryColor hover:bg-gray-100 uppercase border border-black mt-4"
                    >
                      View Cart
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <h3 className="text-center mt-5 text-lg text-gray-500">
                No products in the cart.
              </h3>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBottom
