import React from "react";
import CategoryNavItem from "../generic/CategoryNavItem";

export default function CategoryNav({ categories }) {
  return (
    <div className="category-nav row">
      {categories.map((category, index) => (
        <CategoryNavItem key={index} category={category} />
      ))}
    </div>
  );
}
