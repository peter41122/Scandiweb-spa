import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// import { productActions } from "../_store";

import productActions from "../_actions/Product.actions";
import Header from "../components/common/Header";

import { ProductCard } from "../components/product";

function ProductList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((state) => state.entity);

  const products = [
    { id: 1, sku: "PD001", name: "Book1", price: "25" },
    { id: 2, sku: "PD002", name: "Book2", price: "15" },
    { id: 3, sku: "PD003", name: "Book3", price: "30" },
    { id: 4, sku: "PD004", name: "Book4", price: "55" },
    { id: 5, sku: "PD005", name: "Book5", price: "75" },
    { id: 6, sku: "PD006", name: "Book6", price: "50" },
    { id: 7, sku: "PD007", name: "Book7", price: "10" },
    { id: 8, sku: "PD008", name: "Book8", price: "100" },
    { id: 9, sku: "PD009", name: "Book9", price: "100" },
    { id: 10, sku: "PD0010", name: "Book10", price: "110" },
    { id: 11, sku: "PD0011", name: "Book11", price: "111" },
    { id: 12, sku: "PD0012", name: "Book12", price: "112" },
    { id: 13, sku: "PD0013", name: "Book13", price: "113" },
    { id: 14, sku: "PD0014", name: "Book14", price: "114" },
    { id: 15, sku: "PD0015", name: "Book15", price: "115" },
  ];

  useEffect(() => {
    dispatch(productActions.getProducts());
    console.log("---------", store);
  }, [dispatch]);

  const isEmpty = (obj) => {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };

  const renderButtons = () => {
    return (
      <div className="button-panel">
        <button
          type="button"
          className="btn btn-primary btn-sm px-3 me-3"
          onClick={() => handleClick("/product/new")}
        >
          ADD
        </button>
        <button type="button" className="btn btn-danger btn-sm px-3 me-4">
          MASS DELETE
        </button>
      </div>
    );
  };

  const handleClick = (route, data) => {
    navigate(route, data);
  };

  return (
    <>
      <Header />
      <div className="py-5 px-5">
        <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-3 row-cols-md-4 g-4 py-5">
          {
            // !isEmpty(store.data)
            !isEmpty(products) ? (
              products.map((product, i) => (
                <div className="col" key={i}>
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              <div>No products to show.</div>
            )
          }
        </div>
        {renderButtons()}
      </div>
    </>
  );
}

export default ProductList;
