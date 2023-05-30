// react router dom imports
import { Navigate, createHashRouter } from "react-router-dom";

// pages imports
import ProductList from "../views/ProductList";
import AddProduct from "../views/AddProduct";

import { HOME_ROUTE } from "../utils";

export const ROUTES = createHashRouter([
  {
    path: HOME_ROUTE,
    element: <ProductList />,
  },
  {
    path: "/product/new",
    element: <AddProduct />,
  },
  {
    path: "*",
    element: <Navigate to={HOME_ROUTE} />,
  },
]);
