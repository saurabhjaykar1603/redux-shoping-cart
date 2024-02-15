import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
  const item = useSelector((state) => state.cart);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [defaultItem, setDefaltItem] = useState(0);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <nav className="bg-blue-400 p-4 sticky top-0">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <Link to="/" className="text-white text-lg font-semibold">
              Redux ToolKit
            </Link>
          </div>

          {/* Navbar links - hidden on smaller screens */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-black">
              Home
            </Link>
            <Link to="/about" className="text-black">
              About
            </Link>
            <Link to="/cart" className="text-black">
              Cart Item{" "}
              <span className="p-2  ml-2 text-bold rounded-full bg-black text-white">
                {item.length !== 0 ? item.length : defaultItem}
              </span>
            </Link>
          </div>

          {/* Mobile menu button - visible on smaller screens */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu - hidden on larger screens */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed top-0 left-0 w-full h-full bg-blue-500 bg-opacity-90">
            <div className="flex justify-end p-4">
              <button onClick={toggleMobileMenu} className="text-white">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center">
              <Link to="/" className="text-white py-2">
                Home
              </Link>
              <Link to="/about" className="text-white py-2">
                About
              </Link>
              <Link to="/cart" className="text-white ">
                Cart Item{" "}
                <span className="p-3  h-3 w-3  rounded-full bg-black text-white">
                  {" "}
                  {item.length}
                </span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
