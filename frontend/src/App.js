import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Filters from "./pages/Filters";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/filters" component={Filters} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
