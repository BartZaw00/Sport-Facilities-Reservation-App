import React from "react";

import { Logo, Search, ProfileButton } from "../components/index";

const Navbar = ({ className, searchQuery, handleSearchQueryChange }) => {
  return (
    <div className={className}>
      <div className="flex sm:hidden">
        <Logo />
      </div>
      <div className="flex justify-center">
        <Search searchQuery={searchQuery} handleSearchQueryChange={handleSearchQueryChange}/>
      </div>
      <div className="flex justify-end">
        <ProfileButton />
      </div>
    </div>
  );
};

export default Navbar;
