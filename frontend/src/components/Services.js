import React from "react";
import "../assets/styles/components/Services.scss";

function Services() {
  return (
    <section className="services">
      <div className="services__items">
        <p className="services--title">Servicios:</p>
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
    </section>
  );
}

export default Services;
