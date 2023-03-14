import React from "react";

const MenuItem = ({ menuOption }) => {
  return (
    <a className={`${menuOption.id === 1} 'font-bold' : ''`}>
      {menuOption?.item}
    </a>
  );
};

export default MenuItem;
