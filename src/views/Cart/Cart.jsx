import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../store/cartSlice";
function Cart() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (productsId) => {
    dispatch(remove(productsId));
  };
  return (
    <div>
      <h1 className="text-3xl text-center mt-5">cart</h1>
      <div className="cart-wraper lg:px-36 xs:px-10 mt-5">
        {products.map((product) => {
          const { image, price, title, id } = product;
          return (
            <div
              key={id}
              className="cart-cart h-22 lg:bg-white px-4 py-3 mb-3 rounded-md md:bg-red-400"
              style={{ boxShadow: "2px 2px 4px rgba(0,0,0,0.4)" }}
            >
              <div className="body flex lg:flex-row flex-col justify-between items-center">
                <div className="w-20 h-20 mb-2 lg:mb-0">
                  <img
                    src={image}
                    alt=""
                    className="h-20 w-full object-cover"
                  />
                </div>
                <div className="w-full lg:w-52 lg:ml-4">
                  <h4 className="font-bold text-lg lg:text-xl">{title}</h4>
                </div>
                <div className="text-lg lg:text-xl">
                  <h4>Rs {price}</h4>
                </div>
                <button
                  onClick={() => {
                    handleRemove(id);
                  }}
                  type="button"
                  className="px-3 lg:px-5 bg-blue-500 text-white rounded-md py-1 font-bold mt-2 lg:mt-0"
                >
                  remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
