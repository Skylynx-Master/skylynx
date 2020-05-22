import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/signin" component={SignIn} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
