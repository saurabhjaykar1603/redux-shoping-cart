import axios from "axios";
import React, { useEffect, useState } from "react";

function Product() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      if (res) {
        console.log(res?.data);
        setProduct(res?.data);
      }
    };
    fetchProduct();
  }, []);
  return (
    <>
      <div className="text-center text-[25px] mt-9">
      
        <div className="product-wraper flex flex-wrap justify-evenly gap-x-10 gap-y-8">
          {product.map((product) => {
            const { id, image, price, title } = product;
            return (
              <div
                className="card w-72 px-5 py-5 bg-white rounded-lg"
                key={id}
                style={{ boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}
              >
                <div className="img-container">
                  <img src={image} alt="" className="h-32 d-block mx-auto" />
                </div>
                <p className="text-[14px] leading-1  my-8 h-14 font-bold">
                  {title}
                </p>
                <p className="text-[13px] font-bold ">RS {price} /-</p>
                <div className="mt-4 text-center">
                  <button className="btn bg-blue-500 text-[15px] px-4 text-white font-bold py-2 rounded-lg">Add to Cart</button>
                </div>
              </div>
            );
          })}
        </div>
      </div> 
    </>
  );
}

export default Product;
