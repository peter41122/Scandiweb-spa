import axios from "axios";

const productActions = {
  getProducts,
  addProduct,
  removeProduct,
};

function getProducts() {
  return async (dispatch) => {
    return new Promise((resolve) => {
      axios
        .get("/products")
        .then((response) => {
          dispatch({
            type: "GET_PRODUCTS",
            payload: response.data,
          });
          resolve({ success: "success" });
        })
        .catch((e) => {
          console.log(e);
          resolve();
        });
    });
  };
}

function addProduct(productInfo) {
  return async (dispatch) => {
    return new Promise((resolve) => {
      axios
        .post("/add", { productInfo })
        .then((response) => {
          dispatch(getProducts());
          resolve({ success: "success" });
        })
        .catch((e) => {
          console.log(e);
          resolve();
        });
    });
  };
}

function removeProduct(selectedList) {
  return async (dispatch) => {
    return new Promise((resolve) => {
      axios
        .post("/delete", { selectedList })
        .then((response) => {
          dispatch(getProducts());
          resolve({ success: "success" });
        })
        .catch((e) => {
          console.log(e);
          resolve();
        });
    });
  };
}

export default productActions;
