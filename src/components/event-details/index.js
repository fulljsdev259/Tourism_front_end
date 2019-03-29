import React, { Component } from "react";
import event_details_lb from "../../images/event_details_lb.svg";
import phone_icon from "../../images/icon/phone.svg";
import location_icon from "../../images/icon/location.svg";
import email_icon from "../../images/icon/email.svg";
import favorites_icon from "../../images/icon/favorites.svg";
import time_icon from "../../images/icon/-e-ic_time.svg";
import StarRatings from "react-star-ratings";
import Review from "../generic/Review";
import EventSubDetail from "../generic/EventSubDetail";
import { relative } from "path";
import { ReactComponent as TwitterIcon } from "../../images/icon/twitter.svg";
import { ReactComponent as ThumbsupIcon } from "../../images/icon/thumbs-up.svg";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
// import { ReactComponent as Test } from "../../images/event_details_lb.svg";
class Index extends Component {
  state = {
    leave_review: false
  };
  constructor(props) {
    super(props);
    if (props.match.params.id) {
      props.getEventById(props.match.params.id);
    }
  }
  render() {
    const { categories, event: data } = this.props;
    const event_sub_details = data
      ? [
          { image: location_icon, text: data.EventPlace },
          { image: phone_icon, text: "phone number" },
          { image: email_icon, text: "email" },
          { image: time_icon, text: "account" }
        ]
      : null;
    console.log(data);

    return (
      <div className="event-details row">
        {data && data.title ? (
          <>
            <div
              className="col-md-6 col-12 p-0 event-image"
              style={{ backgroundImage: `url(${data.image.secure_url})` }}
            />
            <div className="col-md-6 col-12 p-3 right">
              <div>
                <div className="block">
                  <img className="category-icon" src={categories[0].image} />
                  <div className="title">{data.title}</div>
                </div>
                <div className="block">
                  <StarRatings
                    rating={5}
                    // rating={this.state.rating}
                    starRatedColor="#fbc000"
                    // changeRating={this.changeRating}
                    starDimension="0.8em"
                    starSpacing="0px"
                    numberOfStars={5}
                    name="rating"
                  />
                  <div className="rating-text">9 reviews</div>
                </div>
                <div className="block">
                  <div className="desc">{data.content.brief}</div>
                </div>
              </div>
              <div className="block sub-details">
                {event_sub_details.map((info, i) => (
                  <EventSubDetail key={i} {...info} />
                ))}
              </div>
              <div className="block social-buttons mt-3">
                <button className="btn btn-primary favorites-btn">
                  <img src={favorites_icon} />
                  Add to Favorites
                </button>
                <div className="social d-flex">
                  <button className="btn btn-primary px-1 py-0 d-flex">
                    <ThumbsupIcon />
                    <div className="text">like</div>
                  </button>
                  <button className="btn btn-primary ml-1 px-1 py-0 d-flex tweet">
                    <TwitterIcon />
                    <div className="text">Tweet</div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 p-0 left">
              <div
                style={{
                  width: "100%",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                <img
                  style={{ transform: "scale(1.24)" }}
                  src={event_details_lb}
                />
                <div className="timings">
                  <div className="small-title">Open Hours</div>
                  <div className="timing">
                    {[
                      { day: "Monday", time: "10:00am - 5:00pm" },
                      { day: "Tuesday", time: "10:00am - 5:00pm" },
                      { day: "Wednesday", time: "10:00am - 5:00pm" },
                      { day: "Thursday", time: "10:00am - 5:00pm" },
                      { day: "Friday", time: "10:00am - 5:00pm" },
                      { day: "Saturday", time: "Closed" },
                      { day: "Sunday", time: "Closed" }
                    ].map((element, i) => (
                      <div key={i} className="day-block">
                        <div className="day">{element.day}</div>
                        <div className="time">{element.time}</div>
                      </div>
                    ))}
                    <div />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 p-3 review-block">
              <div className="small-title">Reviews</div>
              {data.comments.length ? (
                <div className="reviews">
                  {data.comments.map((review, i) => (
                    <Review key={i} review={review} />
                  ))}
                </div>
              ) : (
                <div className="reviews">No Reviews</div>
              )}
              <div className="leave-review">
                {this.state.leave_review ? (
                  <div>
                    <textarea />
                    <div>
                      <button
                        className="blue-button"
                        onClick={() => this.setState({ leave_review: false })}
                      >
                        Cancel
                      </button>
                      <button className="blue-button">Add Review</button>
                    </div>
                  </div>
                ) : (
                  <div
                    className="leave-review"
                    onClick={() => this.setState({ leave_review: true })}
                  >
                    Leave Review
                  </div>
                )}
              </div>
            </div>
          </>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  event: state.event.eventById.data.data
});

const mapDispatchToProps = dispatch => ({
  getEventById: data => dispatch(actions.getEventByIdRequest(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
