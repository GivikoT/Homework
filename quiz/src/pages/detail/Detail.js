import React from "react";
import { useParams } from "react-router-dom";
import DetailWrapper from "../../components/Container/detailWrapper/DetailWrapper";
import BackButton from "../../components/Presentational/backButton/BackButton";

const Detail = () => {
  const { productID } = useParams();

  return (
    <div>
      <BackButton />
      <DetailWrapper id={productID} />
    </div>
  );
};

export default Detail;
