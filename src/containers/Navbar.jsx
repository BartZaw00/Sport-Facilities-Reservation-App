import React from "react";

import { Logo, Search, ProfileButton } from "../components/index";

const Navbar = ({ handleModalOpenClick, className }) => {
  return (
    <div className={className}>
      <div className="flex sm:hidden">
        <Logo />
      </div>
      <div className="flex justify-center">
        <Search />
      </div>
      <div className="flex justify-end">
        <ProfileButton handleModalOpenClick={handleModalOpenClick} />
      </div>
    </div>
  );
};

export default Navbar;
