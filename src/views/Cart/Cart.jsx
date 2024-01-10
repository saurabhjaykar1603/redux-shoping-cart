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
      <div className="cart-wraper px-36 mt-5">
        {products.map((product) => {
          const { image, price, title, id } = product;
          return (
            <>
              <div
                key={id}
                className="cart-cart h-22 bg-white px-4 py-3 mb-3 rounded-md"
                style={{ boxShadow: "2px 2px 4px rgba(0,0,0,0.4)" }}
              >
                <div className="body flex justify-between items-center ">
                  <div className="w-20 h-20">
                    <img src={image} alt="" className="h-20" />
                  </div>
                  <div className="w-52">
                    {" "}
                    <h4 className="font-bold ">{title}</h4>
                  </div>
                  <div>
                    <h4>Rs {price}</h4>
                  </div>
                  <button
                    onClick={() => {
                      handleRemove(id);
                    }}
                    type="button"
                    className="px-5 bg-blue-500 text-white rounded-md  py-1 font-bold"
                  >
                    {" "}
                    remove
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
