import React from "react";
import { Switch } from "react-router-dom";
import Route from "./route";

import Home from "../pages/Home";
import Product from "../pages/Product";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/product/:id" exact component={Product} />
    </Switch>
  );
}

export default Routes;
