import React, { useState } from "react";

const CartTotal = ({ subTotal }) => {
  const [check, setCheck] = useState(false);

  return (
    <div className="px-8 py-4 border-4">
      <h1 className="uppercase text-base font-bold py-2 border-b-2">
        Cart Totals
      </h1>
      <div className="flex items-center justify-between py-4 border-b-2 text-sm font-bold ">
        <p>Subtotal</p>
        <p>${subTotal}</p>
      </div>
      <div className="flex text-sm items-center py-4 border-b-2 font-bold">
        <p className="w-4/12 mr-3">Shipping</p>
        <div className="w-8/12 text-right font-normal text-gray-500">
          <p className="flex items-center justify-end">
            Flat rate: £15.00{" "}
            <input
              className="ml-3"
              value={check}
              onChange={() => setCheck(!check)}
              type="checkbox"
            />
          </p>
          <p>Shipping options will be updated during checkout. </p>
        </div>
      </div>
      <div className="py-8 pb-12 flex items-center justify-between text-sm font-bold">
        <p>Total</p>
        <p className="text-2xl text-primaryColor">
          ${check ? (Number(subTotal) + 15).toFixed(2) : subTotal}
        </p>
      </div>
      <div className="flex">
        <button className="btn-primary uppercase w-full font-bold">
          proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default CartTotal;
