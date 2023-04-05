import React from "react";
import useAuth from "../../../hooks/useAuth";
import NavbarMenuItem from "./NavbarMenuItem";

const NavbarMenu = () => {
  const { user } = useAuth();

  return (
    <div className="absolute top-12 right-0 bg-my-primary-bg w-40 py-3 border-2 border-solid border-my-divider rounded-2xl flex flex-col shadow-lg z-50 animate-scale-up-center">
      {user ? (
        <>
          <NavbarMenuItem menuOption="Profil" />
          <NavbarMenuItem menuOption="Rezerwacje" />
          <NavbarMenuItem menuOption="Ustawienia" />
          <NavbarMenuItem menuOption="Wyloguj się" />
        </>
      ) : (
        <>
          <NavbarMenuItem menuOption="Zarejestruj się" />
          <NavbarMenuItem menuOption="Zaloguj się" />
          <NavbarMenuItem menuOption="Ustawienia" />
        </>
      )}
    </div>
  );
};

export default NavbarMenu;
