const validate = values => {
  const errors = {};

  if (!values.fullName) {
    errors.fullName = "Name is Required";
  }
  if (!values.title) {
    errors.title = "Company Name Required";
  }
  // if (!values.password) {
  //   errors.password = " Password Required";
  // }
  if (!values.firstName) {
    errors.firstName = "Required";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  }
  if (!values.email) {
    // errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.description) {
    errors.description = "Required";
  }
  if (!values.sex) {
    errors.sex = "Required";
  }
  if (!values.favoriteColor) {
    errors.favoriteColor = "Required";
  }

  if (!values.region) {
    errors.region = "Region is required";
  }
  if (!values.categories) {
    errors.categories = "Manufacturer Type is required";
  }
  if (!values.category) {
    errors.category = "Category is required";
  }

  // if ( !values.typeOfCompany ) {
  //     errors.typeOfCompany = 'Type of Company is required'
  // }

  // if ( !values.description ) {
  //     errors.description = 'description is required'
  // }

  if (!values.address) {
    errors.address = "Address is required";
  }

  if (!values.phone_number) {
    errors.phoneNumber = "Phone Number is required";
  } else if (!/^[0-9]*$/.test(values.phone_number)) {
    errors.phone_number = "Invalid";
  }

  // if ( !values.website ) {
  //     errors.website = 'Website is required'
  // }

  return errors;
};

export default validate;
