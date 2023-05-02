import React from "react";
import Logo from "../../image/logo.png";
import "./navigation.css";
import { NavLink } from "react-router-dom";
import routes from "../../config/constants/routes";

const Navigation = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to={routes.HOME_ROUTE}>Home</NavLink>
            </li>
            <li>
              <NavLink to={routes.UNIVERSITIES_ROUTE}>Universities</NavLink>
            </li>
            <li>
              <NavLink to={routes.ABOUT_ROUTE}>About Us</NavLink>
            </li>
            <li>
              <NavLink to={routes.CONTACT_ROUTE}>Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
