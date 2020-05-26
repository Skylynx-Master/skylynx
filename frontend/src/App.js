import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

<<<<<<< HEAD
import Layout from './components/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import Detail from './pages/Detail';
=======
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Filters from "./pages/Filters";
import NotFound from "./pages/NotFound";
>>>>>>> 3b232322f6cca52045c55604738a8802a9dd66da

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
<<<<<<< HEAD
          <Route exact path="/search" component={Search} />
          <Route exact path="/detail" component={Detail} />
=======
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/filters" component={Filters} />
>>>>>>> 3b232322f6cca52045c55604738a8802a9dd66da
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
