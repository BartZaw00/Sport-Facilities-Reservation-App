import React, { useContext } from "react";

import { ModalContext } from "../App";

const MenuItem = ({ menuOption }) => {
  const { setIsModalOpen, setSelectedOption } = useContext(ModalContext);

  const handleMenuItemClick = () => {
    if (menuOption !== "Wyloguj się") {
      setIsModalOpen(true);
      switch (menuOption) {
        case "Zarejestruj się":
          setSelectedOption("signup");
          break;
        case "Zaloguj się":
          setSelectedOption("login");
          break;
        case "Ustawienia":
          setSelectedOption("settings");
          break;
        case "Profil":
          setSelectedOption("profile");
          break;
        default:
          setSelectedOption("");
      }
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
