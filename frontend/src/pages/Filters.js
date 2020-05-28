import React from "react";
import Services from "../components/Services";
import SearchAddress from "../components/SearchAddress";

import "../assets/styles/components/Filters.scss";

function Filters() {
  return (
    <section className="filters">
      <div className="filters__ubication">
        <h1>Ubicacion</h1>
        <input
          type="text"
          className="search--ubication"
          placeholder="Ubicacion"
        ></input>
        <p>Queremos brindarte la mejor experiencia, danos mas información de lo que buscas: </p>
      </div>

      <div className="filters__info">

        <div className="radio-options">
          <label>
            <input type="radio" value="option1"
              checked={}
              onChange={} />
        Option 1
      </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option2"
              checked={}
              onChange={} />
        Option 2
      </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="option3"
              checked={}
              onChange={} />
        Option 3
      </label>
        </div>
        <div className="filters__info--contain">

          <label htmlFor="properties">Tipo de inmuebles:</label>
          <select className="select-info">

            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="vw">VW</option>
            <option value="audi" >Audi</option>
          </select>
          <label htmlFor="price">Precio:</label>
          <select className="select-info">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="vw">VW</option>
            <option value="audi" >Audi</option>
          </select>

        </div>

      </div>
      <div className="filters__services">
        <h1>Servicios</h1>

        <div className="filters__services--contain">
          <div >
            <Services />
          </div>
          <div >
            <Services />
          </div>
          <div >
            <Services />
          </div>
        </div>
      </div>

      <div className="filters__search">
        <button type="button" className="button--filter">
          Filtar
              </button>
      </div>
      {/* <SearchAddress /> */}
    </section>
  );
}

export default Filters;
