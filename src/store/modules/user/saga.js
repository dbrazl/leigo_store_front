import { takeLatest, put, call, all, race, select } from "redux-saga/effects";
import api from "../../../services/api";

import { updateUserSuccess, userFailure, inactiveUserSuccess } from "./actions";

import errorHandler from "../utils/errorHandler";
import timer from "../utils/timer";

function* updateUser({ payload }) {
  try {
    const { body } = payload;

    const { response } = yield race({
      response: call(api.put, "/user", body),
      timeout: call(timer),
    });

    yield put(updateUserSuccess(response.data));
  } catch (error) {
    yield errorHandler(error, userFailure);
  }
}

function* inactive() {
  try {
    const username = yield select((state) => state.user.profile.username);

    yield race({
      response: call(api.put, `/user/inactive/${username}`),
      timeout: call(timer),
    });

    yield put(inactiveUserSuccess());
  } catch (error) {
    yield errorHandler(error, userFailure);
  }
}

export default all([
  takeLatest("@user/UPDATE_USER_REQUEST", updateUser),
  takeLatest("@user/INACTIVE_USER_REQUEST", inactive),
]);
