import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// create slice
const name = "products";
const initialState = createInitialState();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, extraReducers });

// exports
export const productActions = { ...slice.actions, ...extraActions };
export const productReducer = slice.reducer;

// implementation
function createInitialState() {
  return {
    products: {},
  };
}

function createExtraActions() {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods":
      "HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
  };

  return {
    getAll: getAll(),
    register: register(),
    _delete: _delete(),
  };

  function getAll() {
    return createAsyncThunk(
      `${name}/getAll`,
      async () => await axios.get("/products", { headers })
    );
  }

  function register() {
    return createAsyncThunk(
      `${name}/register`,
      async (product) => await axios.post("/products", product)
    );
  }

  function _delete() {
    return createAsyncThunk(
      `${name}/deleteProduct`,
      async function (product_ids, { dispatch }) {
        await axios.post("/delete-products", { product_ids });
        dispatch(productActions.getAll());
      }
    );
  }
}

function createExtraReducers() {
  return (builder) => {
    getAll();

    function getAll() {
      var { pending, fulfilled, rejected } = extraActions.getAll;
      builder
        .addCase(pending, (state) => {
          state.products = { loading: true };
        })
        .addCase(fulfilled, (state, action) => {
          state.products = action.payload;
        })
        .addCase(rejected, (state, action) => {
          state.products = { error: action.error };
        });
    }
  };
}
