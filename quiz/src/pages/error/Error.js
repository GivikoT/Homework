import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./error.module.css";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className={style.cont}>
        <h2>Oops! Page not found.</h2>
        <h1>404</h1>
        <p>We can&rsquo;t find the page you&apos;re looking for.</p>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default Error;
