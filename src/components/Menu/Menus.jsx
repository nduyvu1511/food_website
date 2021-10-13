import React from "react"
import categories from "../../utils/menuItemsData"
import { MenuItem } from "./MenuItem"

const Menus = () => {
  return (
    <section className="py-16 px-2 lg:px-0">
      <div className="max-w-7xl w-full mx-auto mb-12">
        <ul className="flex w-full justify-between items-center flex-wrap">
          {categories.map((item, index) => (
            
              <MenuItem key={index} index={index + 1} category={item} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Menus
