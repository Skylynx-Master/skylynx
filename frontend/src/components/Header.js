import React from "react";
import { Link } from "react-router-dom";
import ApartachoLogo from "../assets/static/ApartachoLogo.png";
import SearchIcon from "../assets/static/SearchIcon.png";
import FavoritesIcon from "../assets/static/FavoritesIcon.png";
import CreatePost from "../assets/static/CreatePost.png";
import HomeIcon from "../assets/static/HomeIcon.png";
import HamburgerMenu from "../components/HamburgerMenu";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/">
        <img
          className="Header-logo"
          src={ApartachoLogo}
          alt="Logo LaHause"
        ></img>
      </Link>
      <nav>
        <ul className="Header-links">
          <Link to="/filters" className="Header-icons">
            <img src={SearchIcon} alt="search icon"></img>
            <li className="Header-icons_search">Buscar</li>
          </Link>
          <Link to="/search" className="Header-icons">
            <img src={FavoritesIcon} alt="favorites icon"></img>
            <li className="Header-icons_favorites">Favoritos</li>
          </Link>
          <Link to="/create-post" className="Header-icons">
            <img src={CreatePost} alt="create post icon"></img>
            <li className="Header-icons_createpost">Crear Publicación</li>
          </Link>

          <Link to="/" className="Header-icons">
            <img src={HomeIcon} alt="home icon"></img>
            <li>Inicio</li>
          </Link>
        </ul>
        <HamburgerMenu />
      </nav>
    </header>
  );
};

export default Header;
