import React from "react";

import { MenuItem } from "../components";

const Menu = () => {
  return (
    <div className="absolute top-12 right-0 bg-my-primary-bg w-40 py-3 border-2 border-solid border-my-divider rounded-2xl flex flex-col shadow-lg z-50 animate-scale-up-center">
      <MenuItem menuOption="Zarejestruj się" />
      <MenuItem menuOption="Zaloguj się" />
      <MenuItem menuOption="Ustawienia" />
    </div>
  );
};

export default Menu;
