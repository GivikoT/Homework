/* eslint-disable react/prop-types */
import React from "react";
import style from "./detailcard.module.css";
import { addToCart } from "../../../context/actions/AppContextActionsCreators";
import { useAppContext } from "../../../context/AppContext";

const DetailCard = ({ data }) => {
  const { dispatch } = useAppContext();
  const coverStyle = {
    backgroundImage: `url(${data.thumbnail})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };
  return (
    <div>
      <main>
        <div className={style.detail}>
          <div className={style.cover} style={coverStyle}></div>
          <div className={style.content}>
            <div className={style.nav}>
              <span className={style.logo}>{data.brand}</span>
            </div>
            <div className={style.content_body}>
              <div className={style.pages}>
                <span className={style.activee}>
                  <b>01</b>
                </span>
                <span>02</span>
                <span>03</span>
                <span>04</span>
              </div>
              <div className={style.black_label}>
                <span className={style.title}>
                  <b>{data.title}</b>
                </span>
                <p>{data.description}</p>
                <p>{data.category}</p>

                <div className={style.prix}>
                  <span>
                    <b>${data.price}</b>
                  </span>
                  <button
                    className={style.crt}
                    onClick={() => dispatch(addToCart(data))}
                  >
                    Add to card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DetailCard;
