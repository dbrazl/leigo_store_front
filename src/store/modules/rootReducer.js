import { combineReducers } from "redux";

import auth from "./auth/reducer";
import cart from "./cart/reducer";
import payament from "./payament/reducer";
import products from "./products/reducer";
import requests from "./requests/reducer";
import user from "./user/reducer";
import route from "./route/reducer";

export default combineReducers({
  auth,
  cart,
  payament,
  products,
  requests,
  user,
  route,
});
