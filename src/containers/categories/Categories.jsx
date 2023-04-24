import React, { useEffect, useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { categories } from "../../utils/data";
import { CategoriesCategory, CategoriesFilterButton} from "./categoriesContent";

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const categoriesRef = useRef(null);

  // Updating the sticky state based on window scroll position
  useEffect(() => {
    const handleScrollY = () => {
      const offset = window.scrollY;
      if (offset > 5) setIsSticky(true);
      else setIsSticky(false);
    };

    window.addEventListener("scroll", handleScrollY);

    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, []);

  // Updating arrow visibility based on the scroll position of the categories container
  useEffect(() => {
    const categoriesDiv = categoriesRef.current;
    const handleScrollX = () => {
      if (categoriesDiv.scrollLeft > 0) {
        setShowLeftArrow(true);
      } else {
        setShowLeftArrow(false);
      }

      if (
        categoriesDiv.scrollWidth - categoriesDiv.scrollLeft <=
        categoriesDiv.clientWidth
      ) {
        setShowRightArrow(false);
      } else {
        setShowRightArrow(true);
      }
    };
    categoriesDiv.addEventListener("scroll", handleScrollX);
    return () => categoriesDiv.removeEventListener("scroll", handleScrollX);
  }, []);

  // Swipe Left when left arrow button clicked
  const handleLeftArrowClick = () => {
    const categoriesDiv = categoriesRef.current;
    const scrollDistance = categoriesDiv.scrollWidth * 0.2;
    categoriesDiv.scrollTo({
      left: categoriesDiv.scrollLeft - scrollDistance,
      behavior: "smooth",
    });
  };

  // Swipe Right when left arrow button clicked
  const handleRightArrowClick = () => {
    const categoriesDiv = categoriesRef.current;
    const scrollDistance = categoriesDiv.scrollWidth * 0.2;
    categoriesDiv.scrollTo({
      left: categoriesDiv.scrollLeft + scrollDistance,
      behavior: "smooth",
    });
  };

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
  }

  return (
    <aside
      className={`max-w-[2000px] bg-my-primary-bg mt-24 sm:mt-20 px-20 2xl:px-10 xl:px-8 lg:px-6 md:px-4 flex items-center ${
        isSticky
          ? "sticky top-20 shadow-sm border-solid border-b-2 border-my-divider z-30"
          : ""
      }`}
    >
      {showLeftArrow && (
        <div
          className="p-1 border border-my-scrollbar-btn rounded-full cursor-pointer hover:shadow-lg hover:scale-105"
          onClick={handleLeftArrowClick}
        >
          <AiOutlineLeft />
        </div>
      )}
      <div
        ref={categoriesRef}
        className="flex gap-14 sm:gap-8 whitespace-nowrap overflow-x-auto overflow-y-hidden scrollbar-hide"
      >
        {categories.map((item) => (
          <CategoriesCategory
            key={item.id}
            category={item}
            selectedCategory={selectedCategory}
            handleCategoryChange={(newCategory) => handleCategoryChange(newCategory)}
          />
        ))}
      </div>
      <div
        className={`${
          showRightArrow ? "block" : "invisible"
        } p-1 border border-my-scrollbar-btn rounded-full mr-8 cursor-pointer hover:shadow-lg hover:scale-105`}
        onClick={handleRightArrowClick}
      >
        <AiOutlineRight />
      </div>
      <div className="ml-auto">
        <CategoriesFilterButton />
      </div>
    </aside>
  );
};

export default Categories;
