import React from "react";
import "./homeContent.css";
import Feedback from "../feedback/Feedback";
import { useNavigate } from "react-router-dom";
import routes from "../../config/constants/routes";

const HomeContent = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="showcase">
        <h1>Welcome to UniFinder </h1>
        <p>
          Simply enter the name of the country you are interested in, and our
          website will generate a list of universities in that location.
        </p>
        <button
          onClick={() => {
            navigate(routes.UNIVERSITIES_ROUTE);
          }}
        >
          Get Started
        </button>
      </div>
      <Feedback />
    </div>
  );
};

export default HomeContent;
