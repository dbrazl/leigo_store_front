import React from "react";
import { Switch } from "react-router-dom";
import Route from "./route";

// Pages

function Routes() {
  return (
    <Switch>
      <Route path="/profile" component={<></>} isPrivate />
    </Switch>
  );
}

export default Routes;
