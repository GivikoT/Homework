/* eslint-disable react/prop-types */
import React from "react";
import "./cardStyle.css";

const Card = ({ item }) => {
  return (
    <div className="card">
      <img className="card-image" src={item.picture.medium} alt="avatar" />
      <h2>{`${item.name.title} ${item.name.first} ${item.name.last}`}</h2>
      <p>{item.location.city}</p>
      <p>{item.email}</p>
      <p>{`${item.dob.age}, ${item.gender}`}</p>
    </div>
  );
};

export default Card;
