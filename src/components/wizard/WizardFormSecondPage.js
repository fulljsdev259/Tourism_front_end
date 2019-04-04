import React from "react";
import { Field, reduxForm, FieldArray, formValueSelector } from "redux-form";
import validate from "./validate";
import {
  renderField,
  renderSelect,
  renderTextarea,
  renderTag
} from "./renderField";
import "./index.scss";
import checkMark from "../../images/icon/checkmark-green.svg";
import { connect } from "react-redux";
const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

const adaptFileEventToValueMulti = delegate => e => delegate(e.target.files);

const FileInput = ({
  input: { value: omitValue, multiple, onChange, onBlur, ...inputProps },
  meta: omitMeta,
  ...props
}) => {
  return (
    <input
      onChange={adaptFileEventToValue(onChange)}
      onBlur={adaptFileEventToValue(onBlur)}
      type="file"
      {...props.input}
      {...props}
    />
  );
};

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const WizardFormSecondPage = props => {
  const { handleSubmit, previousPage, categories, selectedCategory } = props;
  return (
    <div>
      <div className="inActiveHeader">
        <div className="number">1</div>
        <div className="subHeading">General information</div>
        <img src={checkMark} />
      </div>
      <div className="form">
        <div className="form-1">
          <div className="form-header">
            <div className="number">2</div>
            <div className="subHeading">About your company</div>
          </div>
          <form onSubmit={handleSubmit}>
            <Field
              name="categories"
              className="custom-select"
              type="select"
              data={categories ? categories.data : []}
              component={renderSelect}
              label="Select Region"
            />
            {selectedCategory && (
              <Field
                name="subcategories"
                type="select"
                data={
                  categories.data.find(item => selectedCategory === item._id)
                    .subCategory
                }
                component={renderSelect}
                label="Select Manufacturer Type"
              />
            )}
            {/*<Field name="typeOfCompany" type="text" component={ renderField } label="Type of your company" />*/}
            <Field
              name="description"
              type="textarea"
              component={renderTextarea}
              label="Describe your company"
            />
            <Field name="tags" type="text" component={renderTag} label="Tags" />
            {/* <FieldArray name="photo" component={renderMembers} /> */}
            {/*  <Field name="photo" type="file" component={ FileInput } label="Tags" />*/}

            <div>
              <button type="submit" className="nextsignup">
                CONTINUE
              </button>
            </div>
          </form>
        </div>

        {/* <div className="header">
                    <div className="number">3</div>
                    <div className="subHeading">Contact information</div>
                </div> */}
      </div>
    </div>
  );
};
const selector = formValueSelector("wizard");

console.log(selector);

const mapStateToProps = state => {
  console.log(state);

  return {
    selectedCategory: selector(state, "categories")
  };
};

export default reduxForm({
  form: "wizard", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(connect(mapStateToProps)(WizardFormSecondPage));
