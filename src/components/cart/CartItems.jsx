import React from "react";
import { IoClose, IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const CartItems = ({ cart, deleteProduct, closeCartNav }) => {
  return (
    <li key={cart.id} className="border-b py-2 border-t">
      <div className="flex items-center">
        <div className="mr-3">
          <button onClick={() => deleteProduct && deleteProduct(cart.id)}>
            <IoCloseCircleOutline className="text-xl text-gray-500" />
          </button>
        </div>
        <div className="rounded-full bg-primaryColorOpacity flex items-center justify-center">
          <Link
            onClick={() => closeCartNav && closeCartNav()}
            className="flex items-center justify-center w-full h-full"
            to={`/product/${cart.productId}`}
          >
            <img className="w-16 h-16" src={cart.image} alt="" />
          </Link>
        </div>
        <div className="flex-1 ml-4">
          <Link
            to={`product/${cart.productId}`}
            onClick={() => closeCartNav && closeCartNav()}
            className="text-sm font-normal hover:text-primaryColor"
          >
            {cart.name}
          </Link>
          <div className=" mt-1 flex items-center">
            <p className="font-semibold text-black text-sm w-4">
              {cart.quantity}
            </p>
            <IoClose className="text-xs ml-1 mr-3" />
            <p className="text-base text-primaryColor font-semibold">
              ${cart.price}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItems;
