import React, { useEffect } from "react";
import BackButton from "../../components/backButton/BackButton";
import SearchBar from "../../components/searchBar/SearchBar";

const Search = () => {
  useEffect(() => {
    document.title = "UniFinder | Find Your Destination";

    return () => {
      document.title = "UniFinder | Find Your Future";
    };
  });
  return (
    <div>
      <BackButton />
      <SearchBar />
    </div>
  );
};

export default Search;
