import React, { Component } from "react";
import "./category.scss";
import TopMenu from "../generic/TopMenu";
import Description from "../generic/Description";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CategoryItem from "../generic/CategoryItem";
import CategoryNav from "../generic/CategoryNav";
import * as actions from "../../redux/actions";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_city: "",
      search_state: "",
      state: "",
      city: "",
      ageFlag: false,
      id: "",
      status: true,
      location_status: ""
    };
  }
  componentDidMount() {
    const { filters } = this.props;
    if (filters.categories && filters.categories.data && !this.state.id) {
      const oneCategory = filters.categories.data.data.find(category => {
        return category.name === this.props.match.path.replace("/", "");
      });
      if (oneCategory) {
        if (!this.state.id) {
          this.setState({ id: oneCategory._id });
        }
        this.props.getEventsByCategoryRequest({
          id: oneCategory._id,
          page_number: 1,
          ageFlag: filters.ageFlag,
          eventState: filters.selectedState,
          eventCity: filters.selectedCity
        });
      }
    }
  }
  render() {
    const { categories2 } = this.props;
    // const cat = {
    //   name: "test",
    //   description: "description"
    // };
    const cat =
      this.props.categories && this.props.categories.data
        ? this.props.categories.data.find(
            category => this.props.location.pathname === "/" + category.name
          )
        : "";
    return (
      <div className="event-page">
        <CategoryNav categories={categories2} />
        <div className="row mt-4">
          <div className="col-lg-8 col-md-10 col-sm-12 col-xs-12 offset-sm-1 offset-md-1 offset-lg-2 p-0">
            <TopMenu />
            {cat && <Description name={cat.name} desc={cat.description} />}
          </div>
        </div>
        <div className="event-div row">
          {/* {data.map((event, i) => { */}
          {this.props.events
            ? this.props.events.map((event, i) => {
                return <CategoryItem key={i} event={event} />;
              })
            : null}
          {/* })} */}
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
  getEventsByCategoryRequest: data =>
    dispatch(actions.getEventsByCategoryRequest(data))
  // searchBlured: () => dispatch(actions.searchBlur()),
  // clearList: () => dispatch(actions.clearListOnUnmount())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Category)
);
