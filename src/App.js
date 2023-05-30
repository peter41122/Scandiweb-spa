import React from "react";
import { BrowserRouter, HashRouter, Route, Routes, Navigate } from "react-router-dom";

import Footer from "./components/common/Footer";

import ProductList from "./views/ProductList";
import NewProduct from "./views/AddProduct";

import "./assets/styles/App.scss";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/product/list" element={<ProductList />} />
          <Route path="/product/new" element={<NewProduct />} />

          <Route path="/*" element={<Navigate replace to="/product/list" />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
