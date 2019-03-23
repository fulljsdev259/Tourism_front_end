import React, { Component } from "react";
import Block1 from "../generic/Block1";
import l_img from "../../images/l_img.png";
import contact_r_img from "../../images/contact_r_img.png";
import { Formik, Form } from "formik";
import "./aboutus.scss";

export default class AboutUs extends Component {
  render() {
    return (
      <Block1 l_img={l_img} r_img={contact_r_img}>
        <div className="container-fluid">
          <div className="row text-center contact-block">
            <div className="col-lg-6 offset-lg-1 col-md-8 offset-md-2 col-sm-10 col-sm-offset-1 contact-div">
              <div className="title">About Us</div>
              <div className="desc">
                <div className="info">
                  About Us About UsAbout UsAbout UsAbout UsAbout UsAbout UsAbout
                  UsAbout UsAbout UsAbout UsAbout Us Lorem ipsum dolor sit amet,
                  enim fabellas vix et. Et eos veri erroribus. Te nobis quaestio
                  neglegentur pro, eam quis temporibus interpretaris te. No veri
                  velit soleat est.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Block1>
    );
  }
}
