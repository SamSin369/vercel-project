import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages";

import SigninPage from "./pages/signin";
import SignUpPage from "./pages/SignUp";
import Products from "./components/ProductsPage/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />

        <Route path="/signup" component={SignUpPage} exact />
        <Route path="/Products" component={Products} />
      </Switch>
    </Router>
  );
}

export default App;
