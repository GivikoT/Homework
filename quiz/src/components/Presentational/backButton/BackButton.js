import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./backButton.module.css";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button className={style.backBtn} onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
};

export default BackButton;
