import React, { useContext } from "react";

import { ModalContext } from "../pages/HomePage";

const MenuItem = ({ menuOption }) => {
  const { setIsModalOpen } = useContext(ModalContext);

  const handleMenuItemClick = () => {
    setIsModalOpen(true);
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
