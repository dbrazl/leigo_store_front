import { all, takeLatest, put, call, race, select } from "redux-saga/effects";

import errorHandler from "../utils/errorHandler";
import timer from "../utils/timer";

import {
  indexProductsRequest,
  indexProductsSuccess,
  productsFailure,
  resetPage,
} from "./actions";

function* indexProducts() {
  try {
    const page = yield select((state) => state.products.page);

    const { response } = yield race({
      response: call(api.get, `/products?page=${page}`),
      timeout: call(timer),
    });

    yield put(indexProductsSuccess(response.data));
    yield put(indexProductsRequest());
  } catch (error) {
    yield pur(resetPage());
    yield errorHandler(error, productsFailure());
  }
}

export default all([
  takeLatest("@products/INDEX_PRODUCTS_REQUEST", indexProducts),
]);
