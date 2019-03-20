import React, { Component } from "react";
import i1 from "../../images/1.png";
import i2 from "../../images/2.png";
import i3 from "../../images/3.png";
import i4 from "../../images/4.png";
import i5 from "../../images/5.png";
import i6 from "../../images/6.png";
import i7 from "../../images/7.png";
import i8 from "../../images/8.png";
import i9 from "../../images/9.svg";
import i10 from "../../images/10.svg";
import category1 from "../../images/category1.svg";
import category2 from "../../images/category2.svg";
import category3 from "../../images/category3.svg";
import category4 from "../../images/category4.svg";
import home_2 from "../../images/home_2.png";
import ic_settings from "../../images/icon/-e-ic_settings.svg";
import CategoryNav from "../generic/CategoryNav";

export default class index extends Component {
  render() {
    const categories = [
      {
        name: "Duty Free",
        image: category1,
        sub_categories: ["Alcohol", "Electronics", "Jewelry", "Souvenir Shops"],
        path: "/food"
      },
      {
        name: "Artisan",
        image: category2,
        sub_categories: ["Alcohol", "Electronics", "Jewelry", "Souvenir Shops"],
        path: "/SPA"
      },
      {
        name: "Crafts",
        image: category3,
        sub_categories: ["Alcohol", "Electronics", "Jewelry", "Souvenir Shops"],
        path: "/fitness"
      },
      {
        name: "Retails",
        image: category4,
        sub_categories: ["Alcohol", "Electronics", "Jewelry", "Souvenir Shops"],
        path: "/shopping"
      }
    ];
    const popular = [
      { name: "Nulook Company", image: i5 },
      { name: "Amoy Yae'l Purses", image: i6 },
      { name: "Beenybud Jamaica", image: i7 },
      { name: "Island girl headwraps and more", image: i8 }
    ];
    return (
      <>
        <CategoryNav categories={categories} />
        <div className="first-block">
          <img src={i1} />
          <div className="text-block">
            <div className="title">Shop Jamaica.</div>
            <div className="sub-title">
              Jamaica's best shopping offerings at your fingertips.
            </div>
          </div>
        </div>
        <div className="second-block">
          <img src={home_2} />
          <div className="block">
            <div className="title">POPULAR ARTISAN STORES IN KINGSTON</div>
            <div className="setting">
              <div className="setting-title">kingston</div>
              <img className="setting-icon" src={ic_settings} />
            </div>
          </div>
          <div className="block">
            {popular.map((item, index) => (
              <div className="popular" key={index}>
                <img src={item.image} />
                <div className="title">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="third-block">
          <img src={i2} style={{ width: "42%" }} />
          <div className="desc">
            <div className="type">Swimwear</div>
            <div className="brand">Jae Jolly</div>
            <button>ABOUT STYLE JAMAICA</button>
          </div>
          <img src={i9} style={{ width: "8%", margin: "4%" }} />
          <img src={i4} style={{ width: "42%" }} />
          <div className="desc">
            <div className="type">Menwear</div>
            <div className="brand">Bill Edwards</div>
            <button>ABOUT STYLE JAMAICA</button>
          </div>
        </div>
        <div className="forth-block">
          <img src={i3} style={{ width: "100%" }} />
          <div className="text">
            <div>A true representation of the island's unique culture</div>
          </div>
        </div>
        <div>
          <img src={i10} style={{ width: "100%" }} />
        </div>
      </>
    );
  }
}
