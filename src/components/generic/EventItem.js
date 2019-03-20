import React, { Component } from "react";
import photo from "../../images/photo2.png";
import cost from "../../images/cost.png";
import inactiveCost from "../../images/cost-not-active.svg";
import web from "../../images/web.png";
import time from "../../images/time.png";
import mapMain from "../../images/map-main-color.svg";
import heart from "../../images/heart.svg";
import heart_full from "../../images/heart-full.svg";
import { Link } from "react-router-dom";
import moment from "moment";
import { connect } from "react-redux";
import { localStore } from "../../services/storage";
import { withRouter } from "react-router-dom";

class EventItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { event, userdata, calendar } = this.props;
    console.log(event);

    const getZIndex = i => {
      return event.interested.length * 10 - i;
    };
    let interestPeople = "";
    let youInterested;
    // if (event) {
    //   interestPeople = getInterestPeople(userdata.data ? userdata.data : null, event);
    //   youInterested =
    //     userdata.data &&
    //     event.interested.find(
    //       oneInterested => {
    //         if (this.props.location.pathname === "/wishlist") {
    //           return oneInterested === userdata.data._id
    //         }
    //         return oneInterested._id === userdata.data._id
    //       }
    //     );
    // }
    return (
      <div
        className="events-list"
        style={calendar ? { flexDirection: "column" } : null}
      >
        <div
          className={
            calendar
              ? null
              : "col-lg-3 col-md-4 col-sm-4 col-xs-12 offset-sm-1 offset-md-1 offset-lg-2 event-img"
          }
        >
          {/* <Link to={{ pathname: `/event-detail/${event._id}`, state: event }}> */}
          <div
            className="img"
            style={{
              backgroundImage: `url(${event.image ? event.image.url : photo})`,
              backgroundSize: "cover"
            }}
          />
          {/* </Link> */}
        </div>
        <div
          className={
            calendar
              ? "event-detail"
              : "col-lg-5 col-md-6 col-sm-6 event-detail"
          }
        >
          <div className="head">
            <div>
              <Link
                to={{ pathname: `/event-detail/${event._id}`, state: event }}
              >
                <div className="title">{event.title}</div>
              </Link>
              <div className="mobile-social">
                <img
                  className="wishlist"
                  //   src={
                  //     userdata.data &&
                  //       event.interested.find(
                  //         oneInterested => oneInterested._id === userdata.data._id
                  //       )
                  //       ? heart_full
                  //       : heart
                  //   }
                  title={
                    localStore("token") ? null : "Login first if interested"
                  }
                  onClick={() => {
                    if (localStore("token")) {
                      this.props.addInterest({
                        _id: event._id,
                        pathname: this.props.location.pathname
                      });
                    }
                  }}
                />
                <img
                  className="share"
                  //   src={share}
                  onClick={() => {
                    this.props.sharePost(event);
                    document.getElementById("shareMenu").style.top = "0px";
                  }}
                />
              </div>
            </div>
            <div className="date">
              {event.start && moment(event.start).format("D MMM, dddd")}
            </div>
          </div>
          <div className="middle">
            <div>
              <span className="span">
                <img className="icon" src={mapMain} />{" "}
                {event.EventPlace ? event.EventPlace : "Not Decided"}
              </span>
              <span className="span">
                {event.Price ? (
                  <>
                    <img className="icon" src={cost} />{" "}
                    {`from $ ${event.Price}`}
                  </>
                ) : (
                  <>
                    <img className="icon" src={inactiveCost} /> Sold out{" "}
                  </>
                )}
              </span>
            </div>
            <div>
              <span className="span web-color">
                <img className="icon" src={web} />{" "}
                {event.website ? event.website : "website.com"}
              </span>
              <span className="span">
                <img className="icon" src={time} />{" "}
                {event.start && moment(event.start).format("hh:mm A")}
              </span>
            </div>
            <div className="social">
              {event.interested.slice(0, 5).map((p, i) => {
                return (
                  <React.Fragment key={i}>
                    <img
                      className="inner"
                      style={{
                        marginLeft: `${i * 10}px`,
                        zIndex: getZIndex(i)
                      }}
                      // src={people}
                    />
                    {/* } */}
                  </React.Fragment>
                );
              })}
              <span className="peopleCount">{interestPeople}</span>
              <img
                className="wishlist"
                src={youInterested ? heart_full : heart}
                onClick={() => {
                  this.props.addInterest({
                    _id: event._id,
                    pathname: this.props.location.pathname
                  });
                }}
              />
              <img
                className="share"
                // src={share}
                onClick={() => {
                  this.props.sharePost(event);
                  document.getElementById("shareMenu").style.top = "0px";
                }}
              />
            </div>
          </div>
          <div className="bottom">
            <Link
              to={{ pathname: `/event-detail/${event._id}`, state: event }}
              style={
                {
                  // backgroundImage: getgradient("/" + event.categories.name)
                }
              }
            >
              view details
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //   userdata: state.auth.userdata.data
});

const mapDispatchToProps = dispatch => ({
  //   addInterest: id => dispatch(addInterestRequest(id)),
  //   sharePost: post_id => dispatch(sharePost(post_id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EventItem)
);
