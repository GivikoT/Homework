/* eslint-disable react/prop-types */
import React from "react";
import { useAppContext } from "../../../context/AppContext";
import CartCards from "../../Presentational/cartCards/CartCards";
import EmptyCart from "../../Presentational/emptyCart/EmptyCart";

const CartWindow = ({ isOpen, onClose }) => {
  const { state } = useAppContext();

  return (
    <div
      className={`sidecart ${isOpen ? "open" : ""}`}
      style={{ right: `${isOpen ? "0" : "-300px"}` }}
    >
      {state.cart.length === 0 ? (
        <EmptyCart onClose={onClose} />
      ) : (
        <CartCards onClose={onClose} />
      )}
    </div>
  );
};

export default CartWindow;
