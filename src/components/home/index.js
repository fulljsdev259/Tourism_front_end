import React, { Component } from "react";
import Header from "../header";
import Footer from "../footer";
import Index from "../index";
import ContactUs from "../contactus";
import Category from "../category";
import Auth from "../auth";
import AboutUs from "../aboutus";
import Events from "../Events";
import GetListed from "../getListed";
import { Switch, Route } from "react-router-dom";
import Modal from "react-modal";
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
    const categories = ["/food", "/SPA", "/shopping", "/fitness"];
    return (
      <div className="App">
        <Header modalStateHandler={this.handleModalState} />
        <div className="body-top">
          <Switch>
            {categories.map((path, i) => (
              <Route path={path} key={i} component={Category} />
            ))}
            <Route path="/events" component={Events} />

            <Route path="/aboutus" component={AboutUs} />
            <Route path="/auth" component={Auth} />
            <Route path="/contactus" component={ContactUs} />
            <Route path="/" component={Index} />
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
