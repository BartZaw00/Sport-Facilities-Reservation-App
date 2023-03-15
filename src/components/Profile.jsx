import React, { useEffect, useRef, useState } from "react";

import { TfiMenu } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";

import { MenuItem } from "./index";

import { menuItemsData } from "../utils/data";

const Profile = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggleMenu(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div
      className="relative pr-1 pl-3 py-1 flex items-center gap-2 border border-gray-300 rounded-full shadow cursor-pointer hover:shadow-md"
      ref={menuRef}
      onClick={() => {
        setToggleMenu(!toggleMenu);
      }}
    >
      <TfiMenu size={15} />
      <CgProfile size={25} />
      {toggleMenu && (
        <div
          className={`${
            toggleMenu ? "flex" : "hidden"
          } absolute top-12 right-0 bg-my-primary-bg w-40 py-3 border-1 border-solid border-my-divider rounded-2xl flex-col shadow-lg z-50 animate-scale-up-center`}
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
