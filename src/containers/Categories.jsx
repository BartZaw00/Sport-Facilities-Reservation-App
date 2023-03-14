import React, { useEffect, useState } from "react";

import { Category } from "../components/index";

import { categories } from "../utils/data";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);

  return (
    <div className="bg-my-primary-bg sticky top-20 mt-24 mb-6 px-20 flex gap-8">
      {categories.map((item) => (
        <Category
          key={item.id}
          category={item}
          selectedCategory={selectedCategory}
          onClick={(newCategory) => {
            setSelectedCategory(newCategory);
          }}
        />
      ))}
    </div>
  );
};

export default Categories;
