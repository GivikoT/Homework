/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from "react";
import { useAppContext } from "../../../context/AppContext";
import { removeItem } from "../../../context/actions/AppContextActionsCreators";
import { useNavigate } from "react-router-dom";
import routes from "../../../constants/routes";
import "./cartcards.css";

const CartCards = ({ onClose }) => {
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate();
  return (
    <div>
      <div className="sidecart open">
        <div className="cart_content">
          <div className="cart_header">
            <img
              src="https://www.pngkit.com/png/detail/116-1169515_cart-png-pic-shopping-cart-logo-png-white.png"
              style={{ width: "30px" }}
              alt="cart"
            />
            <div className="header_title">
              <h2>Your Cart</h2>
              <span>{state.cart.length}</span>
            </div>
            <button className="close_btn" onClick={() => onClose(false)}>
              &times;
            </button>
          </div>
        </div>
      </div>
      {state.cart.map((item) => (
        <div key={item.id} className="cart_items">
          <div className="cart_item">
            <div className="remove_item">
              <span onClick={() => dispatch(removeItem(item.id))}>&times;</span>
            </div>
            <div className="item_img">
              <img src={item.thumbnail} alt={item.thumbnail} />
            </div>
            <div className="item_details">
              <p onClick={() => navigate(`${routes.PRODUCTS}/${item.id}`)}>
                {item.title}
              </p>
              <strong>${item.price}</strong>
            </div>
          </div>
        </div>
      ))}
      <div className="cart_actions">
        <div className="buttons">
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default CartCards;
