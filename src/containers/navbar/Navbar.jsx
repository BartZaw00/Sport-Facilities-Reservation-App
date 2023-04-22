import React from "react";
import { NavbarLogo, NavbarProfileButton, NavbarSearch } from "./navbarContent";

const Navbar = ({ searchQuery, handleSearchQueryChange, isHomePage }) => {
  return (
    <nav
      className={`max-w-[2000px] h-20 bg-my-primary-bg fixed top-0 w-full grid ${
        isHomePage ? "px-20 2xl:px-10 xl:px-8" : "px-96 2xl:px-60 xl:px-32"
      }  lg:px-6 md:px-4 grid-cols-3 sm:grid-cols-2 lg:flex lg:justify-between items-center border-solid border-b-2 border-my-divider z-40`}
    >
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
    </nav>
  );
};

export default Navbar;
