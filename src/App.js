import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Footer from "./components/common/Footer";

import ProductList from "./views/ProductList";
import NewProduct from "./views/AddProduct";

import "./assets/styles/App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/product" element={<ProductList />} />
          <Route path="/newproduct" element={<NewProduct />} />

          <Route path="/*" element={<Navigate replace to="/product" />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
