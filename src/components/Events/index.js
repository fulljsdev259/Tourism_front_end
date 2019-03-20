import React, { Component } from "react";
import Description from "../generic/Description";
import TopMenu from "../generic/TopMenu";
import EventItem from "../generic/EventItem";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./events.scss";

class Events extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <Description
          name="Events"
          desc="Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae. Donec sagittis faucibus lacus eget blandit. Ut laoreet sodales nisi, quis iaculis nulla iaculis vitae."
        />
        <TopMenu />
        <div className="event-div">
          {this.props.events
            ? this.props.events.map((event, i) => {
                return <EventItem key={i} event={event} />;
              })
            : null}
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
