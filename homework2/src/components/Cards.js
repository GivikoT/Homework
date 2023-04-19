import { products } from "../constants/products";
import { showLoader, hideLoader } from "../constants/loading";

function Cards() {
  showLoader();

  const cards = products.map((product) => {
    return (
      <div key={product.id} className="card">
        <img src={product.image} className="card-image" />
        <h2>{product.title}</h2>
        <p>{product.category}</p>
        <p>{product.stock}</p>
        <button>Add To Cart</button>
      </div>
    );
  });

  hideLoader();

  return <div className="container">{cards}</div>;
}

export default Cards;
