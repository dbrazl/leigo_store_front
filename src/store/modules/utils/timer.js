import { delay } from "redux-saga/effects";

function* timer(time = 30000) {
  yield delay(time);
  throw new Error("Timeout");
}

export default timer;
