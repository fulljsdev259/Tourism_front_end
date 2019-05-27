import React, { Component } from 'react'
import placeholder_img from "../../images/placeholder.jpg";
import { Link } from "react-router-dom";

export default class AboutStyleJamaicaComponent extends Component {
    render() {
        return (
            <div className="events-list">
                <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12  offset-md-1 offset-lg-2 event-img">
                <div
                    className="img"
                    style={{
                    backgroundImage: `url(${image || placeholder_img})`,
                    backgroundSize: "cover"
                    }}
                />
                </div>

                
            </div>
        )
    }
}
