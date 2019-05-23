import React from "react";
import Logo from "../../images/logo.png";
import Menu from "../../images/icon/menu.svg";
import profile from "../../images/oval.png";
import Close from "../../images/icon/cross.svg";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import { localStore } from "../../services/storage";
import { ReactComponent as UserIcon } from "../../images/user.svg";
import user from "../../images/user.svg";
import CategoryNav3 from "../generic/CategoryNav3";
import MenuImage from "../../images/menuImage.svg";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openClass: "",
      auth: false,
      showLoading: false,
      activeLi: false
    };
    this.ToggleBody = () => {
      var currentClass = document.getElementsByTagName("body")[0];
      var isAlreadyOpened = currentClass.classList.contains("open");

      if (!isAlreadyOpened) {
        currentClass.classList.add("open");
      } else {
        currentClass.classList.remove("open");
      }
    };
    if (!props.categories.data) {
      props.getCategories();
    }
    if (!props.locations.data) {
      props.getLocations();
    }
    if (localStore("token")) {
      props.getUserData(localStore("token"));
    }
  }
  componentWillReceiveProps(nextProps) {
    // if (this.props.authenticated !== nextProps.authenticated) {
    //   this.setState({ auth: nextProps.authenticated });
    // }
  }

  render() {
    if (!this.props.categoryDataState) {
      this.props.getCategory(this.props.categories);
    }
    let { loggedUserData, location, userdata, categories2 } = this.props;
    if (!this.props.post.data && userdata.data) {
      this.props.getUserPostById(userdata.data._id);
    }
    return (
      <div className="fix-header">
        <div className="menuMobile">
          <Link to="/">
            <div className="logoDiv">
              <img className="logo" src={Logo} />
            </div>
          </Link>
          <div className="itemDiv">
            <button className="menu-toggle" onClick={this.ToggleBody} />
            <nav>
              {/* <Link to="/">
                {" "}
                <img onClick={this.ToggleBody} className="logo" src={Logo} />
              </Link> */}
              <ul className="menu">
                <li
                  className="row "
                  style={{ background: "#fff", paddingBottom: "20px" }}
                >
                  <CategoryNav3
                    {...this.props}
                    categories={categories2}
                    handleClick={this.ToggleBody}
                  />
                </li>
                <li data-text="ABOUT">
                  <Link to="/aboutus" onClick={this.ToggleBody}>
                    ABOUT
                  </Link>
                </li>
                <li data-text="Events">
                  {/* <Link to="/events" onClick={this.ToggleBody}>
                    EVENTS
                  </Link> */}
                  <a href="https://www.topeventsinjamaica.com/shopping"  target="_blank">
                    EVENTS
                  </a>
                </li>
                <li data-text="CONTACT">
                  <Link to="/contactus" onClick={this.ToggleBody}>
                    CONTACT US
                  </Link>
                </li>
                {/* {!userdata.data ||
                (userdata.data &&
                  userdata.data.companyDetails &&
                  userdata.data.companyDetails.title) ? ( */}
                <li
                  style={{
                    marginTop: "10px"
                  }}
                  data-text="GET COMPANY LISTED"
                >
                  <span
                    className="blueBtn"
                    onClick={() => {
                      this.ToggleBody();
                      this.props.modalStateHandler(true, true);
                    }}
                  >
                    GET COMPANY LISTED{" "}
                  </span>
                </li>
                {/* ) : null} */}
                <img
                  className="menuImage-mobile"
                  src={MenuImage}
                  width="80px"
                  style={{ position: "absolute", right: "10%", top: "20%" }}
                />
                {localStore("token") && this.props.userdata.data ? (
                  <li data-text="GET COMPANY LISTED" className="registerLi">
                    <div className="lower-section">
                      <div className="registerDiv logged-in">
                        <div className="name">
                          {this.props.userdata.data.name.first}{" "}
                          {this.props.userdata.data.name.last}
                        </div>
                        <div>{this.props.userdata.data.email}</div>
                        <div className="hr" />
                        <div
                          className="logout"
                          onClick={() => {
                            this.setState({
                              apiCall: true
                            });
                            this.ToggleBody();
                            this.props.modalStateHandler(false, false);
                          }}
                        >
                          <Link to="/profile">ACCOUNT SETTINGS</Link>
                        </div>
                        <div
                          className="logout"
                          onClick={() => {
                            this.setState({
                              apiCall: true
                            });
                            this.ToggleBody();
                            this.props.modalStateHandler(false, false);
                          }}
                        >
                          {userdata.data &&
                          userdata.data.companyDetails &&
                          userdata.data.companyDetails.title ? (
                            <Link to="/company">COMPANY PAGE</Link>
                          ) : null}
                        </div>
                        <div
                          className="logout"
                          onClick={() => {
                            this.setState({
                              apiCall: true
                            });
                            this.ToggleBody();
                            this.props.modalStateHandler(
                              false,
                              false,
                              false,
                              false,
                              false,
                              false,
                              false
                            );
                            localStorage.removeItem("token");
                            this.props.history.push("/");
                            this.props.logout();
                          }}
                        >
                          <a> LOG OUT</a>
                        </div>
                      </div>
                    </div>
                  </li>
                ) : (
                  <li
                    data-text="GET COMPANY LISTED"
                    className="registerLi"
                    onClick={() => {
                      this.ToggleBody();
                      this.props.modalStateHandler(
                        true,
                        false,
                        false,
                        false,
                        false,
                        true,
                        true
                      );
                    }}
                  >
                    <div className="lower-section">
                      <div className="registerDiv logged-in">
                        <Link to="/auth" style={{ paddingTop: "20px" }}>
                          REGISTER / LOGIN
                        </Link>
                      </div>
                    </div>
                  </li>
                )}
              </ul>
            </nav>
          </div>
        </div>
        {
          <div
            className={
              this.props.mobileMenu ? "menuItemMobile" : "menuItemMobileNone"
            }
          >
            <div className="headerMobileMenu">
              <div />
              <img onClick={this.props.setMobileMenu} src={Close} />
            </div>
            <div className="contentMobileMenu">
              <div className="upper-section">
                <div className="item">
                  <Link to="/aboutus">About</Link>
                </div>
                {/* <div className="item">News</div>
                        <div className="item">Events</div> */}
                <div className="item" onClick={() => {}}>
                  <Link to="/events">Events</Link>
                </div>
                <div className="item" onClick={() => {}}>
                  <Link to="/contactus">Contact us</Link>
                  {/* <a>Contact us</a> */}
                </div>
                <div
                  className="getStarted"
                  onClick={() => {
                    this.props.modalStateHandler(
                      true,
                      false,
                      false,
                      true,
                      false,
                      false
                      // true
                    );
                  }}
                >
                  <a>GET COMPANY LISTED</a>
                </div>
              </div>
            </div>
            <div className="lower-section">
              <div
                className="registerDiv"
                //         className={`registerDiv ${
                //   location.pathname == "/auth" ||
                //   location.pathname == "/auth/" ||
                //   location.pathname == "/auth/register"
                //     ? "link-active"
                //     : ""
                // }`}
              >
                <Link to="/auth">Register / Login</Link>
              </div>
            </div>
          </div>
        }
        <div className="menu container">
          <div className="row">
            <div className="col-2">
              <Link
                to="/"
                onClick={() => {
                  this.setState({ activeLi: true });
                }}
              >
                {" "}
                <div className="logoDiv">
                  <img className="logo" src={Logo} />
                </div>
              </Link>
            </div>

            <div className="itemDiv col-8">
              <div className="item">
                <div
                  className="normal"
                  onClick={() => {
                    this.props.modalStateHandler(
                      true,
                      false,
                      false,
                      false,
                      false,
                      false,
                      true
                    );
                  }}
                >
                  <Link
                    to="/aboutus"
                    className={`  ${
                      location.pathname === "/aboutus" ? "liActive" : ""
                    }`}
                    onClick={() => {
                      this.setState({ activeLi: true });
                    }}
                  >
                    About
                  </Link>
                </div>
                <div
                  className="normal"
                  onClick={() => {
                    this.props.modalStateHandler(
                      false,
                      false,
                      true,
                      false,
                      false,
                      false,
                      true
                    );
                  }}
                >
                  {/* <Link
                    to="/events"
                    className={`  ${
                      location.pathname === "/events" ? "liActive" : ""
                    }`}
                    onClick={() => {
                      this.setState({ activeLi: true });
                    }}
                  >
                    Eventssss
                  </Link> */}
                  <a href="https://www.topeventsinjamaica.com/shopping" target="_blank">
                    Events
                  </a>
                </div>
                <div
                  className="normal"
                  // onClick={() => {
                  //   this.props.modalStateHandler(
                  //     false,
                  //     true,
                  //     false,
                  //     false,
                  //     false,
                  //     false,
                  //     true
                  //   );
                  // }}
                >
                  <Link
                    to="/contactus"
                    className={`  ${
                      location.pathname === "/contactus" ? "liActive" : ""
                    }`}
                    onClick={() => {
                      this.setState({ activeLi: true });
                    }}
                  >
                    Contact us
                  </Link>
                  {/* <a>Contact us</a> */}
                </div>
                {/* {!userdata.data ||
                (userdata.data &&
                  userdata.data.companyDetails &&
                  userdata.data.companyDetails.title) ? ( */}
                <div
                  className="getStarted"
                  onClick={() => {
                    {
                      this.props.modalStateHandler(true, true);
                    }
                  }}
                >
                  <a>GET COMPANY LISTED</a>
                </div>
                {/* ) : null} */}
              </div>
            </div>
            {localStore("token") && this.props.userdata.data ? (
              <div className="col-2 profileDiv">
                <div className="dropdown">
                  <img className="dropbtn" src={user} />
                  <div className="dropdown-content">
                    <div className="logged-user">
                      <h6>
                        {this.props.userdata.data.name.first}{" "}
                        {this.props.userdata.data.name.last}
                      </h6>
                      <span>{this.props.userdata.data.email}</span>
                    </div>
                    <button className="logout">
                      <Link to="/profile">Account Settings</Link>
                    </button>
                    {userdata.data &&
                    userdata.data.companyDetails &&
                    userdata.data.companyDetails.title ? (
                      <button className="logout">
                        <Link to="/company">Company Page</Link>
                      </button>
                    ) : null}

                    <button
                      className="logout"
                      onClick={() => {
                        this.setState({
                          apiCall: true
                        });
                        this.props.modalStateHandler(
                          false,
                          false,
                          false,
                          false,
                          false,
                          false,
                          false
                        );
                        localStorage.removeItem("token");
                        this.props.logout();
                        this.props.history.push("/");
                      }}
                    >
                      <a> Log Out</a>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="registerDiv col-2">
                <Link
                  to="/auth/"
                  className={`  ${
                    location.pathname === "/auth/" ||
                    location.pathname === "/auth/register"
                      ? "liActive"
                      : ""
                  }`}
                  onClick={() => {
                    this.setState({ activeLi: true });
                  }}
                >
                  Login/Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.event.categories.data,
  locations: state.event.locations.data,
  login: state.auth.login,
  userdata: state.auth.userdata.data,
  post: state.event.postById.data
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(actions.getCategoriesRequest()),
  getLocations: () => dispatch(actions.getLocationsRequest()),
  getUserData: data => dispatch(actions.getUserDataRequest(data)),
  logout: () => dispatch(actions.logout()),
  getUserPostById: data => dispatch(actions.getUserPostByIdRequest(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header));
