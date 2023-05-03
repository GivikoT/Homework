/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import "./uniDetail.css";

const UniDetail = ({ item }) => {
  return (
    <div>
      <main>
        <div className="container-detail">
          <div className="cover"></div>
          <div className="content-D">
            <div className="nav">
              <span className="logo">UniFinder</span>
            </div>
            <div className="content-body">
              <div className="black-label">
                <span className="title-D">
                  <b>{item.name}</b>
                </span>
                <p>
                  {item.country}, {item.alpha_two_code}
                </p>
                <p>{item.web_pages[0]}</p>

                <div className="prix">
                  <span>
                    <b>Official Website</b>
                  </span>
                  <Link to={`https://${item.domains}`} target="_blank">
                    <button className="crt">{item.domains[0]}</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UniDetail;
