import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { store } from "~/store";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed } = store.getState().auth.status;

  if (!signed && isPrivate) return <Redirect to="/signIn" />;

  //   if (signed && !isPrivate)
  //     return <Redirect to="/home" />;

  return <Route {...rest} render={(props) => <Component {...props} />} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
  component: <></>,
};
