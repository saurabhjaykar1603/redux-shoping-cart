import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Product from "../../components/Product/Product";

function Home() {
  return (
    <div>
      <Navbar />
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
