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
import i10 from "../../images/back_5.png";
import p1 from "../../images/jewelery.png";
import p2 from "../../images/clothing.png";
import p3 from "../../images/art.png";
import p4 from "../../images/craftMarkets.png";
import p5 from "../../images/beachWear.png";
import p6 from "../../images/giftItems.png";
import home_2 from "../../images/home_2.png";
import ic_settings from "../../images/icon/-e-ic_settings.svg";
import CategoryNav from "../generic/CategoryNav";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import { image_formatter } from "../../services/helper";
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false
    };
    if (props.categories) {
      const one_category = this.props.categories.find(
        item => item.name == "artisan"
      );
      if (one_category) {
        this.props.getFeaturedEvents(one_category._id);
      } else {
        this.props.getFeaturedEvents();
      }
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.categories && !this.props.featuredEvents.data) {
      const one_category = this.props.categories.find(
        item => item.name == "artisan"
      );
      if (one_category) {
        this.props.getFeaturedEvents(one_category._id);
      } else {
        this.props.getFeaturedEvents();
      }
    }
  }
  render() {
    const { categories, featuredEvents } = this.props;
    const popular = [
      { name: "Nulook Company", image: i5 },
      { name: "Amoy Yae'l Purses", image: i6 },
      { name: "Beenybud Jamaica", image: i7 },
      { name: "Island girl headwraps and more", image: i8 }
    ];
    const popularTypes = [
      { name: "jewelry", image: p1 },
      { name: "Clothing", image: p2 },
      { name: "Art", image: p3 },
      { name: "Craft Markets", image: p4 },
      { name: "Beach Wear", image: p5 },
      { name: "Gift items", image: p6 }
    ];
    return (
      <>
        {categories ? <CategoryNav categories={categories} /> : null}
        <div className="first-block row">
          <img src={i1} />
          <div className="text-block">
            <div className="title">Shop Jamaica.</div>
            <div className="sub-title">
              Jamaica's best shopping offerings at your fingertips.
            </div>
          </div>
        </div>
        <div className="second-block row">
          <img className="second-block-img" src={home_2} />
          <div className="block">
            <div className="title">
              POPULAR{" "}
              <span style={{ textDecoration: "underline" }}>ARTISAN</span>{" "}
              STORES IN KINGSTON
            </div>
            <div className="setting">
              <div className="setting-title">kingston</div>
              <img className="setting-icon" src={ic_settings} />
            </div>
          </div>
          <div className="block">
            {featuredEvents &&
            featuredEvents.data &&
            featuredEvents.data.trendingEvents &&
            featuredEvents.data.trendingEvents.results.length ? (
              featuredEvents.data.trendingEvents.results.map((item, index) => (
                <div className="popular" key={index}>
                  <img
                    src={
                      item.image
                        ? image_formatter(item.image.secure_url, 300)
                        : null
                    }
                  />
                  <div className="title">{item.title}</div>
                </div>
              ))
            ) : (
              <div className="popular">No Stores for Artisan</div>
            )}
          </div>
        </div>

        <div className="third-block row">
          <div className="third-block-pc">
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

          <div className="third-block-mobile">
            <Carousel indicators={true} controls={true}>
              <Carousel.Item>
                <img src={i2} />
                <Carousel.Caption>
                  <div className="caption">
                    <div className="desc">
                      <div className="type">Swimwear</div>
                      <div className="brand">Jae Jolly</div>
                      <Link to="/">
                        <button>ABOUT STYLE JAMAICA</button>
                      </Link>
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={i4} />
                <Carousel.Caption>
                  <div className="caption">
                    <div className="desc">
                      <div className="type">Menwear</div>
                      <div className="brand">Bill Edwards</div>
                      <Link to="/">
                        <button>ABOUT STYLE JAMAICA</button>
                      </Link>
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <img className="carouselFixedIImage" src={i9} />
          </div>
        </div>
        <div className="forth-block row">
          {featuredEvents && featuredEvents.data ? (
            <Carousel indicators={true} controls={true}>
              {featuredEvents.data.results.map((item, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={
                      item.image
                        ? image_formatter(item.image.secure_url, 1200)
                        : null
                    }
                  />
                  <Carousel.Caption>
                    <div className="caption">
                      <div className="desc">
                        <div className="type">Craft Markets</div>
                        <div>
                          A true representation of the island's unique culture
                        </div>
                      </div>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}

              {/* <Carousel.Item>
                <img src={i3} />
                <Carousel.Caption>
                  <div className="caption">
                    <div className="desc">
                      <div className="type">Menwear</div>
                      <div className="brand">Bill Edwards</div>
                      <Link to="">
                        <button>ABOUT STYLE JAMAICA</button>
                      </Link>
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item> */}
            </Carousel>
          ) : null}

          {/* <img src={i3} style={{ width: "100%" }} />
          <div className="text">
            <h2>Craft Markets</h2>
            <div>A true representation of the island's unique culture</div>
          </div> */}
        </div>
        <div
          className="fifth-block row"
          style={{
            backgroundImage: `url(${i10})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          {/* <img src={i10} style={{ width: "100%" }} /> */}
          <div className="desc col-md-9 offset-md-2 col-11 offset-1 ">
            <div className="row">
              {popularTypes.map((item, index) => {
                return (
                  <div className="popularType col-md-6 col-12" key={index}>
                    <div
                      className="popularImage"
                      style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        width: "40%",
                        borderRadius: "10px 0px 0px 10px",
                        boxShadow: "5px 2px 5px 0 rgba(0,0,0,.09)"
                      }}
                    >
                      {/* <img src={item.image} /> */}
                    </div>
                    <div className="popularTitle ">
                      <h3>{item.name}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="vertical-text">POPULAR PRODUCT TYPES</div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  featuredEvents: state.event.featuredEvents.data,
  // categories: state.event.categories.data
});

const mapDispatchToProps = dispatch => ({
  getFeaturedEvents: id => dispatch(actions.getFeaturedEventsRequest(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
