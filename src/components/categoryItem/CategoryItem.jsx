import React from "react"
import categories from "../../utils/data"

const CategoryItem = ({ currentId, onClick, type }) => {
  const handleClick = (id) => {
    onClick && onClick(id)
  }
  return (
    <ul className="flex items-center justify-center flex-wrap">
      {categories.map((item) => (
        <li className="mb-4 lg:mb-0" key={item.id}>
          <button
            onClick={() => handleClick(item.id)}
            className={`${
              type === "menuPage" ? "py-4 rounded-full" : "py-3 rounded-3xl"
            } w-32 border border-black10 transition-all mx-2 uppercase font-bold text-sm hover:border-primaryColor cursor-pointer ${
              item.id === currentId && "bg-primaryColor"
            }`}
          >
            {item.title}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default CategoryItem
