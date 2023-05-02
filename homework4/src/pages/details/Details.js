import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../../components/backButton/BackButton";
import UniDetailWrapper from "../../components/uniDetailWrapper/UniDetailWrapper";

const Details = () => {
  const { uniName } = useParams();

  useEffect(() => {
    document.title = `UniFinder | ${uniName}`;

    return () => {
      document.title = "UniFinder | Find Your Future";
    };
  }, []);

  return (
    <div>
      <BackButton />
      <UniDetailWrapper name={uniName} />
    </div>
  );
};

export default Details;
