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
  const store = useSelector(state => state.Product);

  useEffect(() => {
    dispatch(productActions.getProducts());
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
            !isEmpty(store.data.entity) ? (
              store.data.entity.map((product, i) => (
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
