import React from "react";
import "../assets/styles/components/Header.scss";

function Header() {
  return (
    <header className="Header">
      <img className="Header-logo"></img>
      <nav className="Header-Navbar">
        <ul className="Header-link">
          <a>
            <li>Hola header</li>
          </a>
          <li>Hola Item</li>
          <li>Hola Favoritos</li>
          <li>Hola Favoritos</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
