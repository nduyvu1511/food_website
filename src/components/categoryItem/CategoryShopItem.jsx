import React from "react"
import categories from "../../utils/data"

const CategoryShopItem = ({ filterByCategory, allProduct, index, onClick }) => {
  const handleClick = (id) => {
    filterByCategory && filterByCategory(id)
  }
  return (
    <ul className="flex flex-col">
      {categories.map((item, i) => (
        <li
          onClick={() => onClick && onClick()}
          key={item.id}
          className={
            "px-4 rounded-2xl  border-gray-200 " +
            (index === item.id && "bg-primaryColor relative -top-1")
          }
        >
          <div
            className={`flex py-3 border-dashed justify-between items-center ${
              index === item.id || i === categories.length - 1
                ? "border-b-0"
                : "border-b-2"
            }`}
          >
            <div
              onClick={() => handleClick(item.id)}
              className={
                "flex items-center cursor-pointer " +
                (index !== item.id && " group")
              }
            >
              {item.icon}
              <p
                className={`ml-3 text-15 group-hover:text-primaryColor ${
                  item.id === index ? "text-black font-medium" : "text-gray-500 font-normal"
                }`}
              >
                {item.title}
              </p>
            </div>
            <p
              className={`text-sm font-medium text-normal ${
                item.id === index ? "text-black" : "text-gray-500"
              }`}
            >
              (
              {allProduct && allProduct.length > 0
                ? allProduct.filter((product) => product.categoryId === item.id)
                    .length
                : 0}
              )
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default CategoryShopItem
