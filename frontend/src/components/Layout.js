import React from 'react';

import Navbar from './Navbar.js';
import Header from  './Header.js';


const Layout = (props) => {

  return (
    <React.Fragment>
      <Header />
      {props.children}
    </React.Fragment>
  );
}

export default Layout;