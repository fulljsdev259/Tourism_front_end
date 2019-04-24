import React from "react";
import CategoryNavItem from "../generic/CategoryNavItem";
import MenuImage from "../../images/menuImage.svg";

export default function CategoryNav({ categories, handleSubcat }) {
  return (
    <div className="row categoryDiv">
      {/* <div > */}
        <img  className='homePageImage' src={MenuImage} />
      {/* </div> */}
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
