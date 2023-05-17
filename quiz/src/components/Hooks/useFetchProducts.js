import { useEffect, useState } from "react";
import { fetchProducts } from "../../api/fetchProducts";

const useFetchProducts = (page) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchProducts(page)
      .then((data) => {
        setProducts(data.products);
        setTotalPages(Math.ceil(data.total / 10));
      })
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [page]);

  return [products, error, isLoading, totalPages];
};

export default useFetchProducts;
