import React from "react";
import Product from "../../components/Product/Product";

function Home() {
  return (
    <div>
      <h1 className="text-[30px] font-bold text-center mt-7">
        Welcome to Redux Toolkit Store
      </h1>
      <div className="mt-">
        <Product />
      </div>
    </div>
  );
}

export default Home;
