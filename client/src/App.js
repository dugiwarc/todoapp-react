import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/layouts/Landing";
import Navbar from "./components/layouts/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import "./App.css";

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <section>
        <Switch>
          <Route exact path="/api/users/register" component={Register} />
          <Route exact path="/api/users/login" component={Login} />
        </Switch>
      </section>
    </Fragment>
  </BrowserRouter>
);

export default App;
