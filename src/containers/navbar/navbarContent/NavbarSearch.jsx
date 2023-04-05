import React from "react";

import { FaSearch } from "react-icons/fa";

const NavbarSearch = ({ searchQuery, handleSearchQueryChange }) => {
  return (
    <div className="flex border border-gray-300 rounded-full overflow-hidden shadow cursor-pointer hover:shadow-md">
      <input
        className="w-96 lg:w-80 2sm:w-56 px-4 py-2 text-gray-700 outline-none cursor-pointer"
        placeholder="Szukaj..."
        value={searchQuery}
        onChange={handleSearchQueryChange}
      />
      <FaSearch className="w-4 h-4 my-auto mx-3 text-my-primary" />
    </div>
  );
};

export default NavbarSearch;
