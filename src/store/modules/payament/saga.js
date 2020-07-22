import { takeLatest, all, race, put, call } from "redux-saga/effects";
import api from "../../../services/api";

import {
  sendCreditCardPayamentSuccess,
  sendBilletPayamentSuccess,
  payamentFailure,
} from "./actions";

import errorHandler from "../utils/errorHandler";
import timer from "../utils/timer";

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
  takeLatest(
    "@payament/SEND_CREDIT_CARD_PAYAMENT_REQUEST",
    sendCreditCardPayament
  ),
  takeLatest("@payament/SEND_BILLET_PAYAMENT_REQUEST", sendBilletPayament),
]);
