import React from "react";
import Avatar1 from "../../image/avatar1.png";
import Avatar2 from "../../image/avatar2.png";
import Avatar3 from "../../image/avatar3.png";
import Avatar4 from "../../image/avatar4.png";
import "./feedback.css";

const Feedback = () => {
  return (
    <div>
      <section className="main">
        <div className="full-boxer">
          <div className="comment-box">
            <div className="box-top">
              <div className="profile">
                <div className="profile-image">
                  <img src={Avatar1} alt="avatar" />
                </div>
                <div className="Name">
                  <strong>Emma Watson</strong>
                  <span>@emmawatson</span>
                </div>
              </div>
            </div>
            <div className="comment">
              <p>
                UniFinder made it so easy to find the perfect university for me.
                The search feature is simple and intuitive, and the information
                on universities is comprehensive and up-to-date.
              </p>
            </div>
          </div>
          <div className="comment-box">
            <div className="box-top">
              <div className="profile">
                <div className="profile-image">
                  <img src={Avatar2} alt="avatar" />
                </div>
                <div className="Name">
                  <strong>Anna James</strong>
                  <span>@annajames</span>
                </div>
              </div>
            </div>
            <div className="comment">
              <p>
                I was so overwhelmed with the process of choosing a university,
                but UniFinder made it a breeze. The website is user-friendly and
                the articles on higher education are really informative.
              </p>
            </div>
          </div>
          <div className="comment-box">
            <div className="box-top">
              <div className="profile">
                <div className="profile-image">
                  <img src={Avatar3} alt="avatar" />
                </div>
                <div className="Name">
                  <strong>Floyd Smith</strong>
                  <span>@floydsmith</span>
                </div>
              </div>
            </div>
            <div className="comment">
              <p>
                I am so glad I stumbled upon UniFinder. The service is amazing,
                and I was able to find the perfect university in no time. I
                would definitely recommend it to anyone looking for information
                on universities worldwide.
              </p>
            </div>
          </div>
          <div className="comment-box">
            <div className="box-top">
              <div className="profile">
                <div className="profile-image">
                  <img src={Avatar4} alt="avatar" />
                </div>
                <div className="Name">
                  <strong>John Orton</strong>
                  <span>@johnorton</span>
                </div>
              </div>
            </div>
            <div className="comment">
              <p>
                UniFinder is a game-changer for anyone looking to study abroad.
                The search feature is quick and efficient, and the articles on
                higher education are really helpful. Thank you, UniFinder!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feedback;
