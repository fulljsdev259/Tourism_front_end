import React, { Component } from "react";
import Header from "../header";
import Footer from "../footer";
import Index from "../index";
import ContactUs from "../contactus";
import Category from "../category";
import Auth from "../auth";
import AboutUs from "../aboutus";
import Events from "../Events";
import EventDetails from "../event-details";
import GetListed from "../getListed";
import category1 from "../../images/category1.svg";
import category2 from "../../images/category2.svg";
import category3 from "../../images/category3.svg";
import category4 from "../../images/category4.svg";
import { Switch, Route, Redirect } from "react-router-dom";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Login from "../login";
// import SignUp from "../signup";

const customStyles = {
  content: {
    top: "0%",
    left: "0%",
    right: "0%",
    bottom: "0%",
    borderTopLeftRadius: 30,

    border: "none",
    marginLeft: "35%",
    transform: "translate(0%, 0%)"
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

    marginLeft: "35%",
    transform: "translate(0%, 0%)"
  }
};

Modal.setAppElement("#root");

class Home extends Component {
  constructor() {
    super();
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
      modalPublications: false
    };
  }

  handleModalState = (
    // about,
    // contact,
    // event,
    getListed,
    // news,
    // register,
    modalIsOpen = true,
    modalPublications = false
  ) => {
    this.setState({
      // about,
      // contact,
      // event,
      getListed,
      // news,
      // register,
      modalIsOpen,
      modalPublications
    });
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const categories = [
      {
        name: "Duty Free",
        image: category1,
        sub_categories: ["Alcohol", "Electronics", "Jewelry", "Souvenir Shops"],
        path: "/duty_free"
      },
      {
        name: "Artisan",
        image: category3,
        sub_categories: ["Alcohol", "Electronics", "Jewelry", "Souvenir Shops"],
        path: "/artisan"
      },
      {
        name: "Crafts",
        image: category2,
        sub_categories: ["Alcohol", "Electronics", "Jewelry", "Souvenir Shops"],
        path: "/crafts"
      },
      {
        name: "Retails",
        image: category4,
        sub_categories: ["Alcohol", "Electronics", "Jewelry", "Souvenir Shops"],
        path: "/retails"
      }
    ];
    return (
      <div className="App">
        <Header modalStateHandler={this.handleModalState} />
        <div className="container-fluid body-top">
          <Switch>
            {categories.map((category, i) => {
              return (
                <Route
                  path={category.path}
                  key={i}
                  render={props => (
                    <Category
                      {...props}
                      category={category}
                      categories2 ={categories}
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
            <Route path="/auth" component={Auth} />
            <Route path="/contactus" component={ContactUs} />
            <Route
              path="/"
              render={props => <Index {...props} categories={categories} />}
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
        <ToastContainer />
      </div>
    );
  }
}

export default Home;
