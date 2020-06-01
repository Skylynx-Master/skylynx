import React from "react";
import "../assets/styles/components/AccountConfirmation.scss";
import checkIcon from "../assets/static/checkIcon.png";
import { Link } from "react-router-dom";

const AccountConfirmation = () => {
  return (
    <div className="AccountConfirmation">
      <h2 className="AccountConfirmation-title">
        Se ha confirmado su cuenta!!!
      </h2>
      <img
        src={checkIcon}
        alt="check image of account"
        className="AccountConfirmation-image"
      ></img>
      <Link to="/login">
        <button className="AccountConfirmation-button" type="button">
          Iniciar Sesión
        </button>
      </Link>
    </div>
  );
};

export default AccountConfirmation;
