import React, { useContext, useState, createContext } from "react";
import axios from "axios";
import validarSesion from "./validarSesion";

const Context = createContext({});

export const AuthProvider = props => {
  const sesion = validarSesion();
  const [isAuthenticated, setIsAuthenticated] = useState(sesion);

  const login = async (user, callback) => {
    const res = await axios.post(
      "https://login-test-dga.herokuapp.com/login",
      user
    );

    if (res.data.response) {
      localStorage.setItem("username", user.username);
      localStorage.setItem("password", user.password);
      setIsAuthenticated(true);
      callback();
    }
  };

  const logout = callback => {
    localStorage.setItem("username", "");
    localStorage.setItem("password", "");
    setIsAuthenticated(false);
    callback();
  };

  return (
    <Context.Provider value={{ isAuthenticated, login, logout }}>
      {props.children}
    </Context.Provider>
  );
};

export const useAuth = () => {
  return useContext(Context);
};
