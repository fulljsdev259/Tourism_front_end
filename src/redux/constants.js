const constants = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_ERROR: "LOGIN_ERROR",
  LOGOUT: "LOGOUT",

  SIGNUP_REQUEST: "SIGNUP_REQUEST",
  SIGNUP_SUCCESS: "SIGNUP_SUCCESS",
  SIGNUP_ERROR: "SIGNUP_ERROR",

  SOCIAL_LOGIN_REQUEST: "SOCIAL_LOGIN_REQUEST",
  SOCIAL_LOGIN_SUCCESS: "SOCIAL_LOGIN_SUCCESS",
  SOCIAL_LOGIN_ERROR: "SOCIAL_LOGIN_ERROR",

  UPDATE_USER_REQUEST: "UPDATE_USER_REQUEST",
  UPDATE_USER_SUCCESS: "UPDATE_USER_SUCCESS",
  UPDATE_USER_ERROR: "UPDATE_USER_ERROR",

  UPDATE_PASSWORD_REQUEST: "UPDATE_PASSWORD_REQUEST",
  UPDATE_PASSWORD_SUCCESS: "UPDATE_PASSWORD_SUCCESS",
  UPDATE_PASSWORD_ERROR: "UPDATE_PASSWORD_ERROR",

  FORGOT_REQUEST: "FORGOT_REQUEST",
  FORGOT_SUCCESS: "FORGOT_SUCCESS",
  FORGOT_ERROR: "FORGOT_ERROR",

  GET_CATEGORIES_REQUEST: "GET_CATEGORIES_REQUEST",
  GET_CATEGORIES_SUCCESS: "GET_CATEGORIES_SUCCESS",
  GET_CATEGORIES_ERROR: "GET_CATEGORIES_ERROR",

  GET_LOCATIONS_REQUEST: "GET_LOCATIONS_REQUEST",
  GET_LOCATIONS_SUCCESS: "GET_LOCATIONS_SUCCESS",
  GET_LOCATIONS_ERROR: "GET_LOCATIONS_ERROR",

  CONTACT_US_REQUEST: "CONTACT_US_REQUEST",
  CONTACT_US_SUCCESS: "CONTACT_US_SUCCESS",
  CONTACT_US_ERROR: "CONTACT_US_ERROR",

  GET_EVENTS_BY_CATEGORY_REQUEST: "GET_EVENTS_BY_CATEGORY_REQUEST",
  GET_EVENTS_BY_CATEGORY_SUCCESS: "GET_EVENTS_BY_CATEGORY_SUCCESS",
  GET_EVENTS_BY_CATEGORY_ERROR: "GET_EVENTS_BY_CATEGORY_ERROR",

  GET_EVENT_BY_ID_REQUEST: "GET_EVENT_BY_ID_REQUEST",
  GET_EVENT_BY_ID_SUCCESS: "GET_EVENT_BY_ID_SUCCESS",
  GET_EVENT_BY_ID_ERROR: "GET_EVENT_BY_ID_ERROR",

  GET_USER_POST_BY_ID_REQUEST: "GET_USER_POST_BY_ID_REQUEST",
  GET_USER_POST_BY_ID_SUCCESS: "GET_USER_POST_BY_ID_SUCCESS",
  GET_USER_POST_BY_ID_ERROR: "GET_USER_POST_BY_ID_ERROR",

  DELETE_EVENT_REQUEST: "DELETE_EVENT_REQUEST",
  DELETE_EVENT_SUCCESS: "DELETE_EVENT_SUCCESS",
  DELETE_EVENT_ERROR: "DELETE_EVENT_ERROR",

  UPDATE_EVENT_REQUEST: "UPDATE_EVENT_REQUEST",
  UPDATE_EVENT_SUCCESS: "UPDATE_EVENT_SUCCESS",
  UPDATE_EVENT_ERROR: "UPDATE_EVENT_ERROR",

  ADD_REVIEW_REQUEST: "ADD_REVIEW_REQUEST",
  ADD_REVIEW_SUCCESS: "ADD_REVIEW_SUCCESS",
  ADD_REVIEW_ERROR: "ADD_REVIEW_ERROR",

  ADD_INTEREST_REQUEST: "ADD_INTEREST_REQUEST",
  ADD_INTEREST_SUCCESS: "ADD_INTEREST_SUCCESS",
  ADD_INTEREST_ERROR: "ADD_INTEREST_ERROR",

  GET_USER_DATA_REQUEST: "GET_USER_DATA_REQUEST",
  GET_USER_DATA_SUCCESS: "GET_USER_DATA_SUCCESS",
  GET_USER_DATA_ERROR: "GET_USER_DATA_ERROR",

  SUBMIT_EVENT_REQUEST: "SUBMIT_EVENT_REQUEST",
  SUBMIT_EVENT_SUCCESS: "SUBMIT_EVENT_SUCCESS",
  SUBMIT_EVENT_ERROR: "SUBMIT_EVENT_ERROR",
  SUBMIT_EVENT_RESET: "SUBMIT_EVENT_RESET",

  GET_FEATURED_EVENTS_REQUEST: "GET_FEATURED_EVENTS_REQUEST",
  GET_FEATURED_EVENTS_SUCCESS: "GET_FEATURED_EVENTS_SUCCESS",
  GET_FEATURED_EVENTS_ERROR: "GET_FEATURED_EVENTS_ERROR",

  STATE_CHANGE: "STATE_CHANGE",
  CITY_CHANGE: "CITY_CHANGE",
  
  GET_EVENT_BY_ID_UNMOUNT: "GET_EVENT_BY_ID_UNMOUNT",

  GET_INTEREST_REQUEST:"GET_INTEREST_REQUEST",
  GET_INTEREST_SUCCESS:"GET_INTEREST_SUCCESS",
  GET_INTEREST_ERROR:"GET_INTEREST_ERROR",
};

export default constants;
