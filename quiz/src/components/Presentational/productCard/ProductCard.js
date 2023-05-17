/* eslint-disable react/prop-types */
import React from "react";
import style from "./productcard.module.css";
import { useNavigate } from "react-router-dom";
import routes from "../../../constants/routes";
import { addToCart } from "../../../context/actions/AppContextActionsCreators";
import { useAppContext } from "../../../context/AppContext";

const ProductCard = ({ info }) => {
  const { dispatch } = useAppContext();
  const navigate = useNavigate();
  return (
    <div>
      <div className={style.cards}>
        <img src={info.thumbnail} alt={info.title} />
        <h3>{info.title}</h3>
        <h2>{info.brand}</h2>
        <p>${info.price}</p>
        <button onClick={() => navigate(`${routes.PRODUCTS}/${info.id}`)}>
          See More
        </button>
        <button onClick={() => dispatch(addToCart(info))}>Add To Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
