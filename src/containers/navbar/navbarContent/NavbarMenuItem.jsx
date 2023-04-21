import React, { useContext, useLayoutEffect } from "react";
import { ModalContext } from "../../../App";
import useAuth from "../../../hooks/useAuth";

const NavbarMenuItem = ({ menuOption }) => {
  const { logout } = useAuth();

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
        case "Rezerwacje":
          setSelectedOption("reservations");
          break;
        default:
          setSelectedOption("");
      }
    } else {
      logout();
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
