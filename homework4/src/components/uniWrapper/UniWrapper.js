/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { fetchUNI } from "../../api/Fetch";
import { RingLoader } from "react-spinners";
import uuid from "react-uuid";
import UniCard from "../uniCard/UniCard";
import "./uniwrapper.css";

const UniWrapper = ({ country }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUNI(country)
      .then((data) => setData(data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [country]);

  if (error) {
    return (
      <div className="err-message">
        <h1>Something Unexpected happened... Try again later!</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="wrapper">
        <RingLoader className="loader" color="#fd0606" size={120} />
      </div>
    );
  }

  return (
    <div className="wrapper">
      {data.length === 0 ? (
        <h1 className="noResult">No Universities found in {country}</h1>
      ) : (
        <div>
          <h1 className="heading">Your Search Results:</h1>
          <div className="uniContainer">
            {data.map((uni) => (
              <UniCard key={uuid()} info={uni} country={country} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UniWrapper;
