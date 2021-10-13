import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = ({ onSearch }) => {
  const [text, setText] = useState("");

    const handleClick = (e) => {
      e.preventDefault();
    onSearch && onSearch(text.trim());
  };
  return (
    <form onSubmit={handleClick} className="relative">
      <input
        type="text"
        placeholder="Search Products..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="bg-primaryColorOpacity px-6 py-5 w-full focus:outline-none text-sm rounded-md text-gray-500"
      />
      <button
        onClick={handleClick}
        className="absolute top-0 h-full w-8 right-0"
      >
        <FaSearch className="text-lg" />
      </button>
    </form>
  );
};

export default SearchInput;
