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
  const baseUrl = `/products`;
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
      async () => await axios.get(baseUrl, { headers })
    );
  }

  function register() {
    return createAsyncThunk(
      `${name}/register`,
      async (product) => await axios.post(baseUrl, product)
    )
  }

  function _delete() {
    return createAsyncThunk(
      `${name}/delete`,
      async (id) => await axios.delete(`delete-products/${product_ids}`)
    );
  }
}

function createExtraReducers() {
  return (builder) => {
    getAll();
    _delete();

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

    function _delete() {
      //   var { pending, fulfilled, rejected } = extraActions.getAll;
      //   builder
      //     .addCase(pending, (state, action) => {
      //       const product = state.list.value.find(
      //         (item) => item.id === action.meta.arg
      //       );
      //       product.isDeleting = true;
      //     })
      //     .addCase(fulfilled, (state, action) => {
      //       state.list.value = state.list.value.filter(
      //         (item) => item.id !== action.meta.arg
      //       );
      //     })
      //     .addCase(rejected, (state, action) => {
      //       const product = state.list.value.find(
      //         (item) => item.id === action.meta.arg
      //       );
      //       product.isDeleting = false;
      //     });
    }
  };
}
