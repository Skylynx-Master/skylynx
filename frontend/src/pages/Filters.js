import React from "react";
import Services from "../components/Services";
import SearchAddress from "../components/SearchAddress";

import "../assets/styles/components/Filters.scss";

function Filters() {
  return (
    <section className="filters">
      <div className="filters__ubication">
        <h1>Ubicacion</h1>
      </div>
      <div className="filters__info"></div>
      <div className="filters__services">
        <Services />
        <button type="button" className="button--filter">
          Filtar
        </button>
      </div>

      {/* <SearchAddress /> */}
    </section>
  );
}

export default Filters;
