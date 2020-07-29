import { takeLatest, all, race, put, call, select } from "redux-saga/effects";
import api from "../../../services/api";

import {
  indexPayamentsRequest,
  indexPayamentsSuccess,
  sendCreditCardPayamentSuccess,
  sendBilletPayamentSuccess,
  payamentFailure,
  resetPage,
} from "./actions";

import errorHandler from "../utils/errorHandler";
import timer from "../utils/timer";

function* indexPayaments() {
  try {
    const page = yield select((state) => state.payament.page);
    const username = yield select((state) => state.user.profile.username);

    const { response } = yield race({
      response: call(api.get, `/payament?page=${page}&username=${username}`),
      timeout: call(timer),
    });

    yield put(indexPayamentsSuccess(response.data));
    yield put(indexPayamentsRequest());
  } catch (error) {
    yield put(resetPage());
    // yield errorHandler(error, payamentFailure);
  }
}

function* sendCreditCardPayament({ payload }) {
  try {
    const { body } = payload;

    yield race({
      response: call(api.post, "/payament/creditCard", body),
      timeout: call(timer),
    });

    yield put(sendCreditCardPayamentSuccess());
  } catch (error) {
    yield errorHandler(error, payamentFailure);
  }
}

function* sendBilletPayament({ payload }) {
  try {
    const { body } = payload;

    yield race({
      response: call(api.post, "/payament/billet", body),
      timeout: call(timer),
    });

    yield put(sendBilletPayamentSuccess());
  } catch (error) {
    yield errorHandler(error, payamentFailure);
  }
}

export default all([
  takeLatest("@payament/INDEX_PAYAMENTS_REQUEST", indexPayaments),
  takeLatest(
    "@payament/SEND_CREDIT_CARD_PAYAMENT_REQUEST",
    sendCreditCardPayament
  ),
  takeLatest("@payament/SEND_BILLET_PAYAMENT_REQUEST", sendBilletPayament),
]);
