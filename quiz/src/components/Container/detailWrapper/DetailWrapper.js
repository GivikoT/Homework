/* eslint-disable react/prop-types */
import React from "react";
import DetailCard from "../../Presentational/detailCard/DetailCard";
import useFetchProductDetail from "../../Hooks/useFetchProductDetail";
import { DotLoader } from "react-spinners";

const DetailWrapper = ({ id }) => {
  const [product, error, isLoading] = useFetchProductDetail(id);

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
      <DetailCard data={product} />
    </div>
  );
};

export default DetailWrapper;
