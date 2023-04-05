import React from "react";

import { Logo, Search, ProfileButton } from "../components/index";

const Navbar = ({ className, searchQuery, handleSearchQueryChange }) => {
  return (
    <div className={className}>
      <div className="flex ">
        <Logo />
      </div>
      <div className="flex justify-center sm:hidden">
        <Search
          searchQuery={searchQuery}
          handleSearchQueryChange={handleSearchQueryChange}
        />
      </div>
      <div className="flex justify-end">
        <ProfileButton />
      </div>
    </div>
  );
};

export default Navbar;
