import React from "react";

import { Logo, Search, Profile } from "../components/index";

const Navbar = () => {
  return (
    <div className="h-20 bg-my-primary-bg fixed top-0 w-full px-20 2xl:px-10 xl:px-8 lg:px-6 md:px-4 grid lg:flex lg:justify-between grid-cols-3 sm:grid-cols-2 items-center border-solid border-b-2 border-my-divider z-40">
      <div className="flex sm:hidden">
        <Logo />
      </div>
      <div className="flex justify-center">
        <Search />
      </div>
      <div className="flex justify-end">
        <Profile />
      </div>
    </div>
  );
};

export default Navbar;
