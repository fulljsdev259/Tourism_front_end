import { createAction } from "redux-actions";
import constants from "./constants";

export const loginRequest = createAction(constants.LOGIN_REQUEST);
export const loginSuccess = createAction(constants.LOGIN_SUCCESS);
export const loginError = createAction(constants.LOGIN_ERROR);
export const signupRequest = createAction(constants.SIGNUP_REQUEST);
export const signupSuccess = createAction(constants.SIGNUP_SUCCESS);
export const signupError = createAction(constants.SIGNUP_ERROR);
export const getCategoriesRequest = createAction(constants.GET_CATEGORIES_REQUEST);
export const getCategoriesSuccess = createAction(constants.GET_CATEGORIES_SUCCESS);
export const getCategoriesError = createAction(constants.GET_CATEGORIES_ERROR);
export const getLocationsRequest = createAction(constants.GET_LOCATIONS_REQUEST);
export const getLocationsSuccess = createAction(constants.GET_LOCATIONS_SUCCESS);
export const getLocationsError = createAction(constants.GET_LOCATIONS_ERROR);
export const contactUsRequest = createAction(constants.CONTACT_US_REQUEST);
export const contactUsSuccess = createAction(constants.CONTACT_US_SUCCESS);
export const contactUsError = createAction(constants.CONTACT_US_ERROR);
