import React from "react";
import { NavbarLogo, NavbarProfileButton, NavbarSearch } from "./navbarContent";

const Navbar = ({ className, searchQuery, handleSearchQueryChange }) => {
  return (
    <div className={className}>
      <div className="flex ">
        <NavbarLogo />
      </div>
      <div className="flex justify-center sm:hidden">
        <NavbarSearch
          searchQuery={searchQuery}
          handleSearchQueryChange={handleSearchQueryChange}
        />
      </div>
      <div className="flex justify-end">
        <NavbarProfileButton />
      </div>
    </div>
  );
};

export default Navbar;
