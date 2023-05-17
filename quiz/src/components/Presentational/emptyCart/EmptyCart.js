/* eslint-disable react/prop-types */
import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "../../../constants/routes";
import style from "./emptycart.module.css";

const EmptyCart = ({ onClose }) => {
  const navigate = useNavigate();

  const handleCart = () => {
    navigate(routes.PRODUCTS);
    onClose(false);
  };
  return (
    <div>
      <button className={style.close_btn} onClick={() => onClose(false)}>
        &times;
      </button>
      <h5>Your Cart is empty😔</h5>
      <button className={style.button85} onClick={handleCart}>
        Check our Products
      </button>
    </div>
  );
};

export default EmptyCart;
