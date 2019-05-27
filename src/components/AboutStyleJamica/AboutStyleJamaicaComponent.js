import React, { Component } from 'react'
import placeholder_img from "../../images/placeholder.jpg";
import { Link } from "react-router-dom";
import "./aboutStyleJamica.scss";

export default class AboutStyleJamaicaComponent extends Component {
    render() {
        const { image,description,name,websiteurl} = this.props.artists;
        console.log(this.props.artists,"art");
        
        return (
                <div className="events-list row">
                <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12  offset-md-1 offset-lg-2  event-img">
                <div
                    className="img"
                    style={{
                    backgroundImage: `url(${image ? image.secure_url:placeholder_img})`,
                    backgroundSize: "cover"
                    }}
                />
                </div>
                <div className="col-lg-5 col-md-8 col-sm-6 col-sm-12 col-xs-12  event-detail">
                    <div>
                        <div className="artistName">
                            <span>Name:</span>
                            <p>{name}</p>
                        </div>
                       <div className="description">
                             <span>description:</span>
                            <p>{description}</p>
                       </div>
                        <div className="shopLink">
                            <span>Shop:</span>
                            <a href={websiteurl} target="_blank">{websiteurl}</a>
                        </div>

                    </div>
                </div>

                
            </div>
        )
    }
}
