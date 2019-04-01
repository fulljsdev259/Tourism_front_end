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
import * as actions from "../../redux/actions";

class EventItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { event, userdata, calendar } = this.props;
    const getZIndex = i => {
      return event.interested.length * 10 - i;
    };
    let interestPeople = "";
    let youInterested;
    if (event && userdata && userdata.data) {
      youInterested = event.interested.find(oneInterested => {
        return oneInterested._id == userdata.data._id;
      });
    }
    return (
      <div className="events-list">
        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12 offset-sm-1 offset-md-1 offset-lg-2 event-img">
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
              {/* <Link
                to={{ pathname: `/event-detail/${event._id}`, state: event }}
              > */}
                <div className="title">{event.title}</div>
              {/* </Link> */}
              <div className="mobile-social">
                <img
                  className="wishlist"
                  src={heart}
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
                      console.log(this.props);
                      
                      this.props.addInterest({
                        id: event._id,
                        pathname: this.props.location.pathname
                      });
                    }
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
            <div className="desc">{event.content.brief}</div>
            <div className="social">
              <img
                className="wishlist"
                src={youInterested ? heart_full : heart}
                title={localStore("token") ? null : "Login first if interested"}
                onClick={() => {
                  console.log(this.props);
                  if (localStore("token")) {
                    this.props.addInterest({
                      _id: event._id,
                      pathname: this.props.location.pathname
                    });
                  } else {
                   this.props.history.push('/auth')
                  }
                }}
              //   <img
              //   className="wishlist"
              //   src={youInterested ? heart_full : heart}
              //   onClick={() => {
              //     this.props.addInterest({
              //       event_id: event._id,
              //       id: event.categories._id
              //     });
              //   }}
              // />
              />
            </div>
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
  addInterest: id => dispatch(actions.addInterestRequest(id))
  //   sharePost: post_id => dispatch(sharePost(post_id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(EventItem)
);
