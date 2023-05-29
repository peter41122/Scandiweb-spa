const initialstate = {
  data: {},
};

const Product = (state = initialstate, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, data: action.payload };
    default:
      return { ...state };
  }
};

export default Product;
