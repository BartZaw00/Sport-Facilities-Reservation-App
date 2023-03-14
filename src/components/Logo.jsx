import React from "react";

import logo from "../../src/assets/logo.svg";

const Logo = () => {
  return (
    <a href="/" id="logo" className="flex items-center gap-1 sm:hidden">
      <img src={logo} alt="Sportify Logo" />
      <span className="text-my-primary font-montserrat text-2xl md:hidden">
        Sportify
      </span>
    </a>
  );
};

export default Logo;
