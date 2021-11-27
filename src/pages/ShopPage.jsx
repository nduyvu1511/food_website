import React, { useEffect, useRef, useState } from "react"
import PageHeader from "../components/pageHeader/PageHeader"
import { BsFillGridFill } from "react-icons/bs"
import { FaThList } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { RiFilter2Line } from "react-icons/ri"
import {
  fetchshopProducts,
  fetchProductsByCategory,
  filterByPriceRange,
  searchProducts,
  sortProductAsc,
  sortProductDesc,
  fetchSearchProductByUrl,
  fetchShopProductsInit,
} from "../features/productSlice"
import SelectInput from "../components/inputs/SelectInput"
import CategoryShopItem from "../components/categoryItem/CategoryShopItem"
import Paginate from "../components/paginate/Paginate"
import SearchInput from "../components/inputs/SearchInput"
import RangeInput from "../components/inputs/RangeInput"
import { useHistory, useParams } from "react-router"
import ProductListItems from "../components/ProductItemsView/ProductListItems"
import ProductGridLayout from "./../components/product/ProductGridLayout"
import ProductItemLoader from "../components/loading/productItemLoader"

const ShopPage = () => {
  const { searchUrl } = useParams()
  const history = useHistory()
  const dispatch = useDispatch()

  const searchValue = useRef(null)
  const [view, setView] = useState(false)
  const [openCategoryMobile, setOpenCategoryMobile] = useState(false)
  const [currentPageIndex, setCurrentPageIndex] = useState(1)
  const [currentCategoryId, setCurrentCategoryId] = useState(null)
  const [currentButtonId, setCurrentButtonId] = useState(0)

  const initProducts = useSelector((state) => state.product.initProducts)

  const { data: shopProducts, isLoading } = useSelector(
    (state) => state.product.shopProducts
  )

  const handleSelectedItem = (data) => {
    if (data === "highPrice" || data === "lowPrice") {
      if (data === "highPrice") {
        dispatch(sortProductDesc("price"))
      } else {
        dispatch(sortProductAsc())
      }
    } else {
      dispatch(sortProductDesc(data))
    }
  }

  useEffect(() => {
    dispatch(fetchShopProductsInit("foods"))

    if (searchUrl) {
      dispatch(fetchSearchProductByUrl(searchUrl))
    } else {
      dispatch(fetchshopProducts("foods"))
    }

    searchValue.current = null
    setCurrentCategoryId(null)
  }, [searchUrl, dispatch])

  const handleFilterByCategory = (id) => {
    if (searchUrl) {
      history.push("/shop")
    }
    searchValue.current = null
    setCurrentPageIndex(1)
    setCurrentCategoryId(id)
    dispatch(fetchProductsByCategory(`categories/${id}/foods`))
  }

  const handleSearchProducts = (text) => {
    if (searchUrl) {
      history.push("/shop")
    }
    setOpenCategoryMobile(false)
    setCurrentPageIndex(1)
    currentCategoryId && setCurrentCategoryId(null)
    searchValue.current = text
    dispatch(searchProducts(text))
  }

  const handleFilterPriceByRanges = (low, high) => {
    setOpenCategoryMobile(false)
    if (currentCategoryId) {
      dispatch(filterByPriceRange({ low, high, type: "currentId" }))
    } else if (searchValue && searchValue.current) {
      dispatch(filterByPriceRange({ low, high, type: "currentSearch" }))
    } else if (searchUrl) {
      dispatch(filterByPriceRange({ low, high, type: "currentSearchUrl" }))
    } else {
      dispatch(filterByPriceRange({ low, high }))
    }
  }

  return (
    <section>
      <PageHeader searchValue={searchUrl || searchValue.current} title="Shop" />
      <div
        onClick={() => setOpenCategoryMobile(false)}
        className={`fixed top-0 left-0 right-0 bottom-0 bg-black50 z-999 transition-all duration-300
               ${
                 openCategoryMobile
                   ? "visible opacity-100"
                   : "opacity-0 invisible"
               }`}
      ></div>
      <section className="layout mt-20 grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-8">
        <div className="lg:col-span-2 xl:col-span-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <button
                onClick={() => setOpenCategoryMobile(true)}
                className="flex lg:hidden font-semibold text-xs uppercase mr-4"
              >
                Filter <RiFilter2Line className="ml-2" />
              </button>
              <p className="text-sm font-normal hidden md:block text-gray-500">
                {currentPageIndex &&
                  shopProducts &&
                  (shopProducts.length > 12
                    ? `Showing ${12 * currentPageIndex - 11}-${
                        12 * currentPageIndex > shopProducts.length
                          ? shopProducts.length
                          : 12 * currentPageIndex
                      } of
                  ${
                    shopProducts.length === 1
                      ? shopProducts.length + "result"
                      : shopProducts.length
                  } results
              
                  `
                    : shopProducts.length > 1
                    ? `Showing ${shopProducts.length} results`
                    : `${shopProducts.length} result`)}
                {(searchUrl ||
                  (searchValue && searchValue.current !== null)) && (
                  <span>
                    {" "}
                    for{" "}
                    <span className="text-black font-normal">
                      "{searchUrl || searchValue.current}"
                    </span>
                  </span>
                )}
              </p>
            </div>
            <div className="flex items-center">
              <div className="hidden sm:flex">
                <button
                  onClick={() => setView(false)}
                  className={`mr-3 text-black ${
                    !view ? "opacity-100" : " opacity-50"
                  }`}
                >
                  <BsFillGridFill />
                </button>
                <button
                  onClick={() => setView(true)}
                  className={`text-black ${
                    view ? "opacity-100" : "opacity-50"
                  }`}
                >
                  <FaThList />
                </button>
              </div>

              <div className="ml-4">
                <SelectInput selectedItem={handleSelectedItem} />
              </div>
            </div>
          </div>
          <>
            {!isLoading ? (
              shopProducts && shopProducts.length === 0 ? (
                <div className="mt-8 p-4 bg-yellow-200 border-l-8 border-yellow-500 rounded-sm">
                  <p className="text-sm md:text-15 text-gray-500">
                    No products were found matching your selection.
                  </p>
                </div>
              ) : (
                <div className="mt-8">
                  {view === true ? (
                    <ul className="grid grid-cols-1 gap-8">
                      {shopProducts &&
                        shopProducts.length > 0 &&
                        shopProducts
                          .slice(
                            currentPageIndex * 12 - 12,
                            12 * currentPageIndex
                          )
                          .map((product) => (
                            <ProductListItems
                              currentButtonId={currentButtonId}
                              setCurrentButtonId={setCurrentButtonId}
                              key={product.id}
                              type="shop"
                              product={product}
                            />
                          ))}
                    </ul>
                  ) : (
                    <ProductGridLayout
                      type="shopProduct"
                      products={
                        shopProducts &&
                        shopProducts.length > 0 &&
                        shopProducts.slice(
                          currentPageIndex * 12 - 12,
                          12 * currentPageIndex
                        )
                      }
                    />
                  )}
                  <div className="flex justify-between mt-20">
                    {shopProducts && shopProducts.length > 12 && (
                      <Paginate
                        paginatePage={(index) => setCurrentPageIndex(index)}
                        page={currentPageIndex}
                        totalRows={shopProducts.length}
                        limit={12}
                      />
                    )}
                  </div>
                </div>
              )
            ) : (
              <section className="grid-cols-1 grid gap-5 xl:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 mt-10">
                <ProductItemLoader className="rounded-xl" />
                <ProductItemLoader className="rounded-xl" />
                <ProductItemLoader className="rounded-xl" />
                <ProductItemLoader className="rounded-xl" />
                <ProductItemLoader className="rounded-xl" />
                <ProductItemLoader className="rounded-xl" />
                <ProductItemLoader className="rounded-xl" />
              </section>
            )}
          </>
        </div>

        <div
          className={`fixed top-0 bottom-0 left-0 w-300 z-1000 transform transition-all 
            bg-white px-4 overflow-auto duration-300 ${
              openCategoryMobile ? " translate-x-0 " : " -translate-x-full "
            } lg:translate-x-0 lg:static lg:w-full lg:px-0 lg:z-0 lg:block lg:col-span-1`}
        >
          <div className="mt-10 lg:mt-0 py-2 px-2 border rounded-20">
            <div className="m-2 ml-4 mb-4">
              <h3 className="text-lg font-bold">Categories</h3>
            </div>
            <div className="bg-primaryColorOpacity rounded-2xl">
              <CategoryShopItem
                index={currentCategoryId}
                allProduct={initProducts}
                onClick={() => setOpenCategoryMobile(false)}
                filterByCategory={handleFilterByCategory}
              />
            </div>
          </div>
          <div className="mt-10">
            <SearchInput onSearch={handleSearchProducts} />
          </div>
          <div className="mt-10">
            <h1 className="font-bold text-lg mb-6">Filter by price</h1>
            <RangeInput onRange={handleFilterPriceByRanges} />
          </div>
          <div className="mt-10">
            <div className="mb-6">
              <h1 className="text-lg font-bold">Best Deals</h1>
            </div>
            <div className="grid grid-cols-1 mb-10 lg:mb-0 gap-y-4">
              {initProducts &&
                initProducts.length > 0 &&
                initProducts.map(
                  (product, index) =>
                    product.prices.firstPrice &&
                    index <= 10 && (
                      <ProductListItems
                        key={product.id}
                        type="deals"
                        product={product}
                      />
                    )
                )}
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default ShopPage
