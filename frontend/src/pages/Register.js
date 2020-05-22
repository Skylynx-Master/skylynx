import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/pages/Register.scss";

const Register = () => {
  return (
    <div className="Register-form">
      <h1>Registrarse</h1>
      <form>
        <input
          type="email"
          className="Register-input"
          placeholder="Correo"
        ></input>
        <input
          type="password"
          className="Register-input"
          placeholder="Contraseña"
        ></input>
        <input
          type="password"
          className="Register-input"
          placeholder="Confirmar contraseña"
        ></input>
        <p>
          <span>
            <input type="checkbox"></input>
          </span>
          Acepto términos y condiciones
        </p>
        <p>
          ¿Ya tienes una cuenta?
          <Link to="/signin">Ingresa Aquí</Link>
        </p>
        <button type="button" className="Form-button">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default Register;
