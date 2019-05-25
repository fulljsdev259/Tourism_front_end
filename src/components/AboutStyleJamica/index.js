import React, { Component } from 'react'
import "./aboutStyleJamica.scss"
import i9 from "../../images/image_3_.svg";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import { withRouter } from "react-router-dom";


class index extends Component {
    componentDidMount(){
        this.props.getArtistsRequest();
    }
    render() {
        // console.log(this.props.sdfsdf)
        return (
            <div className="about-style-zamica-container">
            <img src={i9}/>
                <h1>About Style Jamica</h1>
                {/* <p>description</p> */}
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{
        wishList:state.event.wishLists.data,
        userdata: state.auth.userdata.data,

    }
    
}

const mapDispatchToProps = dispatch => ({
  getArtistsRequest: () => dispatch(actions.getArtistsRequest()),
  addInterest: id => dispatch(actions.addInterestRequest(id))

});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(index)
);
