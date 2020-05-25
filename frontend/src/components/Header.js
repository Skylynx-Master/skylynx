import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Header.scss";
import ApartachoLogo from '../assets/static/ApartachoLogo.png';
import accountIcon from "../assets/static/accountIcon.png";
import SearchIcon from "../assets/static/SearchIcon.png";
import FavoritesIcon from "../assets/static/FavoritesIcon.png";
import CreatePost from "../assets/static/CreatePost.png";
import HomeIcon from "../assets/static/HomeIcon.png";

const Header = () => {
  return (
    <header className="Header">
      <Link to="/">
        <img className="Header-logo" src={ApartachoLogo} alt="Logo LaHause"></img>
      </Link>
      <nav>
        <ul className="Header-links">
          <Link to="/filters" >
            <img src={SearchIcon} alt="search icon"></img>
            <li>Buscar</li>
          </Link>
          <a>
            <img src={FavoritesIcon} alt="favorites icon"></img>
            <li>Favoritos</li>
          </a>
          <a>
            <img src={CreatePost} alt="create post icon" ></img>
            <li>Crear Publicación</li>
          </a>
          <Link to="/">
            <img src={HomeIcon} alt="home icon" ></img>
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
