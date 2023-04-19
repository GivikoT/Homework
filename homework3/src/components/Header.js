/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../images/logo.png";
import "./headerStyle.css";

const Header = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="" className="active">
                Dashboard
              </a>
            </li>
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">Links</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
