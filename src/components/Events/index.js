import React, { Component } from "react";
import Description from "../generic/Description";
import TopMenu from "../generic/TopMenu";
import EventItem from "../generic/EventItem";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Events extends Component {
  render() {
    const data = [
      {
        _id: "5c6bcb9929c6432bf1f21d1f",
        slug: "dj-shadow-night",
        title: "DJ Shadow night",
        end: "2019-03-23T09:52:09.000Z",
        __v: 2,
        EventCity: "5c6618edd46bfe05830e8a02",
        EventState: "5c5bd82a2acca64f2634bd89",
        categories: "5c5ac358fa8765433a4ba657",
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
          "5c6f119029c6432bf1f21d31",
          "5c70ea1829c6432bf1f21d38",
          "5c7e5241b5c93158fb42fb9f",
          "5c8b95859370ad35b48d7604",
          "5c8b95929370ad35b48d7605",
          "5c8b99349370ad35b48d7606",
          "5c8b9a2a9370ad35b48d7607",
          "5c8e5a8f8cdad33797b9ef33",
          "5c8fa6df583b2364d770f667",
          "5c8fa6fa583b2364d770f668",
          "5c8fa77b583b2364d770f66b",
          "5c8fa7a7583b2364d770f66c",
          "5c8fa99209d22c6725d2f1f8",
          "5c8fa99709d22c6725d2f1f9",
          "5c8fa9a509d22c6725d2f1fa",
          "5c8faa2509d22c6725d2f1fb",
          "5c8fae1809d22c6725d2f202",
          "5c8fc23409d22c6725d2f213",
          "5c8fc23709d22c6725d2f214"
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
      }
    ];
    // ,"trendingEvents":{"total":2,"results":[{"_id":"5c67b15e9ce17f13d17468a7","slug":"amazing-kids-fest","title":"Amazing Kids Fest","end":"2019-03-19T22:02:52.000Z","EventCity":"5c6618edd46bfe05830e8a02","EventState":"5c5bd82a2acca64f2634bd89","categories":{"_id":"5c5ac358fa8765433a4ba657","key":"entertainment","name":"entertainment","__v":0,"description":"The Jamaican entertainment scene is one reason why so many people flock to our shores."},"publishedDate":"2019-02-25T00:00:00.000Z","interested":[{"_id":"5c5d632cfea1185ebf3da897","email":"test1@test.com","name":{"first":"test","last":"user"}},{"_id":"5c7d0cf16845da30e62e1bc2","email":"test3@test.com","name":{"first":"test3","last":""}},{"_id":"5c7d20f4c298fb55cb853699","email":"test5@test.com","name":{"first":"test55","last":""}},{"_id":"5c7d3dc1b5c93158fb42fb97","email":"test126@test.com","name":{"first":"test","last":"user"}},{"_id":"5c7d3bcab5c93158fb42fb96","email":"test1010@test.com","name":{"first":"test1010","last":""}},{"_id":"5c7f785961394b102063b650","email":"vishal_kumae@excellencetechnologies.in"},{"_id":"5c8922a774ac10181f9e355a","email":"colmidultu@desoz.com","name":{"first":"Colmi","last":""}}],"Price":"100","EventPlace":"May Pen high school","website":"www.nkeche.com","contentType":"kid","start":"2019-03-17T22:02:51.000Z","featured":"true","image":{"secure_url":"https://res.cloudinary.com/keystone-demo/image/upload/v1552565628/kflukmpbmcjjwbgxcudv.jpg","url":"http://res.cloudinary.com/keystone-demo/image/upload/v1552565628/kflukmpbmcjjwbgxcudv.jpg","resource_type":"image","format":"jpg","height":3648,"width":5472,"signature":"60d775f17d5d110365a88bf29a57e08144329886","version":1552565628,"public_id":"kflukmpbmcjjwbgxcudv"},"state":"published"},{"_id":"5c6bcb9929c6432bf1f21d1f","slug":"dj-shadow-night","title":"DJ Shadow night","end":"2019-03-23T09:52:09.000Z","EventCity":"5c6618edd46bfe05830e8a02","EventState":"5c5bd82a2acca64f2634bd89","categories":{"_id":"5c5ac358fa8765433a4ba657","key":"entertainment","name":"entertainment","__v":0,"description":"The Jamaican entertainment scene is one reason why so many people flock to our shores."},"publishedDate":"2019-02-16T00:00:00.000Z","interested":[{"_id":"5c70dd6029c6432bf1f21d33","email":"binamewada@gmail.com","name":{"first":"bina","last":"mewada"}},{"_id":"5c8922a774ac10181f9e355a","email":"colmidultu@desoz.com","name":{"first":"Colmi","last":""}},{"_id":"5c80e3ed1daf253bb440464a","email":"codeashu@gmail.com","name":{"first":"Hshsjs","last":"Bzbsjsjs"}},{"_id":"5c88f5c744654911c64cb7fd","email":"testhr67@mailinator.com","name":{"first":"testhr","last":""}},{"_id":"5c80f93fb388ce3c9a0ad90b","email":"markjon493@gmail.com","name":{"first":"Jon","last":"Mark"}},{"_id":"5c88f2b9d09d7708da537c31","email":"jathaniel.fatih@cowstore.org","name":{"first":"Mathniel","last":""}}],"Price":"200","EventPlace":"DJ House","website":"","contentType":"adult","start":"2019-03-23T09:52:08.000Z","featured":"true","image":{"secure_url":"https://res.cloudinary.com/keystone-demo/image/upload/v1550568557/nqtuv3eroubb2pwzwy1v.jpg","url":"http://res.cloudinary.com/keystone-demo/image/upload/v1550568557/nqtuv3eroubb2pwzwy1v.jpg","resource_type":"image","format":"jpg","height":1275,"width":1920,"signature":"2611f31f3088866d0e6ce703a5dbf645424eab5e","version":1550568557,"public_id":"nqtuv3eroubb2pwzwy1v"},"state":"published"}]
    return (
      <div className="row mt-4">
        <div className="col-lg-8 col-md-10 col-sm-12 col-xs-12 offset-sm-1 offset-md-1 offset-lg-2 p-0">
          <Description
            name="Events"
            desc="Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec sagittis faucibus lacus eget blandit. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae."
          />
          <TopMenu />
        </div>
        <div className="event-div">
          {/* {this.props.events */}
          {/* ? this.props.events.map((event, i) => { */}
          {data.map((event, i) => {
            return <EventItem key={i} event={event} />;
          })}
          {/* : null} */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //   categories: state.event.categories.data,
  //   page_details: state.event.eventsByCategory.data,
  events: state.event.eventsByCategory.events,
  page_number: state.event.eventsByCategory.page_number,
  successFlag: state.event.eventsByCategory.isSuccess,
  //   searchedEvents: state.event.searchedEvents.data,
  //   searchFocused: state.event.searchedEvents.isFieldFocused,
  filters: state.event
});

const mapDispatchToProps = dispatch => ({
  // getEventsByCategoryRequest: data =>
  //   dispatch(actions.getEventsByCategoryRequest(data)),
  // searchBlured: () => dispatch(actions.searchBlur()),
  // clearList: () => dispatch(actions.clearListOnUnmount())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Events)
);
