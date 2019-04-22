import React from "react";
import CategoryNavItem from "../generic/CategoryNavItem";

export default function CategoryNav({ categories, handleSubcat }) {
  return (
    <div className="row categoryDiv">
      <div className="container container-mobile ">
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
      </div>
    </div>
  );
}
