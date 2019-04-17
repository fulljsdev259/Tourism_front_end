import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import { Formik, Form } from "formik";
import FacebookLogin from "react-facebook-login";
import Loader from "react-loader-spinner";
import { withRouter, Route, Link } from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <>
        <div className="fb-btn">
          <FacebookLogin
            appId="2194646720630049"
            autoLoad={true}
            fields="name,email,picture"
            callback={this.props.responseFacebook}
            icon="fa-facebook"
            textButton="Log in with Facebook"
          />
        </div>
        <div className="row or-section">
          <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 col-5 hr-line-section">
            <div className="hr-line" />
          </div>
          <div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 col-2">
            <div className="or-text">or</div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 col-5 hr-line-section">
            <div className="hr-line" />
          </div>
        </div>
        <Formik
          initialValues={{
            email: "",
            password: "",
            rememberMe: true
          }}
          validate={values => {
            let errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Required";
            }
            return errors;
          }}
          onSubmit={(values, actions) => {
            this.props.loginRequest(values);
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
                <label>Email</label>
                <div>
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
                <label>Password</label>
                <div>
                  <input
                    name="password"
                    value={values.password}
                    type="password"
                    placeholder=""
                    onChange={handleChange}
                  />
                  {errors.password && touched.password && (
                    <label className="error">{errors.password}</label>
                  )}
                </div>
              </div>
              <div className="remember-me">
                <div>
                  <input
                    type="checkbox"
                    id="RememberMe"
                    name="rememberMe"
                    value="rememberMe"
                    checked={values.rememberMe}
                    onChange={handleChange}
                  />
                  <label htmlFor="RememberMe" />
                  <label className="remember-text">Remember me</label>
                </div>
                <span
                  className="forgot-password"
                  onClick={e => {
                    e.preventDefault();
                  }}
                >
                  Forgot password?
                </span>
              </div>
              <div className="login-btn">
                <button type="submit">
                  {this.props.login.isLoading ? (
                    <div className="loader-div">
                      <Loader type="Oval" color="#fff" height="20" width="20" />
                    </div>
                  ) : (
                    "Log in"
                  )}
                </button>
              </div>
            </Form>
          )}
        />
      </>
    );
  }
}
const mapStateToProps = state => ({
  login: state.auth.login
});

const mapDispatchToProps = dispatch => ({
  loginRequest: data => dispatch(actions.loginRequest(data)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);
