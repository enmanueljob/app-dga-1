// @vendors
import React, { useContext } from "react";
import { Link, Switch, Route, useHistory } from "react-router-dom";
// @components
import { Page } from "../../components";
// @utilities
import { useAuth } from "../../utilities/useAuth";
import "./styles.css";

export default () => {
  const history = useHistory();
  const auth = useAuth();

  return (
    <div className="layout">
      <nav className="layout-nav">
        <ul>
          <li>
            <Link to="/layout">Home 2</Link>
          </li>
          <li>
            <Link to="/layout/page-a">Page A</Link>
          </li>
          <li>
            <Link to="/layout/page-b">Page B</Link>
          </li>
          <li>
            {auth.isAuthenticated ? (
              <button
                onClick={() => {
                  auth.logout(() => history.push("/login"));
                }}
              >
                Cerrar sesión
              </button>
            ) : (
              <Link to="/login">Iniciar sesión</Link>
            )}
          </li>
        </ul>
      </nav>
      <div className="layout-content">
        <Switch>
          <Route
            exact
            path="/layout"
            component={() => <Page color="red">Home</Page>}
          />
          <Route
            path="/layout/page-a"
            component={() => <Page color="green">Page A</Page>}
          />
          <Route
            path="/layout/page-b"
            component={() => (
              <Page color="yellow">
                <Link to="/dashboard">Dashboard</Link>
              </Page>
            )}
          />
        </Switch>
      </div>
      <div className="layout-footer">
        <div>Todos los derechos reservados 2020</div>
      </div>
    </div>
  );
};
