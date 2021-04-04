import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages";
import ProductsPage from "./pages/products";
import SigninPage from "./pages/signin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/Products" component={ProductsPage} />
      </Switch>
    </Router>
  );
}

export default App;
