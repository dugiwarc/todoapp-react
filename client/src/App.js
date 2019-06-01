import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Landing from "./components/layouts/Landing";
import Todo from "./components/layouts/Todo";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Alert from "./components/layouts/Alert";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import getCookie from "./utils/getCookieToken";

import "./App.css";

const token = getCookie();

if (token) {
  setAuthToken(token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section>
            <Alert />
            <Switch>
              <Route exact path="/api/users/register" component={Register} />
              <Route exact path="/api/users/login" component={Login} />
              <Route exact path="/api/todos" component={Todo} />
            </Switch>
          </section>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
