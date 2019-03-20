import * as actions from "../actions";
import { call, put, select } from "redux-saga/effects";
import fireApi from "../../services/fireApi";
import { localStore } from "../../services/storage";
import { toast } from "react-toastify";

export function* getCategoriesRequest(action) {
    try {
      const response = yield call(fireApi, "GET", "getCategory");
      if (response) {
        yield put(actions.getCategoriesSuccess(response.data));
      } else {
        yield put(actions.getCategoriesError());
      }
    } catch (e) {
      yield put(actions.getCategoriesError());
    }
  }
  
  export function* getLocationsRequest(action) {
    try {
      const response = yield call(fireApi, "GET", "getLocations");
      if (response) {
        yield put(actions.getLocationsSuccess(response.data));
      } else {
        yield put(actions.getLocationsError());
      }
    } catch (e) {
      yield put(actions.getLocationsError());
    }
  }
  