import { all, takeLatest, call, put, race, select } from "redux-saga/effects";
import api from "../../../services/api";

import errorHandler from "../utils/errorHandler";
import timer from "../utils/timer";
import {
  requestsFailure,
  indexRequestsSuccess,
  resetPage,
  indexRequestsRequest,
} from "./actions";

function* indexRequests({ payload }) {
  try {
    const page = yield select((state) => state.requests.page);

    const { response } = yield race({
      response: call(api.get, `/requests?page=${page}`),
      timeout: call(timer),
    });

    yield put(indexRequestsSuccess(response.data));
    yield put(indexRequestsRequest());
  } catch (error) {
    yield put(resetPage());
    yield errorHandler(error, requestsFailure);
  }
}

export default all([
  takeLatest("@requests/INDEX_REQUESTS_REQUEST", indexRequests),
]);
