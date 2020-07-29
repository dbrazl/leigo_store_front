import { all } from "redux-saga/effects";

import auth from "./auth/saga";
import payament from "./payament/saga";
import products from "./products/saga";
import user from "./user/saga";

export default function* rootSaga() {
  return yield all([auth, payament, products, user]);
}
