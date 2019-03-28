import { handleActions } from "redux-actions";
import update from "immutability-helper";
import constants from "../constants";

const initialState = {
  login: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
    data: {}
  },
  socialLogin: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
    data: {}
  },
  signup: {
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: "",
    data: {}
  }
};

const handleLoginRequest = (state, action) =>
  update(state, {
    login: {
      isLoading: { $set: true },
      isSuccess: { $set: false },
      isError: { $set: false },
      message: { $set: "" }
    }
  });
const handleLoginSuccess = (state, action) =>
  update(state, {
    login: {
      isLoading: { $set: false },
      isSuccess: { $set: true },
      isError: { $set: false },
      data: { $set: action.payload }
    }
  });
const handleLoginError = (state, action) =>
  update(state, {
    login: {
      isLoading: { $set: false },
      isSuccess: { $set: false },
      isError: { $set: true },
      message: { $set: action.payload }
    }
  });


  const handleSignupRequest = (state, action) =>
  update(state, {
    signup: {
      isLoading: { $set: true },
      isSuccess: { $set: false },
      isError: { $set: false },
      message: { $set: "" }
    }
  });
const handleSignupSuccess = (state, action) =>
  update(state, {
    signup: {
      isLoading: { $set: false },
      isSuccess: { $set: true },
      isError: { $set: false },
      data: { $set: action.payload }
    }
  });
const handleSignupError = (state, action) =>
  update(state, {
    signup: {
      isLoading: { $set: false },
      isSuccess: { $set: false },
      isError: { $set: true },
      message: { $set: action.payload }
    }
  });


export default handleActions(
  {
    [constants.LOGIN_REQUEST]: handleLoginRequest,
    [constants.LOGIN_SUCCESS]: handleLoginSuccess,
    [constants.LOGIN_ERROR]: handleLoginError,
    // [constants.LOGIN_RESET]: handleLoginReset,
    // [constants.LOGOUT]: handleLogout,
    [constants.SIGNUP_REQUEST]: handleSignupRequest,
    [constants.SIGNUP_SUCCESS]: handleSignupSuccess,
    [constants.SIGNUP_ERROR]: handleSignupError,
    // [constants.SIGNUP_RESET]: handleSignupReset,
    // [constants.GET_USER_DATA_REQUEST]: handleUserDataRequest,
    // [constants.GET_USER_DATA_SUCCESS]: handleUserDataSuccess,
    // [constants.GET_USER_DATA_ERROR]: handleUserDataError,
    // [constants.SOCIAL_LOGIN_REQUEST]: handleSocialLoginRequest,
    // [constants.SOCIAL_LOGIN_SUCCESS]: handleSocialLoginSuccess,
    // [constants.SOCIAL_LOGIN_ERROR]: handleSocialLoginError,
    // [constants.UPDATE_USER_REQUEST]: handleUpdateUserRequest,
    // [constants.UPDATE_USER_SUCCESS]: handleUpdateUserSuccess,
    // [constants.UPDATE_USER_ERROR]: handleUpdateUserError,
    // [constants.UPDATE_PASSWORD_REQUEST]: handleUpdatePasswordRequest,
    // [constants.UPDATE_PASSWORD_SUCCESS]: handleUpdatePasswordSuccess,
    // [constants.UPDATE_PASSWORD_ERROR]: handleUpdatePasswordError
  },
  initialState
);
