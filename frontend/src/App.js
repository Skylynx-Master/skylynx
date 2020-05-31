import React from "react";
import { BrowserRouter, Switch, Route, withRouter } from "react-router-dom";
import { AuthProvider } from "./utils/AuthContext";
import { MessageProvider } from "./utils/MessageContext";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Filters from "./pages/Filters";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import Dashboard from "./pages/Dashboard";
import AllModals from "./pages/AllModals";
import Create from "./pages/Create";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <AuthProvider>
            <MessageProvider>
              <Route exact path="/" component={Home} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/detail" component={Detail} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/filters" component={Filters} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/modals" component={AllModals} />
              <Route exact path="/create-post" component={Create} />
              {/* <Route component={NotFound} /> */}
            </MessageProvider>
          </AuthProvider>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
