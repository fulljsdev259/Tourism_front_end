import React from "react";
import CategoryNavItem from "../generic/CategoryNavItem";

export default function CategoryNav({ categories, handleSubcat }) {
  return (
    <div className="category-nav row">
      {categories &&
        categories.map((category, index) => (
          <CategoryNavItem
            key={index}
            category={category}
            handleSubcat={handleSubcat}
          />
        ))}
    </div>
  );
}
