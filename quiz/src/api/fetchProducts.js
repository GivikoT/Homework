export async function fetchProducts(page) {
  const limit = 10;
  const skip = (page - 1) * limit;
  const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  throw new Error("Fetch Failed");
}

export async function fetchProductId(id) {
  const url = `https://dummyjson.com/products/${id}`;
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  }
  throw new Error("fetch failed");
}
