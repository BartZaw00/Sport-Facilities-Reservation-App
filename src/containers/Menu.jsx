import React from "react";

import { MenuItem } from "../components";

const Menu = ({ handleModalOpenClick }) => {
  return (
    <div className="absolute top-12 right-0 bg-my-primary-bg w-40 py-3 border-2 border-solid border-my-divider rounded-2xl flex flex-col shadow-lg z-50 animate-scale-up-center">
      <MenuItem
        menuOption="Zarejestruj się"
        handleModalOpenClick={handleModalOpenClick}
      />
      <MenuItem
        menuOption="Zaloguj się"
        handleModalOpenClick={handleModalOpenClick}
      />
      <MenuItem
        menuOption="Ustawienia"
        handleModalOpenClick={handleModalOpenClick}
      />
      <MenuItem
        menuOption="Profil"
        handleModalOpenClick={handleModalOpenClick}
      />
      <MenuItem
        menuOption="Wyloguj się"
      />
    </div>
  );
};

export default Menu;
