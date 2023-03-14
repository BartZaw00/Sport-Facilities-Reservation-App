import React from "react";

const MenuItem = ({ menuOption }) => {
  return (
    <a
      className={`${
        menuOption.item === "Zarejestruj się" ? "font-semibold" : ""
      } hover:bg-my-divider px-3 py-2`}
    >
      {menuOption?.item}
    </a>
  );
};

export default MenuItem;
