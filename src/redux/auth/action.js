import * as actions from "../actions";
import { call, put } from "redux-saga/effects";
import fireApi from "../../services/fireApi";
import {
  setLoggedUser,
  getLoggedUser,
  localStore
} from "../../services/storage";
import { toast } from "react-toastify";

export function* loginRequest(action) {
  try {
    const { email, password, rememberMe } = action.payload;
    const response = yield call(fireApi, "POST", "signin", {
      email,
      password,
      rememberMe
    });
    if (response) {
      if (response.data && response.data.token) {
        localStore("token", response.data.token);
        yield put(actions.loginSuccess());
        // yield put(actions.getInterestedEventsRequest());
        yield put(actions.getUserDataRequest(response.data.token));
      } else {
        toast.error(response.data.message);
        yield put(actions.loginError());
      }
    }
  } catch (e) {
    yield put(actions.loginError());
  }
}

export function* signupRequest(action) {
  try {
    const { name, email, password, receiveEmails } = action.payload;
    let [first, ...last] = name.split(" ");
    last = last.join(" ");
    const response = yield call(fireApi, "POST", "user/register", {
      name: {
        first,
        last
      },
      email,
      password,
      receiveEmails
    });
    if (response.data && response.data.success) {
      toast.success(response.data.message);
      yield put(actions.signupSuccess());
    } else {
      if (
        response.data.message &&
        response.data.message.errmsg &&
        response.data.message.errmsg.includes("duplicate key")
      ) {
        toast.error("Email Already Exists");
      } else {
        toast.error("Something Went Wrong");
      }
      yield put(actions.signupError());
    }
  } catch (e) {
    yield put(actions.signupError());
  }
}

export function* socialLoginRequest(action) {
  try {
    const { name, email, imageUrl } = action.payload;
    let [first, ...last] = name.split(" ");
    last = last.join(" ");
    const response = yield call(fireApi, "POST", "social/login", {
      email,
      imageUrl,
      name: {
        first,
        last
      }
    });
    if (response) {
      if (response.data && response.data.token) {
        localStore("token", response.data.token);
        yield put(actions.socialLoginSuccess());
        // yield put(actions.getInterestedEventsRequest());
        yield put(actions.getUserDataRequest(response.data.token));
      } else {
        toast.error(response.data.message);
        yield put(actions.socialLoginError());
      }
    }
  } catch (e) {
    yield put(actions.socialLoginError());
  }
}

export function* logout(action) {
  localStore("clear");
}

export function* contactUsRequest(action) {
  try {
    const { name, email, message } = action.payload;
    const response = yield call(fireApi, "POST", "contactUs", {
      name,
      email,
      message
    });
    if (response.data.data) {
      toast.success("Message Sent");
      yield put(actions.contactUsSuccess());
    } else {
      yield put(actions.contactUsError());
    }
  } catch (e) {
    yield put(actions.contactUsError());
  }
}

export function* getUserDataRequest(action) {
  const header = {
    Authorization: action.payload ? action.payload : localStorage("token")
  };
  try {
    const response = yield call(fireApi, "GET", "user", null, header);
    if (response) {
      if (response.data.success) {
        yield put(actions.getUserDataSuccess(response.data));
      } else {
        // yield put(actions.logout());
      }
    } else {
      toast.error(response.data.message);
      yield put(actions.getUserDataError());
    }
  } catch (e) {
    yield put(actions.getUserDataError());
  }
}
