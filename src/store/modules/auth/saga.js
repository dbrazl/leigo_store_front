import { takeLatest, all, put, call, race } from "redux-saga/effects";
import api from "../../../services/api";

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

    yield put(signInSuccess(response.data));
  } catch (error) {
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
  } catch (error) {
    yield errorHandler(error, signFailure);
  }
}

function* restoreAccount({ payload }) {
  try {
    const { username } = payload.params;

    const { response } = yield race({
      response: call(api.put, `/restore/${username}`),
      timeout: call(timer),
    });

    yield put(restoreAccountSuccess(response.data));
  } catch (error) {
    yield errorHandler(error, signFailure);
  }
}

export default all([
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_UP_REQUEST", signUp),
  takeLatest("@auth/RESTORE_ACCOUNT_SUCCESS", restoreAccount),
]);
