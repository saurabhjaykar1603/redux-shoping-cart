import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../store/cartSlice';
import { fetchProducts } from '../../store/ProductSlice';
import { STATUSES } from '../../store/ProductSlice';

const Product = () => {
    const dispatch = useDispatch();
    const { data: product, status } = useSelector((state) => state.product);
    // const [products, setProducts] = useState([]);

    useEffect(() => {
        dispatch(fetchProducts());
        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     console.log(data);
        //     setProducts(data);
        // };
        // fetchProducts();
    }, []);

    const handleAdd = (product) => {
        dispatch(add(product));
    };

    if (status === STATUSES.LOADING) {
        return <h2>Loading....</h2>;
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }
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
                  <button type="button"
                    onClick={() => {
                      handleAdd(product);
                    }}
                    className="btn bg-blue-500 text-[15px] px-4 text-white font-bold py-2 rounded-lg"
                  >
                    Add to Cart
                  </button>
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
