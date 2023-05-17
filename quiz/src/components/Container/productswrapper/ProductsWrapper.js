import React, { useState } from "react";
import Pagination from "../../Presentational/pagination/Pagination";
import ProductCard from "../../Presentational/productCard/ProductCard";
import style from "./productswrapper.module.css";
import { DotLoader } from "react-spinners";
import useFetchProducts from "../../Hooks/useFetchProducts";

const ProductsWrapper = () => {
  const [page, setPage] = useState(1);

  const [products, error, isLoading, totalPages] = useFetchProducts(page);

  const handlePageChange = (page) => {
    setPage(page);
  };

  if (error) {
    return (
      <div>
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <div>
      {isLoading && <DotLoader color="#3b0004" />}
      <div className={style.wrapper}>
        {products.map((item) => (
          <ProductCard key={item.id} info={item} />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        page={page}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductsWrapper;
