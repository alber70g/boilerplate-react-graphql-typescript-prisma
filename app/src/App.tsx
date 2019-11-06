import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Nav from "./nav/Nav";

const Home = lazy(() => import("./routes/home/Home"));
const Login = lazy(() => import("./routes/login/Login"));
const Register = lazy(() => import("./routes/register/Register"));

const App = () => (
  <div className="App">
    <h1>App</h1>
    <Router>
      <Nav></Nav>
      <Suspense
        fallback={
          <>
            <div>Loading...</div>
          </>
        }
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Suspense>
    </Router>
  </div>
);

export default App;
