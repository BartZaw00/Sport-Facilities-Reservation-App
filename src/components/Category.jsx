import React from "react";

const Category = ({ category, onClick, selectedCategory }) => {
  return (
    <div
      className={`${
        category.id === selectedCategory
          ? "opacity-100 border-my-primary-text border-b-2"
          : "opacity-50 border-my-category-border hover:border-b-2"
      } pt-5 pb-3 flex flex-col gap-2 items-center cursor-pointer hover:opacity-100 active:-translate-y-0.5`}
      onClick={() => onClick(category.id)}
    >
      <img src={category?.icon} alt={category?.name} />
      <span className="text-xs">{category?.name}</span>
    </div>
  );
};

export default Category;
