import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const item = useSelector((state) => state.cart);

  return (
    <>
      <div className="nav py-4 bg-blue-300 flex justify-between shadow-lg font-seminold px-10 sticky top-0">
        <div className="font-bold">REDUX STORE </div>
        <div className=" flex justify-center gap-x-10">
          {" "}
          <Link to="/" className="font-semibold">
            HOME
          </Link>
          <Link to="/cart" className="font-semibold">
            CART
          </Link>
          <Link to="/about" className="font-semibold">
            ABOUT
          </Link>
          <span>Cart Items : {item.length}</span>
        </div>
      </div>
    </>
  );
}

export default Navbar;
