import React from "react";
import LoginChecker from "../../components/HOC/LoginChecker";
import ProductsWrapper from "../../components/Container/productswrapper/ProductsWrapper";
import style from "./products.module.css";

const Product = () => {
  return (
    <div>
      <h1 className={style.heading}>Our Products</h1>
      <ProductsWrapper />
    </div>
  );
};

export default LoginChecker(Product);
