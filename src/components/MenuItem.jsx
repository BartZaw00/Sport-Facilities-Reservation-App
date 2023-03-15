import React from "react";

const MenuItem = ({ menuOption }) => {
  return (
    <a
      className={`${
        menuOption.item === "Zarejestruj się" ? "font-semibold" : ""
      } ${
        menuOption.item === "Zaloguj się" ? "border-b-2" : ""
      } hover:bg-my-divider px-3 py-2 my-1`}
    >
      {menuOption?.item}
    </a>
  );
};

export default MenuItem;
