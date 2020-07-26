import React from "react";
import { Switch } from "react-router-dom";
import Route from "./route";

import Home from "../pages/Home";
import Product from "../pages/Product";
import Cart from "../pages/Cart";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import Restore from "../pages/Auth/Restore";
import MyAccount from "../pages/MyAccount";
import Payament from "../pages/Payament";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/product/:id" exact component={Product} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/signIn" exact component={SignIn} />
      <Route path="/signUp" exact component={SignUp} />
      <Route path="/restore" exact component={Restore} />
      <Route path="/account" exact component={MyAccount} />
      <Route path="/payament" exact component={Payament} />
    </Switch>
  );
}

export default Routes;
