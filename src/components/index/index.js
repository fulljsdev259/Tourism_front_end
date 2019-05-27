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
import placeholder_img from "../../images/placeholder.jpg";
import ic_settings from "../../images/icon/-e-ic_settings.svg";
import CategoryNav from "../generic/CategoryNav";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import { image_formatter } from "../../services/helper";
import mapMarker from "../../images/icon/location_w.svg";
import MenuImage from "../../images/menuImage.svg";
import Loader from "react-loader-spinner";

let bannerUrlIndex = "";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      stateName: "",
      stateId: "",
      show:false
    };
    if (props.categories) {
      const one_category = this.props.categories.find(
        item => item.name == "artisan"
      );
      if (one_category) {
        this.props.getFeaturedEvents(one_category.id);
      }
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate(prevProps) {
    if (this.props.categories && !this.props.featuredEvents.data) {
      const one_category = this.props.categories.find(
        item => item.name == "artisan"
      );
      if (one_category) {
        this.props.getFeaturedEvents(one_category.id);
      }
    }
  }

  handleInputChange = state => {
    this.setState({ stateName: state.name, stateId: state._id ,show:false});
  };
  listHover=()=>{
    console.log('222222222222222')
    this.setState({
      show:true
    })
  }

  listHoverOut=()=>{
    console.log('11111111111222222222222222')
    this.setState({
      show:false
    })
  }
  onAboutJamicaClick=()=>{
    this.props.history.push("/about-style-jamica")
  }
  render() {    
    const { categories, featuredEvents, places } = this.props;
    if (this.state.stateId == "" && places.data) {
      this.setState({
        stateId: places.data[0]._id,
        stateName: places.data[0].name
      });
    }
    
     (featuredEvents.data && featuredEvents.data.homepageDetails)
      ?bannerUrlIndex = Math.floor(Math.random() * (+(featuredEvents.data.homepageDetails.length) - +(0)))
      :bannerUrlIndex = ""
      
    const popular = [
      { name: "Nulook Company", image: i5 },
      { name: "Amoy Yae'l Purses", image: i6 },
      { name: "Beenybud Jamaica", image: i7 },
      { name: "Island girl headwraps and more", image: i8 }
    ];    
    return (
      <>
      
        { (featuredEvents.data && featuredEvents.data.homepageDetails)?
        (<div
          className="first-block row "
          style={{
            
            backgroundImage: `url(${(featuredEvents.data && featuredEvents.data.homepageDetails[bannerUrlIndex].image.secure_url)?featuredEvents.data.homepageDetails[bannerUrlIndex].image.secure_url:null})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="text-block container">
            <div className="title">Shop Jamaica.</div>
            <div className="sub-title">
              Jamaica's best shopping offerings at your fingertips.
            </div>
          </div>
          <img className="block1-menuImage" src={MenuImage} />
        </div>)
        :
        (
              <div className="loader-div" style={{ margin: "40px auto" }}>
                <Loader type="Oval" color="#555" height="30" />
              </div>
            )
        }
          {categories && window.screen.width<769 ? (
          <CategoryNav
            categories={categories}
            handleSubcat={this.props.handleSubcat}
          />
        ) : null}
        <div
          className="second-block row"
          style={{
            backgroundImage: `url(${home_2})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <div className="block block1_1 container">
            <div className="block-title" style={{ textTransform: "uppercase" }}>
              POPULAR{" "}
              <span
                onClick={() => this.props.history.push("/artisan")}
              >
                ARTISAN
              </span>{" "}
              STORES IN {this.state.stateName}
            </div>

            
            <div className="place-nav"
             onMouseOver={()=>{this.listHover()}}
            >
              {places.data && places.data.length ? (
                <div className="place-nav-item setting ">
                  <div className="place-nav-item-header">
                    <div className="place-title setting-title">
                      <a style={{ textTransform: "capitalize" }}>
                        {this.state.stateName == ""
                          ? places.data[0].name
                          : this.state.stateName}
                      </a>
                    </div>
                  </div>
                  {this.state.show &&
                  <div className="place-nav-item-dropdown rounded-bottom" 
                  >
                    <ul className="list-unstyled"
                        onMouseLeave={()=>{this.listHoverOut()}}
                    >
                      {places.data.map((state, i) => (
                        <li key={i}
                        >
                          <a
                            style={{ textTransform: "capitalize" }}
                            onClick={() => this.handleInputChange(state)}
                          >
                            {state.name.replace("_", " ")}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  }
                  <div className=" setting-icon">
                    <img className="place-img" src={ic_settings} />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="block container">
            {featuredEvents &&
            featuredEvents.data &&
            featuredEvents.data.trendingEvents &&
            featuredEvents.data.trendingEvents.results.length ? (
              featuredEvents.data.trendingEvents.results.filter(
                m => this.state.stateId && m.EventState == this.state.stateId
              ).length ? (
                featuredEvents.data.trendingEvents.results
                  .filter(
                    m1 =>
                      this.state.stateId && m1.EventState == this.state.stateId
                  )
                  .map((item, index) => (
                    <span key={index}>
                      {index < 4 && (
                        <div
                          className="popular"
                          onClick={() =>
                            this.props.history.push(
                              `/event-details/${item._id}`
                            )
                          }
                        >
                          <img
                            src={
                            item.image
                                ? image_formatter(item.image.secure_url, 300)
                                : null
                            }
                          />
                          <div className="title">{item.title}</div>
                        </div>
                      )}
                    </span>
                  ))
              ) : (
                <div className="noData">At this time, there is no data</div>
              )
            ) : (
              <div className="loader-div" style={{ margin: "40px auto" }}>
                <Loader type="Oval" color="#555" height="30" />
              </div>
            )}
          </div>
        </div>

        <div className="third-block row">
          <div className="third-block-pc">
            <img src={i2} style={{ width: "42%" }} />
            <div className="desc">
              <div className="type">Swimwear</div>
              <div className="brand">Jae Jolly</div>
              <button onClick={this.onAboutJamicaClick}>ABOUT STYLE JAMAICA</button>
            </div>
            <img src={i9} style={{ width: "8%", margin: "4%" }} />
            <img src={i4} style={{ width: "42%" }} />
            <div className="desc">
              <div className="type">Menwear</div>
              <div className="brand">Bill Edwards</div>
              <button onClick={this.onAboutJamicaClick}>ABOUT STYLE JAMAICA</button>
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
                        <button onClick={this.onAboutJamicaClick}>ABOUT STYLE JAMAICA</button>
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
                        <button onClick={this.onAboutJamicaClick}>ABOUT STYLE JAMAICA</button>
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
          {featuredEvents && featuredEvents.data && featuredEvents.data.results ? (
            <Carousel indicators={true} controls={true}>
              {featuredEvents.data.results.map((item, index) => (
                <Carousel.Item key={index}>
         
                  <div
                    className="carouselImage"
                    style={{
                      backgroundImage: `url(${(item&&item.image.secure_url)?item.image.secure_url:placeholder_img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "top"
                    }}
                  />
                  <Carousel.Caption>
                    <div className="caption">
                      <div className="desc">
                        <div
                          className="type"
                          onClick={() =>
                            this.props.history.push(
                              `/event-details/${item._id}`
                            )
                          }
                        >
                          {item.title}
                        </div>
                        <p>
                          A true representation of the island's unique culture
                        </p>
                      </div>
                    </div>
                    <div className="caption2">
                      <div className="desc2">
                        <div
                          className="type2"
                          onClick={() =>
                            this.props.history.push(
                              `/event-details/${item._id}`
                            )
                          }
                        >
                          {item.title}
                        </div>

                        <p>
                          <img src={mapMarker} />
                          {item.EventPlace
                            ? item.EventPlace
                            : ""}
                        </p>
                      </div>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}

            </Carousel>
          ) : (
            <div className="loader-div" style={{ margin: "40px auto" }}>
              <Loader type="Oval" color="#555" height="30" />
            </div>
          )}
        </div>
        {
          (featuredEvents.data && featuredEvents.data.popularSubCategory.length > 0 )
          ?    
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
                  
              { 
                featuredEvents.data.popularSubCategory.sort(() => Math.random() - 0.5).slice(0,6).map((data, index) => {
                return (
                  
                      <div className="popularType col-md-6 col-12" key={index}
                        onClick={()=>{
                            
                          }
                        }
                      >
                       <Link
                       to={`${data.parentCategory.name}/${data._id}`}
                       >
                        <div
                          className="popularImage"
                          style={{
                            backgroundImage: `url(${(data.image && data.image.secure_url)?data.image.secure_url:placeholder_img})`,
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
                          <h3>{data.name}</h3>
                        </div>
                        </Link>
                      </div>                                       
                );
              })}
              
            </div>
            <div className="vertical-text">POPULAR PRODUCT TYPES</div>
            
          </div>
        </div>
        
        :<div></div>
        
        }
      </>
    );
  }
}

const mapStateToProps = state => ({
  featuredEvents: state.event.featuredEvents.data,
  places: state.event.locations.data,
  post: state.event.postById.data,
  userdata: state.auth.userdata.data,
 
  // categories: state.event.categories.data
});

const mapDispatchToProps = dispatch => ({
  getFeaturedEvents: id => dispatch(actions.getFeaturedEventsRequest(id)),
  getUserPostById: data => dispatch(actions.getUserPostByIdRequest(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
