import React, { useEffect } from "react";
import Image from "../../image/ceremony.avif";
import "./about.css";
import { useNavigate } from "react-router-dom";

const About = () => {
  useEffect(() => {
    document.title = "UniFinder | About Us";

    return () => {
      document.title = "UniFinder | Find Your Future";
    };
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <section className="hero">
        <div className="heading">
          <h1>About Us</h1>
        </div>
        <div className="container">
          <div className="hero-content">
            <h2>Welcome to our website</h2>
            <p>
              Our website offers a comprehensive database of universities
              worldwide, providing users with easy access to information about
              top-ranked universities across the globe. With our user-friendly
              search feature, you can quickly and easily find universities in
              any country of your choice. Simply enter the name of the country
              you are interested in, and our website will generate a list of
              universities in that location.
            </p>
            <button
              className="cta-button"
              onClick={() => {
                navigate("/");
              }}
            >
              Get Started
            </button>
          </div>
          <div className="hero-image">
            <img src={Image} alt="avatar" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
