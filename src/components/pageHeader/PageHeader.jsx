import React from "react"
import { Link, useLocation } from "react-router-dom"
import { FiChevronRight } from "react-icons/fi"
import categories from "../../utils/data"

function PageHeader({ title, type, searchValue = null }) {
  const { pathname } = useLocation()
  return (
    <>
      {type === "productDetail" ? (
        <section className="py-6 flex items-center bg-page-header bg-center bg-cover mt-70 lg:mt-120">
          <div className="flex items-center layout justify-start mt-0 text-left">
            <Link to="/" className="text-gray-500 text-sm">
              Home &nbsp;
            </Link>
            <FiChevronRight className="text-gray-500 text-xs" />
            &nbsp;
            <p className="text-sm">{title}</p>
          </div>
        </section>
      ) : (
        <section className="py-10 md:py-20 flex flex-col items-center bg-page-header bg-center bg-cover justify-center mt-70 lg:mt-120">
          <h1 className="text-black text-3xl md:text-5xl font-bold">
            {searchValue ? `Search Results: “${searchValue}”` : title}
          </h1>
          <div className="flex items-center mt-4">
            <Link to="/" className="text-gray-500 text-sm">
              Home
            </Link>
            &nbsp;
            <FiChevronRight className="text-gray-500 text-xs" />
            &nbsp;
            {pathname.slice(1).includes("/") ? (
              <p className="flex items-center text-gray-500 text-sm font-medium">
                <Link
                  to={`${pathname.startsWith("/menu/") ? "/menu" : "/shop"}`}
                >
                  {" "}
                  {pathname.charAt(1).toUpperCase() +
                    pathname.slice(2).split("/")[0]}
                </Link>
                &nbsp;
                <FiChevronRight className="text-gray-500 text-xs" />
                &nbsp;
                <span className="text-black">
                  {pathname.startsWith("/menu/")
                    ? categories.find(
                        (item) => item.id === Number(pathname.slice(2).split("/")[1])
                      ).title
                    : pathname.slice(2).split("/")[1]}
                </span>
              </p>
            ) : pathname.includes("-") ? (
              <p className="font-medium text-sm">
                {pathname.charAt(1).toUpperCase() +
                  pathname.slice(2).split("-")[0] +
                  pathname.slice(2).split("-")[1]}
              </p>
            ) : (
              <p className="font-medium text-sm">
                {pathname.charAt(1).toUpperCase() + pathname.slice(2)}
              </p>
            )}
          </div>
        </section>
      )}
    </>
  )
}

export default PageHeader
