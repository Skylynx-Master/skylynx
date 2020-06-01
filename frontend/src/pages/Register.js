import React, { useContext, useEffect } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import "../assets/styles/pages/Register.scss";

import { useForm } from "react-hook-form";
import { AuthContext } from "../utils/AuthContext";
import { MessageContext } from "../utils/MessageContext";

const Register = () => {
  const { authenticated, error, handleSignUp } = useContext(AuthContext);
  const { register, handleSubmit, errors } = useForm();
  const { setMessage } = useContext(MessageContext);
  const history = useHistory();

  const onSubmit = (data) => {
    //history.push("/home");
    handleSignUp(data);
  };

  useEffect(() => {
    setMessage("");
    if (authenticated) {
      setMessage("Login Success");
    } else if (error !== "") {
      setMessage("Login Denied", error);
    }
  }, [authenticated, error]);

  return (
    <div className="Register-form">
      <h1>Registrarse</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          name="email"
          className="Register-input"
          placeholder="Correo"
          ref={register({ required: false })}
        ></input>
        <input
          type="text"
          name="username"
          className="Register-input"
          placeholder="Usuario"
          ref={register({ required: false })}
        ></input>
        <input
          type="password"
          name="password"
          className="Register-input"
          placeholder="Contraseña"
          ref={register({ required: false })}
        ></input>
        <input
          type="password"
          name="password_confirmation"
          className="Register-input"
          placeholder="Confirmar contraseña"
          ref={register({ required: false })}
        ></input>
        <p>
          <span className="Register-checkbox">
            <input type="checkbox"></input>
          </span>
          Acepto términos y condiciones
        </p>
        <p>
          ¿Ya tienes una cuenta?
          <Link to="/login">Ingresa Aquí</Link>
        </p>
        <button type="submit" className="Form-button">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default Register;
