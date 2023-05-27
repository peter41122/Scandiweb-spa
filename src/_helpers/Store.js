import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import RootReducer from "../_reducers";

const loggerMiddleware = createLogger();

const Store = createStore(
  RootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

export default Store;
