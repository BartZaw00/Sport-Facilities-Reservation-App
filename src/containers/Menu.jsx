import React from "react";

import { MenuItem } from "../components";
import { menuItemsData } from "../utils/data";

const Menu = ({ getModalContent, handleOptionClick }) => {
  return (
    <div className="absolute top-12 right-0 bg-my-primary-bg w-40 py-3 border-2 border-solid border-my-divider rounded-2xl flex flex-col shadow-lg z-50 animate-scale-up-center">
      {menuItemsData.map((menuItem) => {
        return (
          <MenuItem
            key={menuItem.id}
            menuOption={menuItem}
            getModalContent={getModalContent}
            handleOptionClick={handleOptionClick}
          />
        );
      })}
    </div>
  );
};

export default Menu;
