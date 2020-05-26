import React from "react";
import {Link} from "react-router-dom";
import "../assets/styles/pages/LogIn.scss"

const Login = () => {
  return(
    <div className="Login-form">
      <h1>Iniciar Sesión</h1>
      <form>
        <input type="email" className="Login-input" placeholder="Correo"></input>
        <input type="password" className="Login-input" placeholder="Contraseña"></input>
        <p>Si no estás registrado, <Link to="/register">Regístrate</Link></p>
        <button type="button" className="Login-button" >Iniciar</button>
      </form>
    </div>
  )
};

export default Login;
