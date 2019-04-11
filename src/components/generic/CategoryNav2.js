import React from "react";
import CategoryNavItem from "../generic/CategoryNavItem";
import { Link } from "react-router-dom";

export default function CategoryNav2({ categories, location, cat, getSubCategory, history }) {
  return (
    <div className="category-nav2 col-lg-8 col-md-10 col-sm-10 col-xs-10 offset-sm-1 offset-md-1 offset-lg-2 p-0">
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
                className={category.name == cat.name ? "active-link" : ''}
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
                    {/* <Link
                      to={category.path}
                      style={{ textTransform: "capitalize" }}
                      onClick={()=>getSubCategory(sub_category._id)}
                    >
                      {sub_category.name.replace("_", " ")}
                    </Link> */}
                    <a onClick={()=>{getSubCategory(sub_category._id);history.push(category.path)}}>
                      {sub_category.name.replace("_", " ")}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      )
      )}
    </div>
  );
}
