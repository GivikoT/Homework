/* eslint-disable react/prop-types */
import React from "react";
import Img from "../../image/Uni.png";
import "./unicard.css";
import { useNavigate } from "react-router-dom";
import routes from "../../config/constants/routes";

const UniCard = ({ info, country }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="cards">
        <img src={Img} alt="university" />
        <h3>{info.name}</h3>
        <p>{info.country}</p>
        <button
          onClick={() => {
            navigate(`${routes.UNIVERSITIES_ROUTE}/${country}/${info.name}`);
          }}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default UniCard;
