import React from "react";

const MenuItem = ({ menuOption, getModalContent, handleOptionClick }) => {
  const handleMenuItemClick = () => {
    handleOptionClick(menuOption.item);
  };

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
