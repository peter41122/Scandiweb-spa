import { combineReducers } from "redux";

import Product from "./Product.reducer.js";

const RootReducer = combineReducers({
  Product: Product,
});

export default RootReducer;
