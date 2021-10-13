import React, { useEffect, useState } from "react";

const QuantityInput = ({ quantity = 1, updateCartItem, title }) => {
  const [inputsQuantity, setInputsQuantity] = useState(quantity);


  useEffect(() => {
    updateCartItem && updateCartItem(inputsQuantity);
  }, [inputsQuantity]);

  const updateQuantity = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setInputsQuantity(Number(e.target.value));
    }
  };

  const decreament = () => {
    if (inputsQuantity === 1) return;

    setInputsQuantity(inputsQuantity - 1);
  };

  return (
    <>
      {title === "productDetail" ? (
        <div className="flex items-center">
          <button
            onClick={decreament}
            className="bg-primaryColorOpacity rounded-full w-8 h-8 font-semibold border-t flex justify-center items-center "
          >
            -
          </button>
          <input
            className="w-10 h-8 text-center focus:outline-none text-15 font-bold rounded-md p-2"
            type="text"
            value={inputsQuantity}
            name=""
            onChange={updateQuantity}
            id=""
          />
          <button
            onClick={() => setInputsQuantity(inputsQuantity + 1)}
            className="bg-primaryColorOpacity rounded-full w-8 h-8 font-semibold flex justify-center items-center "
          >
            +
          </button>
        </div>
      ) : (
        <div className="relative overflow-hidden">
          <input
            className="w-16 h-10 focus:outline-none text-15 font-bold overflow-hidden border rounded-md p-2"
            type="text"
            value={inputsQuantity}
            name=""
            onChange={updateQuantity}
            id=""
          />
          <span className="text-xs font-bold flex flex-col absolute top-1/2 transform -translate-y-1/2 right-1px h-96% overflow-hidden rounded-r-md">
            <button
              onClick={() => setInputsQuantity(inputsQuantity + 1)}
              className="bg-primaryColorOpacity w-6 h-1/2 flex justify-center items-center "
            >
              +
            </button>
            <button
              onClick={decreament}
              className="bg-primaryColorOpacity w-6 h-1/2 border-t flex justify-center items-center "
            >
              -
            </button>
          </span>
        </div>
      )}
    </>
  );
};

export default QuantityInput;
