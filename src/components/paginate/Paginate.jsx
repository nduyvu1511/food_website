import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Paginate = ({ page, totalRows, limit, paginatePage }) => {

  const handleDecreamentPage = () => {
    paginatePage && paginatePage(page - 1)
  }

  const handleIncrementPage = () => {
    paginatePage && paginatePage(page + 1)
  }

  const handlePaginatePageByIndex = (index) => {
    paginatePage && paginatePage(index)
  }

  const arr = [];
  let index = 0;
  for (let i = totalRows; i > 0; i -= limit) {
    index++;
    arr.push(index);
  }
  return (
    <ul className="flex justify-center w-full">
      {page > 1 && (
        <button
          onClick={handleDecreamentPage}
          className="text-sm font-semibold uppercase flex items-center mr-4"
        >
          <FaAngleLeft /> <span>Previous</span>
        </button>
      )}
      {arr.map((item, index) => (
        <li key={index} className="mx-2">
          <button
            onClick={() => handlePaginatePageByIndex(item)}
            className={
              "w-7 h-7 text-xs transition-all font-semibold bg-transparent rounded-3xl flex items-center justify-center " +
              (page === item ? " bg-primaryColor text-black" : "text-gray-400")
            }
          >
            {item}
          </button>
        </li>
      ))}
      {page < arr.length && (
        <button
          onClick={handleIncrementPage}
          className="text-sm font-semibold uppercase flex items-center ml-4"
        >
          <span>Next</span>
          <FaAngleRight />
        </button>
      )}
    </ul>
  );
};

export default Paginate;
