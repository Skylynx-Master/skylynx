import React from "react";
import PropertyList from "../components/PropertyList";
import Map from "../components/Map";
import "../assets/styles/pages/search.scss";

const Search = () => {
  return (
    <div className="search">
      <div className="search__list">
        <PropertyList />
      </div>
      <div className="search__map">
        <Map />
      </div>
    </div>
  );
};

export default Search;
