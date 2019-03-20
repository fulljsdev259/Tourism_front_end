import React from "react";
import Logo from "../../images/-e-logo.png";
import Menu from "../../images/icon/menu.svg";
import profile from "../../images/oval.png";
import Close from "../../images/icon/cross.svg";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";

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
  }
  componentWillReceiveProps(nextProps) {
    const oThis = this;
    if (oThis.props.authenticated !== nextProps.authenticated) {
      this.setState({ auth: nextProps.authenticated });
    }
  }

  render() {
    const oThis = this;
    let { loggedUserData } = this.props;

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
            {oThis.props.authenticated ? (
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
                    oThis.props.modalStateHandler(false, false);
                    localStorage.removeItem("token");
                    localStorage.removeItem("token_user");
                    oThis.props.history.push("/");
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
                  data-text="GET COMPANY"
                  onClick={() => {}}
                >
                  <span className="blueBtn">GET COMPANY </span>
                </li>

                {!oThis.props.authenticated ? (
                  <li
                    data-text="GET COMPANY"
                    className="registerLi"
                    onClick={() => {
                      this.ToggleBody();
                      oThis.props.modalStateHandler(
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
                      <div className="registerDiv">Register / Login</div>
                    </div>
                  </li>
                ) : (
                  <li data-text="GET COMPANY" className="registerLi" />
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
                    oThis.props.modalStateHandler(
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
                    oThis.props.modalStateHandler(
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
                  <a>GET COMPANY</a>
                </div>
              </div>
            </div>
            <div className="lower-section">
              <div className="registerDiv" onClick={() => {}}>
                <Link to="/auth">Register / Login</Link>
              </div>
            </div>
          </div>
        }
        <div className="menu">
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
                  oThis.props.modalStateHandler(
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
                  oThis.props.modalStateHandler(
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
                //   oThis.props.modalStateHandler(
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
                  oThis.props.modalStateHandler(true, true);
                }}
              >
                <a>GET COMPANY</a>
              </div>
            </div>
          </div>
          {oThis.props.authenticated ? (
            <div className="registerDiv">
              <span className="user-name">
                <span style={{ marginRight: "20px" }}>
                  <Link to={linkDashboard}>My Dashboard</Link>
                </span>

                {loggedUserData && loggedUserData.name
                  ? loggedUserData.name + ", "
                  : null}
                <a
                  onClick={() => {
                    this.setState({
                      apiCall: true
                    });
                    oThis.props.modalStateHandler(
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
                    // oThis.props.receiveLogout()

                    oThis.props.history.push("/");
                    setTimeout(() => {
                      this.setState({
                        apiCall: false
                      });
                    }, 1000);
                  }}
                >
                  LOGOUT
                </a>
              </span>
            </div>
          ) : (
            <div className="registerDiv">
              <Link to="/auth">Register / Login</Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.event.categories.data,
  locations: state.event.locations.data
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(actions.getCategoriesRequest()),
  getLocations: () => dispatch(actions.getLocationsRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header));
