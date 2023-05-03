import React, { useEffect } from "react";
import BackButton from "../../components/backButton/BackButton";
import { useParams } from "react-router-dom";
import UniWrapper from "../../components/uniWrapper/UniWrapper";

const Search = () => {
  const { countryName } = useParams();

  useEffect(() => {
    document.title = `UniFinder | Universities in ${countryName}`;

    return () => {
      document.title = "UniFinder | Find Your Future";
    };
  }, []);
  return (
    <div>
      <BackButton />
      <UniWrapper country={countryName} />
    </div>
  );
};

export default Search;
