import React, { useEffect } from "react";
import "./error.css";
import { useNavigate } from "react-router-dom";

const Error = () => {
  useEffect(() => {
    document.title = "Page Not Found";

    return () => {
      document.title = "UniFinder | Find Your Future";
    };
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <div className="cont">
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
