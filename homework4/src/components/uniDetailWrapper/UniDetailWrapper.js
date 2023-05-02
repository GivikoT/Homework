/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { fetchName } from "../../api/Fetch";
import { RingLoader } from "react-spinners";
import uuid from "react-uuid";
import UniDetail from "../uniDetail/UniDetail";
import "./uniDetailWrapper.css";

const UniDetailWrapper = ({ name }) => {
  const [info, setInfo] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchName(name)
      .then((data) => setInfo(data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, [name]);

  if (error) {
    return (
      <div className="err-message">
        <h1>Something Unexpected happened... Try again later!</h1>
      </div>
    );
  }

  return (
    <div>
      {isLoading && (
        <RingLoader className="loader" color="#fd0606" size={120} />
      )}
      {info.map((uni) => (
        <UniDetail key={uuid()} item={uni} />
      ))}
    </div>
  );
};

export default UniDetailWrapper;
