import React, { useState } from "react"
import { FaAngleDown } from "react-icons/fa"

const SelectInput = ({ selectedItem }) => {
  const [selected, setSelected] = useState("")

  const handleOnChange = (e) => {
    setSelected(e.target.value)
    selectedItem && selectedItem(e.target.value)
  }

  return (
    <div className="relative">
      <span className="absolute top-1/2 transform -translate-y-1/2 z-50 right-4 pointer-events-none">
        <FaAngleDown />
      </span>
      <select
        style={{
          MozAppearance: "none",
          WebkitAppearance: "none",
          appearance: "none",
        }}
        onChange={handleOnChange}
        name="sort"
        value={selected}
        className="relative py-4 pl-2 lg:pl-4 lg:pr-10 bg-primaryColorOpacity text-15 font-normal text-gray-500"
      >
        <option value="name">Default sorting</option>
        <option value="rate">Sort by popularity</option>
        <option value="rate">Sort by average rating</option>
        <option value="rate">Sort by lastest</option>
        <option value="highPrice">Sort by price: high to low</option>
        <option value="lowPrice">Sort by price: low to high</option>
      </select>
    </div>
  )
}

export default SelectInput
