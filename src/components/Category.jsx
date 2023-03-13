import React from "react";

const Category = ({ category }) => {
  return (
    <div className="opacity-70 pt-5 pb-3 flex flex-col gap-1 items-center border-my-category-border cursor-pointer hover:border-b-2">
      <img src={category?.icon} alt={category?.name} />
      <span className="text-xs">{category?.name}</span>
    </div>
  );
};

export default Category;
