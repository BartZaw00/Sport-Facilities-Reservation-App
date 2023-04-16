import React, { useEffect, useRef, useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import NavbarMenu from "./NavbarMenu";
import { ProfilePicture } from "../../../components/sharedComponents";
import useAuth from "../../../hooks/useAuth";

const NavbarProfileButton = () => {
  const { user } = useAuth();
  const [toggleMenu, setToggleMenu] = useState(false);
  const menuRef = useRef(null);

  // Close menu while clicking outside of it
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
  }, []);

  // Open/Close menu while clicking on profile button
  const handleProfileButtonClick = () => {
    setToggleMenu(!toggleMenu);
  };

  // Close menu while clicking on menu option
  const handleOptionClick = () => {
    setToggleMenu(false);
  };

  return (
    <div
      className="relative pr-1 pl-3 py-1 flex items-center gap-2 border border-gray-300 rounded-full shadow cursor-pointer hover:shadow-md"
      ref={menuRef}
      onClick={handleProfileButtonClick}
    >
      <TfiMenu size={15} />
      <ProfilePicture
        src={user?.photoUrl}
        alt="Profile picture"
        navbar={true}
      />
      {toggleMenu && <NavbarMenu handleOptionClick={handleOptionClick} />}
    </div>
  );
};

export default NavbarProfileButton;
