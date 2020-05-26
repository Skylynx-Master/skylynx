import React from "react";
import "../assets/styles/pages/NotFound.scss";
import notFound from "../assets/static/404_mastercity.png";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="NotFound">
      <h1>¡¡¡Ooppss!! algo salió mal</h1>
      <img src={notFound} alt="Page Not Found"></img>
     <p>
       <Link to="/">Regresa al inicio...</Link>
      </p> 
    </div>
  );
};

export default Notfound;
