import React, { useEffect } from "react";
import { createContext, useState } from "react";
import jwt from "jwt-decode";
import Cookies from "universal-cookie";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const cookies = new Cookies();

  const [user, setUser] = useState(null);

  // Using the useEffect hook to set the user state if user data is available in localStorage
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  // Defining a function to handle user login
  const login = (userData) => {
    // Extracting the JWT token from the user data
    const { token, ...userDataWithoutToken } = userData;

    // Decoding the JWT token to get the expiration date
    const decoded = jwt(token);

    // Updating the user state to remove the token
    setUser(userDataWithoutToken);

    // Storing the user data in localStorage
    localStorage.setItem("userData", JSON.stringify(userDataWithoutToken));

    // Setting a cookie with the JWT token, with an expiration date and httpOnly flag
    cookies.set("jwt_authorization", token, {
      expires: new Date(decoded.exp * 1000),
      httpOnly: true,
    });
  };

  // Defining a function to handle user update
  const updateUser = (updatedUserData) => {
    setUser(updatedUserData);
  };

  // Defining a function to handle user logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("userData");
    cookies.remove("jwt_authorization");
  };

  // Providing the user state and authentication functions through the context provider
  return (
    <AuthContext.Provider value={{ user, login, updateUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
