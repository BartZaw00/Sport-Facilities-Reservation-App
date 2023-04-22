import React from "react";
import logo from "../../../assets/logo.svg";

const NavbarLogo = () => {
  return (
    <a href="/" id="logo" className="flex items-center gap-1">
      <img src={logo} alt="Sportify Logo" />
      <span className="text-my-primary font-montserrat text-2xl lg:hidden">
        SportBook
      </span>
    </a>
  );
};

export default NavbarLogo;
