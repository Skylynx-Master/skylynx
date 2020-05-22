import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Header.scss";
import LaHauseLogo from "../assets/static/LaHauseLogo.png";
import accountIcon from "../assets/static/accountIcon.png";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/">
        <img className="Header-logo" src={LaHauseLogo} alt="Logo LaHause"></img>
      </Link>
      <nav>
        <ul className="Header-links">
          <Link to="/filters" >
            <li>Buscar</li>
          </Link>
          <a>
            <li>Favoritos</li>
          </a>
          <a>
            <li>Crear Publicación</li>
          </a>
          <Link to="/">
            <li>Inicio</li>
          </Link>
          <img
            src={accountIcon}
            className="Header-links_profile"
            alt="Account Icon"
          ></img>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
