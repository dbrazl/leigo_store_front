import { all, takeLatest, put, call, race, select } from "redux-saga/effects";
import api from "../../../services/api";

import errorHandler from "../utils/errorHandler";
import timer from "../utils/timer";

import {
  indexProductsRequest,
  indexProductsSuccess,
  productsFailure,
  resetPage,
  indexOneProductSuccess,
} from "./actions";

function* indexProducts() {
  try {
    const page = yield select((state) => state.products.page);

    const { response } = yield race({
      response: call(api.get, `/product?page=${page}`),
      timeout: call(timer),
    });

    yield put(indexProductsSuccess(response.data));
    yield put(indexProductsRequest());
  } catch (error) {
    yield put(resetPage());
    yield errorHandler(error, productsFailure);
  }
}

function* indexOneProduct({ payload }) {
  try {
    const { id } = payload.params;

    const { response } = yield race({
      response: call(api.get, `/product/${id}`),
      timeout: call(timer),
    });

    yield put(indexOneProductSuccess(response.data));
  } catch (error) {
    yield errorHandler(error, productsFailure);
  }
}

export default all([
  takeLatest("@products/INDEX_PRODUCTS_REQUEST", indexProducts),
  takeLatest("@products/INDEX_ONE_PRODUCT_REQUEST", indexOneProduct),
]);
