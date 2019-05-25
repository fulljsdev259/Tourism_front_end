import React, { Component } from 'react'
import "./aboutStyleJamica.scss"
import i9 from "../../images/image_3_.svg";

export default class index extends Component {
    render() {
        return (
            <div className="about-style-zamica-container">
            <img src={i9}/>
                <h1>About Style Jamica</h1>
                <p>description</p>
            </div>
        )
    }
}
