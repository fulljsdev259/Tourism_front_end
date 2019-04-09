import React from "react";
import CategoryNavItem from "../generic/CategoryNavItem";
import { Link } from "react-router-dom";

export default function CategoryNav2({ categories, location, cat }) {
  return (
    <div className="category-nav2 col-md-8 offset-md-2 col-12">
      {categories.map((category, index) => (
        <div className="category-nav-item2 " key={index}>
          <div className="category-nav-item-header2">
            <div className="category-img2">
              <img src={category.image} />
            </div>
            <div className="title2">
              <Link
                to={category.path}
                style={{ textTransform: "capitalize" }}
                className={category.name == cat.name && "active-link"}
              >
                {category.name.replace("_", " ")}
              </Link>
              {/* {location.pathname==category.path && alert('true')} */}
            </div>
          </div>
          {category.subCategory && category.subCategory.length ? (
            <div className="category-nav-item-dropdown2 rounded-bottom">
              <ul className="list-unstyled">
                {category.subCategory.map((sub_category, i) => (
                  <li key={i}>
                    <Link
                      to={category.path}
                      style={{ textTransform: "capitalize" }}
                    >
                      {sub_category.name.replace("_", " ")}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
