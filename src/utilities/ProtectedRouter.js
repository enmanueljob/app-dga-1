import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./useAuth";

export default ({ children, redirect = "/login", ...rest }) => {
  const auth = useAuth();

  return (
    <Route {...rest}>
      {auth.isAuthenticated ? children : <Redirect to={redirect} />}
    </Route>
  );
};
