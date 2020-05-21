import React from "react";
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
        <p>Acepto términos y condiciones</p>
      </form>
    </div>
  );
};

export default Register;
