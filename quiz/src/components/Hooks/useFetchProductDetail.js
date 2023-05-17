import { useEffect, useState } from "react";
import { fetchProductId } from "../../api/fetchProducts";

const useFetchProductDetail = (id) => {
  const [product, setProduct] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProductId(id)
      .then((data) => setProduct(data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [id]);

  return [product, error, isLoading];
};

export default useFetchProductDetail;
