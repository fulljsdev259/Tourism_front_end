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

export function* getEventsByCategoryRequest(action) {
  try {
    const { page_number, id, ageFlag, eventState, eventCity } = action.payload;
    const response = yield call(
      fireApi,
      "GET",
      `events?categories=${id}&page=${page_number}${
        ageFlag === "all" ? "" : "&contentType=" + ageFlag
      }${eventState && "&EventState=" + eventState}${eventCity &&
        "&EventCity=" + eventCity}`
    );
    if (response) {
      yield put(
        actions.getEventsByCategorySuccess({
          page_number: page_number + 1,
          ...response.data
        })
      );
    } else {
      yield put(actions.getEventsByCategoryError());
    }
  } catch (e) {
    yield put(actions.getEventsByCategoryError());
  }
}

export function* getEventByIdRequest(action) {
  try {
    const response = yield call(fireApi, "GET", `getEvent/${action.payload}`);
    if (response) {
      yield put(actions.getEventByIdSuccess(response.data));
    } else {
      yield put(actions.getEventByIdError());
    }
  } catch (e) {
    yield put(actions.getEventByIdError());
  }
}

export function* addReviewRequest(action) {
  const header = {
    Authorization: localStore("token")
  };
  try {
    const response = yield call(
      fireApi,
      "POST",
      `events/addReview/${action.payload.event_id}`,
      action.payload.values,
      header
    );
    if (response) {
      toast.success("Your review posted successfully");
      yield put(actions.addReviewSuccess(response.data));
      yield put(actions.getEventByIdRequest(action.payload.event_id));
    } else {
      toast.error("Review");
      yield put(actions.addReviewError());
    }
  } catch (e) {
    yield put(actions.addReviewError());
  }
}
