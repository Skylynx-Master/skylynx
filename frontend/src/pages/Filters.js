import React, { useState } from "react";
import SearchAddress from "../components/SearchAddress";
import "../assets/styles/components/services.scss";
import "../assets/styles/components/Filters.scss";

function Filters() {
  return (
    <section className="filters">
      <div className="filters__ubication">
        <h1>Ubicación </h1>
        {/* <input
          type="text"
          className="search--ubication"
          placeholder="Ubicacion"
        ></input> */}
        <SearchAddress />
        <p>
          Queremos brindarte la mejor experiencia, danos mas información de lo
          que buscas:{" "}
        </p>
      </div>

      <div className="filters__info">
        <div className="radio-options">
          <p>Quiero:</p>
          <div className="group_radioButtons">
            <input className="radio-item" type="radio" value="comprar" />
            Comprar
            <input className="radio-item" type="radio" value="arrendar" />
            Arrendar
          </div>
        </div>

        <div className="filters__info--contain">
          <label htmlFor="properties">Tipo de inmuebles:</label>
          <select className="select-info">
            <option value="volvo">Apartamento</option>
            <option value="saab">Casa</option>
          </select>
          <label htmlFor="price">Precio:</label>
          <select className="select-info">
            <option value="volvo">300 - 400</option>
            <option value="volvo">400 - 500</option>
            <option value="volvo">500 - 600</option>
            <option value="volvo">600 - 700</option>
          </select>
        </div>
      </div>
      <div className="filters__services">
        <h1 className="title__services">Servicios</h1>

        <div className="filters__services--contain">
          <div className="services__items">
            {/* <p className="services--title">Servicios:</p> */}
            <ol className="services--list">
              <li>
                <label>
                  <input type="checkbox" value="estacionamiento" />
                  Estacionamiento
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" value="Ascensor" />
                  Ascensor
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" value="gym" />
                  Gym
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" value="seguridad" />
                  Seguridad
                </label>
              </li>
            </ol>
          </div>
          <div className="services__items">
            {/* <p className="services--title">Servicios:</p> */}
            <ol className="services--list">
              <li>
                <label>
                  <input type="checkbox" value="estacionamiento" />
                  Piscina
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" value="Ascensor" />
                  Privado
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" value="gym" />
                  Compartido
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" value="seguridad" />
                  Aire Condicionado
                </label>
              </li>
            </ol>
          </div>
          <div className="services__items">
            {/* <p className="services--title">Servicios:</p> */}
            <ol className="services--list">
              <li>
                <label>
                  <input type="checkbox" value="estacionamiento" />
                  Amueblado
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" value="Ascensor" />
                  Ascensor
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" value="gym" />
                  Internet
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" value="seguridad" />
                  Tv
                </label>
              </li>
            </ol>
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
