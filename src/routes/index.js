import React from "react";
import { Switch } from "react-router-dom";
import Route from "./route";

import Home from "../pages/Home";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import SignIn from "../pages/SignIn";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/product/:id" exact component={Product} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/signIn" exact component={SignIn} />
    </Switch>
  );
}

export default Routes;
