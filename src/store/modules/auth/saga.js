import { takeLatest, all, put, call, race } from "redux-saga/effects";
import api from "../../../services/api";
import history from "~/services/history";

import {
  signInSuccess,
  signFailure,
  signUpSuccess,
  restoreAccountSuccess,
} from "./actions";

import errorHandler from "../utils/errorHandler";
import timer from "../utils/timer";

function* signIn({ payload }) {
  try {
    const { body } = payload;

    const { response } = yield race({
      response: call(api.post, "/session", body),
      timeout: call(timer),
    });

    const { token } = response.data;
    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(response.data));
    history.push("/account");
  } catch (error) {
    console.tron.log(error);
    yield errorHandler(error, signFailure);
  }
}

function* signUp({ payload }) {
  try {
    const { body } = payload;

    const { response } = yield race({
      response: call(api.post, "/user", body),
      timeout: call(timer),
    });

    yield put(signUpSuccess(response.body));
    history.push("/signIn");
  } catch (error) {
    yield errorHandler(error, signFailure);
  }
}

function* restoreAccount({ payload }) {
  try {
    const { username } = payload.params;

    const { response } = yield race({
      response: call(api.put, `/user/restore/${username}`),
      timeout: call(timer),
    });

    yield put(restoreAccountSuccess(response.data));
  } catch (error) {
    yield errorHandler(error, signFailure);
  }
}

function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

function signOut() {
  api.defaults.headers.Authorization = null;

  console.tron.log("Me lanca ai.");
  history.push("/");
}

export default all([
  takeLatest("persist/REHYDRATE", setToken),
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_UP_REQUEST", signUp),
  takeLatest("@auth/RESTORE_ACCOUNT_REQUEST", restoreAccount),
  takeLatest("@auth/SIGN_OUT", signOut),
]);
