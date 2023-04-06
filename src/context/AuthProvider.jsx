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
    const { token, ...userDataWithoutToken } = userData;
    const decoded = jwt(token);

    setUser(userDataWithoutToken);

    localStorage.setItem("userData", JSON.stringify(userDataWithoutToken));
    cookies.set("jwt_authorization", token, {
      expires: new Date(decoded.exp * 1000),
      httpOnly: true,
    });
  };

  const updateUser = (updatedUserData) => {
    setUser(updatedUserData);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("userData");
    cookies.remove("jwt_authorization");
  };
  return (
    <AuthContext.Provider value={{ user, login, updateUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
