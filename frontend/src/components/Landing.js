import React from "react";
import "../assets/styles/components/Landing.scss";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="landing">
      <div className="description">
        <h1 className="description--title">Apartacho</h1>
        <p className="description--intro">
          {" "}
          Todos tenemos un sitio, nosotros te ayudamos a conseguirlo
        </p>
      </div>
      <div className="search">
        <p className="search__info">
          Buscar el lugar ideal es difícil y algunas veces tedioso, acá
          encontraras las mejores opciones según tus gustos, podrás contactar
          directamente al oferente ¡Sin intermediarios!,
        </p>
        {/* <input
          type="text"
          className="search--ubication"
          placeholder="Ubicacion"
        ></input> */}
      </div>
      <div className="button">
        <button type="button" className="button--send" aria-label="button">
          <Link to="/filters">Encontrar</Link>
        </button>
      </div>
      <div className="link">
        <p>
          ¿Quieres Publicar?, <Link to="/register">Regístrate</Link>
        </p>
      </div>
    </section>
  );
};

export default Landing;
