import React, { useContext, useEffect } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import "../assets/styles/pages/LogIn.scss";

import { useForm } from "react-hook-form";
import { AuthContext } from "../utils/AuthContext";
import { MessageContext } from "../utils/MessageContext";

const Login = () => {
  const { authenticated, error, handleLogin } = useContext(AuthContext);
  const { register, handleSubmit, errors } = useForm();
  const { setMessage } = useContext(MessageContext);
  const history = useHistory();

  const onSubmit = (data) => {
    handleLogin(data);
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
    <div className="Login-form">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          name="email"
          className="Login-input"
          placeholder="Correo"
          ref={register({ required: false })}
        ></input>
        {errors.email && <span className="login__error">Campo requerido</span>}
        <input
          type="password"
          name="password"
          className="Login-input"
          placeholder="Contraseña"
          ref={register({ required: false })}
        ></input>
        {errors.password && (
          <span className="login__error">Campo requerido</span>
        )}
        <p>
          Si no estás registrado, <Link to="/register">Regístrate</Link>
        </p>
        <button type="button" className="Login-button" type="submit">
          Iniciar
        </button>
      </form>
    </div>
  );
};

export default withRouter(Login);
