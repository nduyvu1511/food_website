import React, { useState } from "react";

const RangeInput = ({ onRange }) => {
  const [priceInputLow, setPriceInputLow] = useState('')
  const [priceInputHigh, setPriceInputHigh] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    onRange && onRange(priceInputLow, priceInputHigh);
  };
  const handleOnChangeLow = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setPriceInputLow(e.target.value);
    }
  };

  const handleOnChangeHigh = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setPriceInputHigh(e.target.value);
    }
  };
  return (
    <div className="">
      <div className="flex items-center">
        <input
          className="w-1/3 focus:outline-none py-2 px-4   border rounded-md bg-primaryColorOpacity"
          style={{ appearance: "textfield", MozAppearance: "textfield" }}
          type="text"
          value={priceInputLow}
          onChange={handleOnChangeLow}
          placeholder="From"
        />
        <span className="w-8 flex justify-center ">-</span>
        <input
          className="w-1/3 focus:outline-none py-2 px-4   border rounded-md bg-primaryColorOpacity"
          style={{ appearance: "textfield", MozAppearance: "textfield" }}
          type="text"
          onChange={handleOnChangeHigh}
          value={priceInputHigh}
          placeholder="To"
        />
      </div>
      <div className="mt-6">
        <button
          onClick={handleClick}
          className="text-xs uppercase font-semibold bg-primaryColor py-5px px-4  
      flex items-center justify-center rounded-lg"
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default RangeInput;
