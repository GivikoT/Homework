import React, { useState } from "react";
import "./searchbar.css";
import { useNavigate } from "react-router-dom";
import routes from "../../config/constants/routes";

const SearchBar = () => {
  const [country, setCountry] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="title">
        Explore universities worldwide by simply entering a country name in the
        search box
      </h1>
      <div className="box">
        <form>
          <input
            className="inputText"
            type="text"
            placeholder="Enter country name..."
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
          <button
            className="inputSubmit"
            onClick={() => {
              navigate(`${routes.UNIVERSITIES_ROUTE}/${country}`);
            }}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
