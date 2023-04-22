import React, { useContext, useLayoutEffect } from "react";
import { ModalContext } from "../../../App";
import useAuth from "../../../hooks/useAuth";

const NavbarMenuItem = ({ menuOption }) => {
  const { logout } = useAuth();

  const { setIsModalOpen, setSelectedOption } = useContext(ModalContext);

  const handleMenuItemClick = () => {
    if (menuOption === "Wyloguj się") {
      logout();
      return;
    }

    setIsModalOpen(true);
    setSelectedOption(getSelectedOption(menuOption));
  };

  const getSelectedOption = (menuOption) => {
    switch (menuOption) {
      case "Zarejestruj się":
        return "signup";
      case "Zaloguj się":
        return "login";
      case "Ustawienia":
        return "settings";
      case "Profil":
        return "profile";
      case "Rezerwacje":
        return "reservations";
      default:
        return "";
    }
  };

  return (
    <a
      className={`${
        menuOption === "Zarejestruj się" || menuOption === "Profil"
          ? "font-semibold"
          : ""
      } ${
        menuOption === "Zaloguj się" || menuOption === "Rezerwacje"
          ? "border-b-2"
          : ""
      } hover:bg-my-divider active:bg-my-divider-active px-3 py-2 my-1`}
      onClick={handleMenuItemClick}
    >
      {menuOption}
    </a>
  );
};

export default NavbarMenuItem;
