import React, { useState } from "react";

import { TfiMenu } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";

import { MenuItem } from "./index";

import { menuItemsData } from "../utils/data";

const Profile = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div
      className="relative pr-1 pl-3 py-1 flex items-center gap-2 border border-gray-300 rounded-full shadow cursor-pointer hover:shadow-md"
      onClick={() => {
        toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
      }}
    >
      <TfiMenu size={15} />
      <CgProfile size={25} />
      {toggleMenu && (
        <div
          className={`${
            toggleMenu ? 'flex' : 'hidden'
          } absolute top-12 right-0 bg-my-primary-bg w-56 py-5 px-3 border-2 border-solid border-my-divider rounded-2xl flex-col gap-5 shadow-lg z-50`}
        >
          {menuItemsData.map((menuItem) => {
            return <MenuItem key={menuItem.id} menuOption={menuItem} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Profile;
