import React from "react";
import Header from "./Header.js";

const Layout = (props) => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
    </React.Fragment>
  );
};

export default Layout;
