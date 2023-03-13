import React from "react";

import { Category } from "../components/index";

import { categories } from "../utils/data";

const Categories = () => {
  return (
    <div className="px-20 flex gap-5">
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
