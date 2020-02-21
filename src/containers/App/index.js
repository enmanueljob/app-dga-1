// @vendors
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// @components
import Layout from "../Layout";
import Dashboard from "../Dashboard";
import Login from "../Login";
// @utilities
import ProtectedRoute from "../../utilities/ProtectedRouter";
import "./styles.css";

export const AuthContext = React.createContext();

export default function App() {
  return (
    <Switch>
      <Route path="/layout" component={Layout} />
      <ProtectedRoute path="/dashboard">
        <Dashboard />
      </ProtectedRoute>
      <Route path="/login" component={Login} />
    </Switch>
  );
}
