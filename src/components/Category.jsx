import React from "react";

const Category = ({ category }) => {
  return (
    <div className="flex flex-col gap-1 items-center">
      <img src={category?.icon} alt={category?.name} />
      <span className="text-xs pb-2">{category?.name}</span>
    </div>
  );
};

export default Category;
