import React, { useEffect, useState } from "react"
import PageHeader from "../components/pageHeader/PageHeader"
import { useParams } from "react-router-dom"
import ReactStars from "react-rating-stars-component"
import {
  FaExpandAlt,
  FaFacebook,
  FaGooglePlus,
  FaLinkedin,
  FaPinterestP,
  FaRegEnvelope,
  FaTwitter,
} from "react-icons/fa"
import creditcard from "../assets/img/footer/footer_img1.png"
import QuantityInput from "../components/inputs/QuantityInput"
import ButtonAddToCart from "../components/button/ButtonAddToCart"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
  fetchProductDetail,
  fetchProductsDetailRelated,
  removeProductDetail,
} from "../features/productSlice"
import Desc from "../components/description/Desc"
import Rating from "../components/rating/Rating"
import Loading from "../components/loading/Loading"
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs"
import { fetchWishList } from "../features/wishListSlice"
import ButtonAddTowishList from "../components/button/ButtonAddToWishList"
import ProductGridLayout from "../components/product/ProductGridLayout"
import ZoomImage from "../components/ImageProduct/ZoomImage"
import ProductItemLoader from "./../components/loading/productItemLoader"

function ProductDetail() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)
  const [imgStatus, setImgStatus] = useState(false)
  const [productImg, setProductImg] = useState("")
  const [imagePosition, setImagePosition] = useState("50% 50%")
  const [reviewTab, setReviewTab] = useState(false)
  const [currentWishListId, setCurrentWishListId] = useState(0)
  const [imageZoom, setImageZoom] = useState(false)
  const [currentButtonId, setCurrentButtonId] = useState(0)

  const listReview = useSelector((state) => state.review)
  const { data: product, isLoading } = useSelector(
    (state) => state.product.productDetail
  )
  const currentUser = useSelector((state) => state.user.currentUser)
  const wishList = useSelector((state) => state.wishList)

  const { data: productsRelated } = useSelector(
    (state) => state.product.productDetailRelated
  )

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = ((e.pageX - left) / width) * 100
    const y = ((e.pageY - top) / height) * 100
    setImagePosition(`${x}% ${y}%`)
  }

  useEffect(() => {
    currentUser && dispatch(fetchWishList(currentUser.id))
  }, [currentUser, dispatch])

  useEffect(() => {
    dispatch(fetchProductDetail(id))

    return () => {
      dispatch(removeProductDetail())
    }
  }, [dispatch, id])

  useEffect(() => {
    product &&
      product.categoryId &&
      dispatch(
        fetchProductsDetailRelated(
          `categories/${product.categoryId}/foods?_limit=4`
        )
      )
  }, [dispatch, product])

  return (
    <section>
      <PageHeader title={product.name} type="productDetail" />
      <section className="mt-8 lg:mt-16 max-w-7xl w-full mx-auto px-5 md:px-5 xl:px-0">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ProductItemLoader />
            <ProductItemLoader />
          </div>
        ) : (
          Object.keys(product).length > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* image product */}
                <div className="">
                  <div className="rounded-3xl p-2 border">
                    <div className="flex w-full bg-center bg-no-repeat relative group justify-center items-center bg-primaryColorOpacity rounded-3xl">
                      {product.prices.firstPrice && (
                        <span className="py-3px px-2 absolute top-3 left-3 bg-black text-white text-13 font-bold rounded-3xl">
                          Sale!
                        </span>
                      )}
                      <button
                        onClick={() => setImageZoom(true)}
                        className="bg-white w-11 h-11 absolute top-3 right-3 rounded-full flex items-center justify-center"
                      >
                        <FaExpandAlt className="pointer-events-none" />
                      </button>
                      {/* Image zoom section */}
                      {imageZoom && (
                        <ZoomImage
                          setImageZoom={setImageZoom}
                          currentImage={productImg || product.images.image1}
                          images={[
                            product.images.image1,
                            product.images.image2,
                          ]}
                        />
                      )}

                      <figure
                        style={{
                          backgroundImage: `url(${
                            productImg || product.images.image1
                          })`,
                          backgroundPosition: imagePosition,
                        }}
                        className={`w-full h-full group bg-opacity-0 bg-no-repeat ${
                          imagePosition === "50% 50%" && "bg-contain"
                        }`}
                        onMouseMove={handleMouseMove}
                        onMouseOut={() => setImagePosition("50% 50%")}
                      >
                        <img
                          className="w-full h-auto pointer-events-none group-hover:opacity-0"
                          src={productImg || product.images.image1}
                          alt=""
                        />
                      </figure>
                      {/* )} */}
                    </div>
                  </div>
                  <div className="flex items-center mt-6">
                    <div
                      className={`border rounded-2xl p-1 ml-6 hover:opacity-100 transition-all cursor-pointer ${
                        !imgStatus ? "opacity-100" : "opacity-70"
                      }`}
                    >
                      <div className={`bg-primaryColorOpacity rounded-2xl`}>
                        <img
                          className="w-24 h-24 rounded-2xl"
                          onClick={() => {
                            setProductImg(product.images.image1)
                            setImgStatus(false)
                          }}
                          src={product.images.image1}
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className={`border rounded-2xl p-1 ml-6 hover:opacity-100 transition-all cursor-pointer ${
                        imgStatus ? "opacity-100" : "opacity-50"
                      }`}
                    >
                      <div className={`bg-primaryColorOpacity rounded-2xl`}>
                        <img
                          className="w-24 h-24 rounded-2xl"
                          onClick={() => {
                            setProductImg(product.images.image2)
                            setImgStatus(true)
                          }}
                          src={product.images.image2}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* desc */}
                <div className="">
                  <div className="">
                    <h1 className="text-5xl font-bold leading-12">
                      {product.name}
                    </h1>
                  </div>
                  <div className="flex items-center my-5">
                    <ReactStars
                      count={5}
                      size={16}
                      value={product.rate}
                      isHalf={true}
                      edit={false}
                      emptyIcon={<BsStar />}
                      halfIcon={<BsStarHalf />}
                      filledIcon={<BsStarFill />}
                      activeColor="#ffd700"
                    />
                    <p
                      onClick={() => {
                        setReviewTab(true)
                        window.scrollTo(0, 1050)
                      }}
                      className="ml-2 cursor-pointer hover:text-primaryColor hover:underline text-gray-500 text-sm"
                    >
                      ({listReview.length} customer reviews)
                    </p>
                  </div>
                  <div className="mb-4">
                    <p className="leading-7 text-gray-500 text-normal text-15">
                      {product.description}
                    </p>
                  </div>
                  <div className="mb-4 border-b py-2 flex items-baseline">
                    <p className="text-3xl font-bold text-primaryColor">
                      ${product.prices.lastPrice.toFixed(2)}
                    </p>

                    {product.prices.firstPrice && (
                      <p className="font-bold line-through opacity-60 text-xl ml-4">
                        ${product.prices.firstPrice}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center py-4 border-b">
                    <div className="mr-8">
                      <QuantityInput
                        title="productDetail"
                        updateCartItem={(quantity) => setQuantity(quantity)}
                      />
                    </div>
                    <div className="flex-1">
                      <ButtonAddToCart
                        quantity={quantity}
                        product={product}
                        currentButtonId={currentButtonId}
                        setCurrentButtonId={(id) => setCurrentButtonId(id)}
                        className="flex-shrink-0 w-full"
                        type="productDetail"
                      />
                    </div>
                    <div className="ml-4">
                      <ButtonAddTowishList
                        setCurrentWishListId={(id) => setCurrentWishListId(id)}
                        currentWishListId={currentWishListId}
                        key={product.id}
                        wishList={wishList}
                        currentUser={currentUser}
                        product={product}
                        type="productDetail"
                      />
                    </div>
                  </div>

                  <div className="py-6 border-b mb-4 text-xs font-normal text-gray-500">
                    <div className="flex items-center mb-4">
                      <p>Category: </p>
                      <Link
                        className="ml-1 hover:text-primaryColor hover:underline"
                        to="/menu"
                      >
                        {product.category}
                      </Link>
                    </div>
                    <div className="flex items-center">
                      <p>Share: </p>
                      <Link to="/" className="mx-2">
                        <FaFacebook />
                      </Link>
                      <Link to="/" className="mx-2">
                        <FaTwitter />
                      </Link>
                      <Link to="/" className="mx-2">
                        <FaLinkedin />
                      </Link>
                      <Link to="/" className="mx-2">
                        <FaGooglePlus />
                      </Link>
                      <Link to="/" className="mx-2">
                        <FaPinterestP />
                      </Link>
                      <Link to="/" className="mx-2">
                        <FaRegEnvelope />
                      </Link>
                    </div>
                  </div>

                  <div className="mb-8 py-6 border-b ml-8">
                    <ul className="text-gray-500 text-sm leading-7 list-disc">
                      <li>Free global shipping on all orders</li>
                      <li>30 days easy returns if you change your mind</li>
                      <li>Order before noon for same day dispatch</li>
                    </ul>
                  </div>

                  <div className="flex flex-col lg:flex-row items-start md:items-center">
                    <p className="text-15 font-bold mr-4 mb-4 lg:mb-0">
                      Guaranteed Safe Checkout
                    </p>
                    <img src={creditcard} alt="" />
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-9/12 mx-auto mt-10 lg:mt-20">
                <div className="flex flex-col sm:flex-row items-center justify-center mb-12">
                  <button
                    onClick={() => setReviewTab(false)}
                    className={`btn-primary text-xl font-bold mr-0 sm:mr-4 mb-4 sm:mb-0 hover:text-black ${
                      reviewTab
                        ? "bg-white hover:bg-primaryColor"
                        : "bg-primaryColor"
                    }`}
                  >
                    Description
                  </button>
                  <button
                    onClick={() => setReviewTab(true)}
                    className={`btn-primary text-xl font-bold hover:text-black ${
                      reviewTab
                        ? "bg-primaryColor"
                        : "bg-white hover:bg-primaryColor"
                    }`}
                  >
                    Reviews ({listReview.length})
                  </button>
                </div>
              </div>
              {reviewTab ? <Rating listReview={listReview} /> : <Desc />}
              <section className="mt-20 px-0 md:px-3">
                <div className="text-center mb-12">
                  <h1 className="text-2xl md:text-3xl uppercase font-bold">
                    Related Products
                  </h1>
                </div>
                <ProductGridLayout
                  type="productDetail"
                  products={productsRelated}
                />
              </section>
            </>
          )
        )}
      </section>
    </section>
  )
}

export default ProductDetail
