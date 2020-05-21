import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Navbar.scss';
import logo from '../assets/static/logo.png';

const Navbar = () => {

  return (
    <div className="Navbar">
      <div className="container-fluid">
        <Link className="Navbar__brand" to="/">
          <img className="Navbar__brand-logo" src={logo} alt="Logo" />
          <span className="font-weight-light">LaHause</span>
          <span className="font-weight-bold">Hola desde LaHause</span>
          <img className="Navbar__profile"></img>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;