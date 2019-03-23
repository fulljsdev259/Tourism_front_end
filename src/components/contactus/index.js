import React, { Component } from "react";
import Block1 from "../generic/Block1";
import l_img from "../../images/l_img.png";
import contact_r_img from "../../images/contactus.png";
import { Formik, Form } from "formik";

export default class ContactUs extends Component {
  render() {
    return (
      <Block1 l_img={l_img} r_img={contact_r_img}>
        <div className="container-fluid">
          <div className="row text-center contact-block">
            <div className="col-lg-6 offset-lg-1 col-md-8 offset-md-2 col-sm-12 col-xs-12 contact-div">
              <div className="row">
                <div className="col-md-10 offset-md-1 col-sm-10 offset-sm-1 center-align">
                  <div className="title">Contact Us</div>
                  <div className="desc">
                    <div className="info">
                      Lorem ipsum dolor sit amet, enim fabellas vix et. Et eos
                      veri erroribus. Te nobis quaestio neglegentur pro, eam
                      quis temporibus interpretaris te. No veri velit soleat
                      est.
                    </div>
                    <Formik
                      initialValues={{
                        name: "",
                        email: "",
                        message: ""
                      }}
                      validate={values => {
                        let errors = {};
                        if (!values.email) {
                          errors.email = "Required";
                        } else if (
                          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            values.email
                          )
                        ) {
                          errors.email = "Invalid email address";
                        }
                        if (!values.name) {
                          errors.name = "Required";
                        }
                        if (!values.message) {
                          errors.message = "Required";
                        }
                        return errors;
                      }}
                      onSubmit={(values, actions) => {
                        actions.resetForm();
                        this.props.contactUsRequest(values);
                      }}
                      render={({
                        values,
                        errors,
                        status,
                        touched,
                        handleBlur,
                        handleChange,
                        handleSubmit,
                        isSubmitting
                      }) => (
                        <Form>
                          <div className="input-fields">
                            <div className="label">
                              <label>Your Name</label>
                            </div>
                            <div className="field-block">
                              <input
                                name="name"
                                value={values.name}
                                type="text"
                                placeholder=""
                                onChange={handleChange}
                              />
                              {errors.name && touched.name && (
                                <label className="error">{errors.name}</label>
                              )}
                            </div>
                          </div>
                          <div className="input-fields">
                            <div className="label">
                              <label>Your Email</label>
                            </div>
                            <div className="field-block">
                              <input
                                name="email"
                                value={values.email}
                                type="email"
                                placeholder=""
                                onChange={handleChange}
                              />
                              {errors.email && touched.email && (
                                <label className="error">{errors.email}</label>
                              )}
                            </div>
                          </div>
                          <div className="input-fields">
                            <div className="label">
                              <label>Your Message here</label>
                            </div>
                            <div className="field-block">
                              <textarea
                                name="message"
                                value={values.message}
                                type="text"
                                placeholder=""
                                onChange={handleChange}
                              />
                              {errors.message && touched.message && (
                                <label className="error">
                                  {errors.message}
                                </label>
                              )}
                            </div>
                          </div>
                          <div>
                            <button type="submit">Save Changes</button>
                          </div>
                        </Form>
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Block1>
    );
  }
}
