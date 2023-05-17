import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import routes from "../../../constants/routes";
import "./navbar.css";
import Logo from "../../../images/logo.png";
import { GiShoppingBag } from "react-icons/gi";
import { useAppContext } from "../../../context/AppContext";
import CartWindow from "../../Container/cartWindow/CartWindow";

const Navbar = () => {
  const { state } = useAppContext();
  const { cart } = state;
  const [cartOpen, setCartOpen] = useState(false);

  const handleCloseCart = () => {
    setCartOpen(false);
  };
  return (
    <div>
      <header style={{ left: cartOpen ? "-300px" : "0" }}>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to={routes.HOME}>Home</NavLink>
            </li>
            <li>
              <NavLink to={routes.PRODUCTS}>Products</NavLink>
            </li>
            <li>
              <NavLink to={routes.REGISTRATION}>Register</NavLink>
            </li>

            <button
              className="cart"
              onClick={() => {
                setCartOpen(!cartOpen);
              }}
            >
              <GiShoppingBag />
              {cart.length > 0 && <span>{cart.length}</span>}
            </button>
          </ul>
        </nav>
      </header>
      {cartOpen && <CartWindow isOpen={cartOpen} onClose={handleCloseCart} />}
    </div>
  );
};

export default Navbar;
