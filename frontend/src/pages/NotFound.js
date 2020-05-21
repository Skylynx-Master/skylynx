import React from "react";
import "../assets/styles/pages/NotFound.scss";
import notFound from "../assets/static/404_mastercity.png";

const Notfound = () => {
  return (
    <div className="NotFound">
      <img src={notFound} alt="Page Not Found"></img>
    </div>
  );
};

export default Notfound;
