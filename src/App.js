import React from "react";

import { RouterProvider } from "react-router-dom";
import { ROUTES } from "./router/routes";

import Footer from "./components/common/Footer";

import "./assets/styles/App.scss";

function App() {
  return (
    <div className="App">
      <RouterProvider router={ROUTES} />
      <Footer />
    </div>
  );
}

export default App;
