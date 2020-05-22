import React from "react";
import "../assets/styles/pages/LogIn.scss"

const Login = () => {
  return(
    <div className="Login-form">
      <h1>Iniciar Sesión</h1>
      <form>
        <input type="email" className="Login-input" placeholder="Correo"></input>
        <input type="password" className="Login-input" placeholder="Contraseña"></input>
        <p>Si no estás registrado, <a>regístrate</a></p>
        <button type="button" className="Login-button" >Iniciar</button>
      </form>
    </div>
  )
};

export default Login;
