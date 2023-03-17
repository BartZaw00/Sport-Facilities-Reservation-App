import React, { useContext } from "react";

import { ModalContext } from "../pages/HomePage";

const MenuItem = ({ menuOption, handleModalOpenClick }) => {
  const { setIsModalOpen } = useContext(ModalContext);

  const handleMenuItemClick = () => {
    setIsModalOpen(true);
    switch (menuOption) {
      case "Zarejestruj się":
        handleModalOpenClick("signup");
        break;
      case "Zaloguj się":
        handleModalOpenClick("login");
        break;
      case "Ustawienia":
        handleModalOpenClick("settings");
        break;
      default:
        handleModalOpenClick("");
    }
  };

  return (
    <a
      className={`${menuOption === "Zarejestruj się" ? "font-semibold" : ""} ${
        menuOption === "Zaloguj się" ? "border-b-2" : ""
      } hover:bg-my-divider px-3 py-2 my-1`}
      onClick={handleMenuItemClick}
    >
      {menuOption}
    </a>
  );
};

export default MenuItem;
