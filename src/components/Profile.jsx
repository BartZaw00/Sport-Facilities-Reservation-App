import React, { useEffect, useRef, useState } from "react";

import { TfiMenu } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";

import Menu from "../containers/Menu";

const Profile = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
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

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setToggleMenu(false);
  };

  // const getModalContent = (option) => {
  //   switch (option) {
  //     case "Zarejestruj się":
  //       return <SignUpModal />;
  //     case "Zaloguj się":
  //       return <LogInModal />;
  //     case "Ustawienia":
  //       return <SettingsModal />;
  //     default:
  //       return null;
  //   }
  // };

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
        <Menu
          //getModalContent={getModalContent}
          handleOptionClick={handleOptionClick}
        />
      )}
    </div>
  );
};

export default Profile;
