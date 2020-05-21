import React from "react";
import "../assets/styles/components/Header.scss";
import LaHauseLogo from "../assets/static/LaHauseLogo.png";
import accountIcon from "../assets/static/accountIcon.png";

const Header = () => {
  return (
    <header className="Header">
      <a>
        <img className="Header-logo" src={LaHauseLogo}></img>
      </a>
      <nav>
        <ul className="Header-links">
          <li>Buscar</li>
          <li>Favoritos</li>
          <li>Crear Publicación</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
