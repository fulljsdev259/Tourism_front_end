import React, { Component } from 'react'
import "./aboutStyleJamica.scss"
import i9 from "../../images/image_3_.svg";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import { withRouter } from "react-router-dom";
import AboutStyleJamaica from "./AboutStyleJamaicaComponent";

class index extends Component {
    componentDidMount(){
        this.props.getArtistsRequest();
    }
    render() {
        
        const stylejamaica = this.props.artists.data;
        console.log('0000000000',stylejamaica);
        
      
        return (
            <div className="about-style-zamica-container event-div">
            <img src={i9}/>
                <h1>About Style Jamica</h1>
                {stylejamaica && stylejamaica.websiteDetails &&
                 <p className="descr">{stylejamaica.websiteDetails.description}</p> 
               
                }
                <div className="artists">
                    {
                        stylejamaica && stylejamaica.data.map(
                            (artist, index)=>(
                                <AboutStyleJamaica  artists={artist}/>
                            )
                        )  
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
   
    
    return{
        artists:state.event.Artists.data    ,
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
