import React, { useContext } from "react";

import { FaFilter } from "react-icons/fa";

import { ModalContext } from "../../../App";

const CategoriesFilterButton = () => {
  const { setIsModalOpen, setSelectedOption } = useContext(ModalContext);

  const handleFilterClick = () => {
    setIsModalOpen(true);
    setSelectedOption("filter");
  };

  return (
    <div
      className="px-4 py-3 flex items-center gap-2 border border-gray-300 rounded-2xl shadow cursor-pointer hover:shadow-md"
      onClick={handleFilterClick}
    >
      <FaFilter size={10} />
      <span className="text-sm">Filtry</span>
    </div>
  );
};

export default CategoriesFilterButton;
