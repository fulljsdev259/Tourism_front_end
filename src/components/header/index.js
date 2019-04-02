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
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openClass: "",
      auth: false,
      showLoading: false
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
    let { loggedUserData, location } = this.props;
    let linkDashboard = "/admin";
    if (loggedUserData && loggedUserData.role !== "admin") {
      linkDashboard = "/user";
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
            {localStore("token") ? (
              <span style={{ marginRight: "66px", marginTop: "9px" }}>
                {loggedUserData && loggedUserData.name
                  ? loggedUserData.name + ", "
                  : null}

                <br />
                <span
                  onClick={() => {
                    this.setState({
                      apiCall: true
                    });
                    this.props.modalStateHandler(false, false);
                    localStorage.removeItem("token");
                    localStorage.removeItem("token_user");
                    this.props.history.push("/");
                    setTimeout(() => {
                      this.setState({
                        apiCall: false
                      });
                    }, 1000);
                  }}
                >
                  LOGOUT
                </span>
              </span>
            ) : null}

            <button className="menu-toggle" onClick={this.ToggleBody} />
            <nav>
              <Link to="/">
                {" "}
                <img onClick={this.ToggleBody} className="logo" src={Logo} />
              </Link>

              <ul className="menu">
                <li data-text="ABOUT" onClick={() => {}}>
                  About
                </li>
                <li data-text="Events" onClick={() => {}}>
                  Events
                </li>
                <li data-text="CONTACT" onClick={() => {}}>
                  <Link to="/contactus">Contact us</Link>
                </li>
                <li
                  style={{
                    marginTop: "10px"
                  }}
                  data-text="GET COMPANY LISTED"
                  onClick={() => {}}
                >
                  <span className="blueBtn">GET COMPANY LISTED </span>
                </li>

                {!localStore("token") ? (
                  <li
                    data-text="GET COMPANY LISTED"
                    className="registerLi"
                    onClick={() => {
                      this.ToggleBody();
                      this.props.modalStateHandler(
                        false,
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
                      <div
                        className="registerDiv"
                        // className={`registerDiv ${
                        //   location.pathname == "/auth" ||
                        //   location.pathname == "/auth/" ||
                        //   location.pathname == "/auth/register"
                        //     ? "link-active"
                        //     : ""
                        // }`}
                      >
                        Register / Login
                      </div>
                    </div>
                  </li>
                ) : (
                  <li data-text="GET COMPANY LISTED" className="registerLi" />
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
                <div
                  className="item"
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
          <Link to="/">
            {" "}
            <div className="logoDiv">
              <img className="logo" src={Logo} />
            </div>
          </Link>
          <div className="itemDiv">
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
                <Link to="/aboutus">About</Link>
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
                <Link to="/events">Events</Link>
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
                <Link to="/contactus">Contact us</Link>
                {/* <a>Contact us</a> */}
              </div>
              <div
                className="getStarted"
                onClick={() => {
                  this.props.modalStateHandler(true, true);
                }}
              >
                <a>GET COMPANY LISTED</a>
              </div>
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
                      localStorage.removeItem("token_user");
                    }}
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="registerDiv col-2">
              <Link to="/auth/">Login/Register</Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.event.categories.data,
  locations: state.event.locations.data,
  login: state.auth.login,
  userdata: state.auth.userdata.data
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(actions.getCategoriesRequest()),
  getLocations: () => dispatch(actions.getLocationsRequest()),
  getUserData: data => dispatch(actions.getUserDataRequest(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header));
