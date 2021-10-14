import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import Footer from "./components/footer/Footer"
import MenuPage from "./pages/MenuPage"
import ShopPage from "./pages/ShopPage"
import CartPage from "./pages/CartPage"
import ProductDetail from "./pages/ProductDetail"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import UserPage from "./pages/UserPage"
import { ToastContainer } from "react-toastify"
import AboutPage from "./pages/AboutPage"
import WishListPage from "./pages/WishListPage"
import FaqPage from "./pages/FaqPage"
import ContactPage from "./pages/ContactPage"
import BlogPage from "./pages/BlogPage"
import ButtonScrollToTop from "./components/button/ButtonScrollToTop"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import {
  shortSuccessMsg,
  shortSuccessMsgTopCenter,
  shortWarningMsg,
} from "./utils/message"
import NavTop from "./components/header/NavTop"
import NavBottom from "./components/header/NavBottom"

function App() {
  const cartMessage = useSelector((state) => state.message.cartMessage)
  const wishListMessage = useSelector((state) => state.message.wishListMessage)
  const { isLoading } = useSelector((state) => state.cart.allCartItems)
  const { isLoading: wishListLoading } = useSelector((state) => state.wishList)

  useEffect(() => {
    if (cartMessage && isLoading === false) {
      if (cartMessage.type === "success") {
        if (cartMessage.position && cartMessage.position === "top-center") {
          shortSuccessMsgTopCenter(cartMessage.title)
        } else {
          shortSuccessMsg(cartMessage.title)
        }
      } else {
        shortWarningMsg(cartMessage.title)
      }
    }
  }, [isLoading, cartMessage])

  useEffect(() => {
    if (wishListMessage && wishListLoading === false) {
      if (wishListMessage.type === "success") {
        shortSuccessMsg(wishListMessage.title)
      } else {
        shortWarningMsg(wishListMessage.title)
      }
    }
  }, [wishListLoading, wishListMessage])

  return (
    <Router>
      <header>
        <NavTop />
        <NavBottom />
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/menu/:id" component={MenuPage} />
        <Route path="/menu" component={MenuPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/shop/:searchUrl" component={ShopPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/log-in" component={LoginPage} />
        <Route path="/sign-up" component={SignUpPage} />
        <Route path="/user" component={UserPage} />
        <Route path="/wish-list" component={WishListPage} />
        <Route path="/faq" component={FaqPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/blog" component={BlogPage} />
      </Switch>
      <Footer />
      <ToastContainer />
      <ButtonScrollToTop />
    </Router>
  )
}

export default App
