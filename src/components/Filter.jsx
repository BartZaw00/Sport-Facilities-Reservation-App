import React from "react";

import { FaFilter } from "react-icons/fa";

const Filter = () => {
  return (
    <div className="px-4 py-3 flex items-center gap-2 border border-gray-300 rounded-2xl shadow cursor-pointer hover:shadow-md">
      <FaFilter size={10}/>
      <span className="text-sm">Filtry</span>
    </div>
  );
};

export default Filter;
