import React, { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import QuantityInput from "./../inputs/QuantityInput";

const CartPageItems = ({ cart, deleteCartItem, updateCartItem }) => {
  const [inputsQuantity, setInputsQuantity] = useState(cart.quantity);

  useEffect(() => {
    updateCartItem && updateCartItem({ id: cart.id, quantity: inputsQuantity });
  }, [inputsQuantity]);

  const handleClick = () => {
    deleteCartItem && deleteCartItem(cart.id);
  };

  return (
    <li className="border-b py-3 first:border-t-0 md:first:border-t">
      <div className="flex items-center flex-row">
        <div className="flex items-center w-1/3 md:w-4/12">
          <div className="mr-3 hidden md:block">
            <button onClick={handleClick}>
              <IoCloseCircleOutline className="text-xl text-gray-500" />
            </button>
          </div>
          <div className="md:mr-8 min-w-60">
            <Link
              className="flex items-center justify-center"
              to={`product/${cart.productId}`}
            >
              <img
                className="w-full md:w-8/12 h-auto"
                src={cart.image}
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center flex-wrap w-2/3 md:w-8/12 mt-3 md:mt-0">
          <div className="w-full md:w-5/12 lg:w-4/12 xl:w-5/12 py-3 lg:pr-3 border-b md:border-none flex items-center justify-between">
            <Link
              to={`product/${cart.productId}`}
              className="text-sm font-bold hover:text-primaryColor"
            >
              {cart.name}
            </Link>
            <button onClick={handleClick} className="block md:hidden">
              <IoCloseCircleOutline className="text-xl text-gray-500" />
            </button>
          </div>
          <div className="w-full flex flex-col md:flex-row items-center md:w-7/12 lg:w-8/12 xl:w-7/12">
            <div className="w-full flex justify-between py-3 border-b md:border-none md:w-1/3 font-bold items-center text-black text-15 ">
              <p className="text-xs uppercase font-medium block md:hidden mr-3 md:mr-0">
                Price:
              </p>
              <p className="w-auto md:w-4">${cart.price.toFixed(2)}</p>
            </div>
            <div className="w-full flex justify-between py-3 border-b md:border-none md:w-1/3 items-center">
              <p className="text-xs uppercase font-medium block md:hidden mr-3 md:mr-0">
                Quantity :
              </p>
              <QuantityInput
                quantity={cart.quantity}
                updateCartItem={(quantity) => setInputsQuantity(quantity)}
              />
            </div>
            <div className="w-full flex justify-between py-3 md:border-none md:w-1/3 items-center">
              <p className="text-xs uppercase font-medium block md:hidden mr-3 md:mr-0">
                Subtotal :
              </p>
              <p className="text-black font-bold text-15">
                ${(cart.quantity * cart.price).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartPageItems;
