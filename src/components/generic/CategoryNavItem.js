import React from "react";

export default function CategoryNavItem({ category }) {
  return (
    <div className="category-nav-item">
      <div className="category-img">
        <img src={category.image} />
      </div>
      <div className="title">{category.name}</div>
      {category.sub_categories && (
        <div className="category-nav-item-dropdown rounded-bottom">
          <ul className="list-unstyled">
            {category.sub_categories.map((sub_category, i) => (
              <li key={i}>
                <a href="#">{sub_category}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
