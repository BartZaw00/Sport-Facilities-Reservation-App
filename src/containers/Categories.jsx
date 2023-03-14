import React, { useEffect, useState } from "react";

import { Category } from "../components/index";

import { categories} from "../utils/data";

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
    <div className={`bg-my-primary-bg mt-24 mb-6 px-20 md:px-4 flex gap-8 ${isSticky ? 'sticky top-20 shadow-sm border-solid border-b-2 border-my-divider z-30' : ''}`}>
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
