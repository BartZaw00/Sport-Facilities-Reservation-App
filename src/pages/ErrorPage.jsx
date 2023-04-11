import React from "react";
import logo from "../assets/logo.svg";
import Navbar from "../containers/navbar/Navbar";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-my-primary-bg">
      <Navbar className="max-w-[2000px] h-20 bg-my-primary-bg fixed top-0 w-full grid px-96 2xl:px-60 xl:px-32 lg:px-6 md:px-4 grid-cols-3 sm:grid-cols-2 lg:flex lg:justify-between items-center border-solid border-b-2 border-my-divider z-40" />
      <img src={logo} alt="Logo" className="w-32 mb-8" />
      <h1 className="text-4xl text-my-primary-green font-bold mb-8">
        Oops! Coś poszło nie tak.
      </h1>
      <p className="text-lg text-my-primary-text text-center mb-4">
        Podana strona nie istnieje. Spróbuj ponownie później.
      </p>
    </div>
  );
};

export default ErrorPage;
