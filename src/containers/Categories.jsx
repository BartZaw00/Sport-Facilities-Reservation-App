import React, { useEffect, useState } from "react";
import Filter from "../components/Filter";

import { Category } from "../components/index";

import { categories } from "../utils/data";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 5) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`bg-my-primary-bg mt-24 mb-6 sm:mt-20 px-20 2xl:px-10 xl:px-8 lg:px-6 md:px-4  flex justify-between items-center ${
        isSticky
          ? "sticky top-20 shadow-sm border-solid border-b-2 border-my-divider z-30"
          : ""
      }`}
    >
      <div className="flex gap-14 whitespace-nowrap overflow-x-auto overflow-y-hidden">
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
      <Filter />
    </div>
  );
};

export default Categories;
