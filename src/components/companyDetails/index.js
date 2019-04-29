import React, { Component } from "react";
import { Formik, Form } from "formik";
import { connect } from "react-redux";
import * as actions from "../../redux/actions";
import Loader from "react-loader-spinner";
import subCategory from "../subCategory";

class CompanyDetails extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { data } = this.props.post;
    const { categories } = this.props;
    const companyData =
      data && data.find(m => m._id == this.props.match.params.id);
    return (
      <div className="">
        <div className="row profile-row">
          <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-1 col-sm-8 offset-sm-1 profile-form">
            <div className="profile-title">
              <h3>Company information</h3>
            </div>
            {data && companyData && (
              <>
                <Formik
                  initialValues={{
                    title: companyData.title,
                    categories: companyData.categories._id,
                    subcategories: companyData.subcategories._id,
                    description: companyData.description,
                    address: companyData.address,
                    phone_number: companyData.phone_number,
                    facebook_url: companyData.facebook_url,
                    insta_url: companyData.insta_url,
                    fax: companyData.fax,
                    website: companyData.website
                  }}
                  // enableReinitialize
                  validate={values => {
                    let errors = {};
                    if (!values.title) {
                      errors.title = "Required";
                    }
                    if (!values.categories) {
                      errors.categories = "Required";
                    }
                    if (!values.subcategories) {
                      errors.subcategories = "Required";
                    }
                    if (!values.description) {
                      errors.description = "Required";
                    }
                    if (!values.address) {
                      errors.address = "Required";
                    }
                    if (!values.phone_number) {
                      errors.phone_number = "Required";
                    }
                    if (!values.facebook_url) {
                      errors.facebook_url = "Required";
                    }
                    if (!values.insta_url) {
                      errors.insta_url = "Required";
                    }
                    if (!values.fax) {
                      errors.fax = "Required";
                    }
                    if (!values.website) {
                      errors.website = "Required";
                    }
                    return errors;
                  }}
                  onSubmit={(values, actions) => {
                    this.props.updateEvent({
                      id: companyData._id,
                      data: values,
                      user_id: this.props.userdata.data._id
                    });
                  }}
                  render={({
                    values,
                    errors,
                    status,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    ...props
                  }) => {
                    if (this.props.updateEvent.isSuccess) {
                      props.resetForm();
                      this.props.submitEventReset();
                    }
                    return (
                      <Form>
                        <div className="input-fields-section">
                          <label className="label">Company Name</label>
                          <input
                            value={values.title}
                            className="input-field"
                            placeholder=""
                            name="title"
                            onChange={handleChange}
                            type="text"
                          />
                          {errors.title && touched.title && (
                            <label className="error">{errors.title}</label>
                          )}
                        </div>
                        <div className="input-fields-section">
                          <label className="label">Description</label>
                          <input
                            value={values.description}
                            className="input-field"
                            name="description"
                            placeholder=""
                            onChange={handleChange}
                            type="text"
                          />
                          {errors.description && touched.description && (
                            <label className="error">
                              {errors.description}
                            </label>
                          )}
                        </div>
                        <div className="input-fields-section">
                          {/* <label className="label">Category</label> */}
                          {/* <input
                          value={values.category}
                          className="input-field"
                          name="category"
                          placeholder=""
                          onChange={handleChange}
                          type="text"
                        />

                           <select
                              name="category"
                              value={values.category}
                              type="text"
                              placeholder=""
                              onChange={handleChange}
                              id="category"
                            >
                              <option value="">Select category</option>
                              {categories && categories.data
                                ? categories.data.map((category, i) => (
                                  <option key={i} value={category._id}>
                                    {category.name.replace("_", " & ")}
                                  </option>
                                ))
                                : null}
                            </select>
                        {errors.category && touched.category && (
                          <label className="error">{errors.category}</label>
                        )}
                      </div>
                      <div className="input-fields-section">
                        <label className="label">SubCategory</label>
                        <input
                          value={values.subCategory}
                          className="input-field"
                          name="subCategory"
                          placeholder=""
                          onChange={handleChange}
                          type="text"
                        />
                        {errors.subCategory && touched.subCategory && (
                          <label className="error">{errors.subCategory}</label>
                        )}
                      </div> */}

                          {categories && categories.data ? (
                            <>
                              <div className="input-fields">
                                <label>Category</label>
                                <div>
                                  <select
                                    name="categories"
                                    value={values.categories}
                                    placeholder=""
                                    onChange={handleChange}
                                    id="categories"
                                  >
                                    <option value="">Select category</option>
                                    {categories.data
                                      .sort((a, b) =>
                                        a.name.localeCompare(b.name)
                                      )
                                      .map((data, i) => (
                                        <option key={i} value={data._id}>
                                          {data.name}
                                        </option>
                                      ))}
                                  </select>
                                  {errors.categories && touched.categories && (
                                    <label className="error">
                                      {errors.categories}
                                    </label>
                                  )}
                                </div>
                              </div>{" "}
                              {values.categories && (
                                <div className="input-fields">
                                  <label>Sub-Category</label>
                                  <div>
                                    <select
                                      name="subcategories"
                                      value={values.subcategories}
                                      placeholder=""
                                      onChange={handleChange}
                                    >
                                      <option value="">
                                        Select SubCategory
                                      </option>
                                      {categories.data
                                        .find(
                                          data => data._id == values.categories
                                        )
                                        .subCategory.map((data, i) => (
                                          <option key={i} value={data._id}>
                                            {data.name}
                                          </option>
                                        ))}
                                    </select>
                                    {errors.subcategories &&
                                      touched.subcategories && (
                                        <label className="error">
                                          {errors.subcategories}
                                        </label>
                                      )}
                                  </div>
                                </div>
                              )}
                            </>
                          ) : null}
                        </div>

                        <div className="input-fields-section">
                          <label className="label">Phone Number</label>
                          <input
                            value={values.phone_number}
                            className="input-field"
                            name="phone_number"
                            placeholder=""
                            onChange={handleChange}
                            type="text"
                          />
                          {errors.phone_number && touched.phone_number && (
                            <label className="error">
                              {errors.phone_number}
                            </label>
                          )}
                        </div>
                        <div className="input-fields-section">
                          <label className="label">Address</label>
                          <input
                            value={values.address}
                            className="input-field"
                            name="address"
                            placeholder=""
                            onChange={handleChange}
                            type="text"
                          />
                          {errors.address && touched.address && (
                            <label className="error">{errors.address}</label>
                          )}
                        </div>
                        <div className="input-fields-section">
                          <label className="label">Website</label>
                          <input
                            value={values.website}
                            className="input-field"
                            name="website"
                            placeholder=""
                            onChange={handleChange}
                            type="text"
                          />
                          {errors.website && touched.website && (
                            <label className="error">{errors.website}</label>
                          )}
                        </div>
                        <div className="input-fields-section">
                          <label className="label">Facebook URL</label>
                          <input
                            value={values.facebook_url}
                            className="input-field"
                            name="facebook_url"
                            placeholder=""
                            onChange={handleChange}
                            type="text"
                          />
                          {errors.facebook_url && touched.facebook_url && (
                            <label className="error">
                              {errors.facebook_url}
                            </label>
                          )}
                        </div>
                        <div className="input-fields-section">
                          <label className="label">Instagram</label>
                          <input
                            value={values.insta_url}
                            className="input-field"
                            name="insta_url"
                            placeholder=""
                            onChange={handleChange}
                            type="text"
                          />
                          {errors.insta_url && touched.insta_url && (
                            <label className="error">{errors.insta_url}</label>
                          )}
                        </div>
                        <div className="input-fields-section">
                          <label className="label">Fax</label>
                          <input
                            value={values.fax}
                            className="input-field"
                            name="fax"
                            placeholder=""
                            onChange={handleChange}
                            type="text"
                          />
                          {errors.fax && touched.fax && (
                            <label className="error">{errors.fax}</label>
                          )}
                        </div>
                        <div className="save-changes">
                          <button type="submit" className="save-btn">
                            Update Company Info
                          </button>
                        </div>
                      </Form>
                    );
                  }}
                />
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userdata: state.auth.userdata.data,
  categories: state.event.categories.data,
  post: state.event.postById.data,
  updateEvent: state.event.updateEvent
});

const mapDispatchToProps = dispatch => ({
  updateEvent: data => dispatch(actions.updateEventRequest(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyDetails);
