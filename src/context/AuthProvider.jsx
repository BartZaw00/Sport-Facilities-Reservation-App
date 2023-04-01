import React, { useEffect } from "react";
import { createContext, useState } from "react";
import jwt from "jwt-decode";
import Cookies from "universal-cookie";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const cookies = new Cookies();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const login = (userData) => {
    const { token } = userData;
    const decoded = jwt(token);

    setUser(userData);
    localStorage.setItem("userData", JSON.stringify(userData));
    cookies.set("jwt_authorization", token, {
      expires: new Date(decoded.exp * 1000),
      httpOnly: true,
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("userData");
    cookies.remove("jwt_authorization");
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
