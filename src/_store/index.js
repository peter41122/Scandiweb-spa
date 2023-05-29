import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./products.slice";

export * from "./products.slice";

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});
