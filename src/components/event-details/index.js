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

// import { ReactComponent as Test } from "../../images/event_details_lb.svg";
export default class index extends Component {
  state = {
    leave_review: false
  };
  render() {
    const { categories } = this.props;
    const data = {
      _id: "5c6bcb9929c6432bf1f21d1f",
      slug: "dj-shadow-night",
      title: "DJ Shadow night",
      end: "2019-03-23T09:52:09.000Z",
      __v: 2,
      EventCity: "5c6618edd46bfe05830e8a02",
      EventState: "5c5bd82a2acca64f2634bd89",
      categories: "/duty_free",
      publishedDate: "2019-02-16T00:00:00.000Z",
      VideoLink: "",
      drive_link: "",
      email: "",
      first_name: "",
      full_name: "",
      last_name: "",
      organisation_city: "",
      organisation_state: null,
      phone_number: "",
      street_address: "",
      ticket_outlet: "",
      createdAt: "2019-03-22T10:29:31.894Z",
      checkedinBy: [
        "5c8922a774ac10181f9e355a",
        "5c8c247f8cdad33797b9ef31",
        "5c80e3ed1daf253bb440464a"
      ],
      event_held_past: "false",
      interested: [
        "5c70dd6029c6432bf1f21d33",
        "5c7fc3fa49e737257c86b203",
        "5c8922a774ac10181f9e355a",
        "5c80e3ed1daf253bb440464a",
        "5c88f5c744654911c64cb7fd",
        "5c80f93fb388ce3c9a0ad90b",
        "5c88f2b9d09d7708da537c31"
      ],
      comments: [
        {
          _id: "5c6f119029c6432bf1f21d31",
          name: "username",
          text: "text",
          rating: 2
        },
        {
          _id: "5c6f119029c6432bf1f21d31",
          name: "username",
          text: "text",
          rating: 2
        },
        {
          _id: "5c6f119029c6432bf1f21d31",
          name: "username",
          text: "text",
          rating: 2
        }
      ],
      LikedBy: [],
      DescriptionImage: [],
      Price: "200",
      EventPlace: "DJ House",
      website: "",
      contentType: "adult",
      start: "2019-03-23T09:52:08.000Z",
      trending: "true",
      featured: "true",
      content: {
        brief:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        extended: ""
      },
      image: {
        secure_url:
          "https://res.cloudinary.com/keystone-demo/image/upload/v1550568557/nqtuv3eroubb2pwzwy1v.jpg",
        url:
          "http://res.cloudinary.com/keystone-demo/image/upload/v1550568557/nqtuv3eroubb2pwzwy1v.jpg",
        resource_type: "image",
        format: "jpg",
        height: 1275,
        width: 1920,
        signature: "2611f31f3088866d0e6ce703a5dbf645424eab5e",
        version: 1550568557,
        public_id: "nqtuv3eroubb2pwzwy1v"
      },
      state: "published"
    };
    const event_sub_details = [
      { image: location_icon, text: data.EventPlace },
      { image: phone_icon, text: "phone number" },
      { image: email_icon, text: "email" },
      { image: time_icon, text: "account" }
    ];
    return (
      <div className="event-details row">
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
            <img style={{ transform: "scale(1.24)" }} src={event_details_lb} />
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
      </div>
    );
  }
}
