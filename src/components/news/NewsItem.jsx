import React from "react"
import { Link } from "react-router-dom"

export const NewsItem = ({ img, title, desc, type }) => {
  return (
    <div className="rounded-lg overflow-hidden border group">
      <div className={`overflow-hidden ${type !== "blog" ? "h-64" : "lg:h-530"}`}>
        <Link to="/blog">
          <img
            className={`transform duration-500 w-full h-full object-cover transition-all  ${
              type !== "blog" && "group-hover:scale-110"
            }`}
            src={img}
            alt=""
          />
        </Link>
      </div>
      <div className="p-6">
        <div className="flex">
          <span className="ml-1 text-xs font-light text-gray-500 cursor-pointer hover:text-primaryColor">
            October 7, 2021 {"/ "}
          </span>
          <span className="ml-1 text-xs font-light text-gray-500">
            Post by{" "}
            <span className="text-black hover:text-primaryColor cursor-pointer">
              duyvu
            </span>
          </span>
        </div>

        <div className="my-2 mb-4">
          <Link
            to="/blog"
            className={`hover:text-primaryColor cursor-pointer ${
              type !== "blog"
                ? "text-lg font-bold line-clamp-2 h-14"
                : "text-2xl font-bold line-clamp-2"
            }`}
          >
            {title}
          </Link>
        </div>
        <div className={`${type === "blog" ? "mt-3 mb-6" : "mb-3"}`}>
          <p className="line-clamp-3 text-gray-500 text-sm leading-6">{desc}</p>
        </div>
        <div className="">
          <Link to="/blog" className="btn-primary w-40">
            READ MORE
          </Link>
        </div>
      </div>
    </div>
  )
}
