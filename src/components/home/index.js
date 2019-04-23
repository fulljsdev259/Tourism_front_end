import React, { Component } from "react";
import Header from "../header";
import Footer from "../footer";
import Index from "../index";
import ContactUs from "../contactus";
import Category from "../category";
import SubCategory from "../subCategory";
import Auth from "../auth";
import AboutUs from "../aboutus";
import Events from "../Events";
import Profile from "../profile";
import EventDetails from "../event-details";
import GetListed from "../getListed";
import category1 from "../../images/category1.svg";
import category2 from "../../images/category2.svg";
import category3 from "../../images/category3.svg";
import category4 from "../../images/category4.svg";
import duty_free_img from "../../images/duty_free_img.png";
import retails_img from "../../images/duty_free_img.png";
import crafts_img from "../../images/crafts_img.png";
import artisan_img from "../../images/crafts_img.png";
import { Switch, Route, Redirect } from "react-router-dom";
import Modal from "react-modal";
import ForgotPass from "../forgot-pass";

const customStyles = {
  content: {
    top: "0%",
    left: "0%",
    right: "0%",
    bottom: "0%",
    borderTopLeftRadius: 30,
    border: "none",
    marginLeft: window.innerWidth <= 767 ? "0%" : "35%",
    transform: "translate(0%, 0%)"
    // borderRadius: "1px 4px 4px"
  }
};

const customStylesRegister = {
  content: {
    top: "0%",
    left: "0%",
    right: "0%",
    bottom: "0%",
    border: "none",
    borderTopLeftRadius: 30,
    backgroundColor: "#5165FF",
    marginLeft: window.innerWidth <= 767 ? "0%" : "35%",
    transform: "translate(0%, 0%)"
    // borderRadius: "1px 4px 4px"
  }
};

Modal.setAppElement("#root");

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      about: false,
      contact: false,
      event: false,
      getListed: false,
      news: false,
      register: false,
      mobileMenu: false,
      showListing: false,
      showMap: true,
      width: 0,
      height: 0,
      windowResized: false,
      loader: false,
      isMobileScreen: false,
      categoryData: ""
    };
  }

  handleModalState = (
    // about,
    // contact,
    // event,
    getListed,
    // news,
    // register,
    modalIsOpen = true
  ) => {
    this.setState({
      // about,
      // contact,
      // event,
      getListed,
      // news,
      // register,
      modalIsOpen
    });
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handleGetCategory = data => {
    this.setState({
      categoryData: data
    });
  };
  handleSubcat = sub_id => {
    this.setState({ id: sub_id });
  };
  render() {
    const imageArr = [category1, category3, category2, category4];
    const bgImageArr = [duty_free_img, artisan_img, crafts_img, retails_img];
    const pathArr = ["/duty_free", "/artisan", "/crafts", "/retails"];
    const bgColor = ["#fbebec", "#a9fff1", "#cfbeb6", "#fff6fb"];
    const categories = this.state.categoryData.data
      ? this.state.categoryData.data.map((m, i) => {
          return {
            name: m.name,
            image: imageArr[i],
            path: pathArr[i],
            subCategory: m.subCategory,
            description: m.description,
            id: m._id,
            bgColor: bgColor[i],
            bgImage: bgImageArr[i]
          };
        })
      : null;
    // const categories = [
    //   {
    //     name: "Duty Free",
    //     image: category1,
    //     sub_categories: ["Alcohol", "Electronics", "Jewelry", "Souvenir Shops"],
    //     path: "/duty_free"
    //   },
    //   {
    //     name: "Artisan",
    //     image: category3,
    //     sub_categories: ["Alcohol", "Electronics", "Jewelry", "Souvenir Shops"],
    //     path: "/artisan"
    //   },
    //   {
    //     name: "Crafts",
    //     image: category2,
    //     sub_categories: ["Alcohol", "Electronics", "Jewelry", "Souvenir Shops"],
    //     path: "/crafts"
    //   },
    //   {
    //     name: "Retails",
    //     image: category4,
    //     sub_categories: ["Alcohol", "Electronics", "Jewelry", "Souvenir Shops"],
    //     path: "/retails"
    //   }
    // ];
    return (
      <div className="App">
        <Header
          modalStateHandler={this.handleModalState}
          getCategory={this.handleGetCategory}
          categoryDataState={this.state.categoryData}
          categories2={categories}
        />
        <div className="container-fluid body-top">
          <Switch>
            {categories &&
              categories.map((category, i) => {
                return (
                  <Route
                    exact
                    path={category.path}
                    key={i}
                    render={props => (
                      <Category
                        {...props}
                        category={category}
                        categories2={categories}
                        handleSubcat={this.handleSubcat}
                      />
                    )}
                  />
                );
              })}
            {categories &&
              categories.map((category, i) => {
                return (
                  <Route
                    path={`${category.path}/:id`}
                    key={i}
                    render={props => (
                      <SubCategory
                        {...props}
                        category={category}
                        categories2={categories}
                        handleSubcat={this.handleSubcat}
                      />
                    )}
                  />
                );
              })}
            <Route path="/events" component={Events} />
            <Route
              path="/event-details/:id"
              render={props => (
                <EventDetails {...props} categories={categories} />
              )}
            />
            <Redirect from="/event-details" to="/events" />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/auth/forgotPassword" component={ForgotPass} />
            <Route path="/auth" component={Auth} />
            <Route path="/contactus" component={ContactUs} />
            <Route path="/profile" component={Profile} />
            <Route
              path="/"
              render={props => (
                <Index
                  {...props}
                  categories={categories}
                  handleSubcat={this.handleSubcat}
                />
              )}
            />
          </Switch>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={this.state.register ? customStylesRegister : customStyles}
          contentLabel="Example Modal"
          overlayClassName="Overlay"
        >
          {this.state.getListed ? (
            <GetListed closeModal={() => this.closeModal()} />
          ) : (
            ""
          )}
        </Modal>
        <Footer />
      </div>
    );
  }
}
export default Home;
