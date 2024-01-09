import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="nav py-4 bg-blue-400 flex justify-center gap-x-10 shadow-lg font-seminold" >
        <Link to="/">HOME</Link>
        <Link to="/cart">CART</Link>
        <Link to="/about">ABOUT</Link>
        <span>Cart Items : 0</span>
      </div>
    </>
  );
}

export default Navbar;
