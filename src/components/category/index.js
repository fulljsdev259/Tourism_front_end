import React, { Component } from "react";
import fitness from "../../images/-e-ic_fitness.png";
import food from "../../images/-e-ic_food.png";
import shopping from "../../images/-e-ic_shopping.png";
import SPA from "../../images/-e-ic_SPA.png";
// import CategoryBlock from "../generic/CategoryBlock";
import "./category.scss";
import TopMenu from "../generic/TopMenu";
import Description from "../generic/Description";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import EventItem from "../generic/EventItem";

class Category extends Component {
  render() {
    // console.log(this.props.categories, this.props.location);
    const cat =
      this.props.categories && this.props.categories.data
        ? this.props.categories.data.find(
            category => this.props.location.pathname === "/" + category.name
          )
        : "";
    const categories = [
      { name: "Food", image: food, path: "/food" },
      { name: "SPA", image: SPA, path: "/SPA" },
      { name: "Fitness", image: fitness, path: "/fitness" },
      { name: "Shopping", image: shopping, path: "/shopping" }
    ];
    return (
      <div className="event-page">
        <div className="categories">
          {categories.map((category, i) => {
            return (
              <div
                key={i}
                className={`category ${
                  this.props.location.pathname === `/${category.name}`
                    ? "selected"
                    : null
                }`}
              >
                {/* <CategoryBlock category={category} /> */}
              </div>
            );
          })}
        </div>
        <TopMenu />
        <Description name={cat.name} desc={cat.description} />
        <div className="event-div row">
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
  categories: state.event.categories.data,
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
  )(Category)
);
