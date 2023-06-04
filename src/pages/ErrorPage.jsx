import React from "react";
import logo from "../assets/logo.svg";
import Navbar from "../containers/navbar/Navbar";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-my-primary-bg">
      <Navbar />
      <img src={logo} alt="Logo" className="w-32 mb-8" />
      <h1 className="text-4xl text-my-primary-green font-bold mb-8 sm:text-3xl sm:text-center">
        Oops! Coś poszło nie tak.
      </h1>
      <p className="text-lg text-my-primary-text text-center mb-4">
        Podana strona nie istnieje. Spróbuj ponownie później.
      </p>
      <footer className="bg-gray-800 py-4 text-center text-white">
        <p>&copy; {new Date().getFullYear()} Bartosz Zawadka</p>
      </footer>
    </div>
  );
};

export default ErrorPage;
