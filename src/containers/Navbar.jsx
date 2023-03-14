import React from "react";

import { Logo, Search, Profile } from "../components/index";

const Navbar = () => {
  return (
    <div className="bg-my-primary-bg fixed top-0 w-full px-20 py-2 flex items-center justify-between border-solid border-b-2 border-my-divider z-50">
      <Logo />
      <Search />
      <Profile />
    </div>
  );
};

export default Navbar;
