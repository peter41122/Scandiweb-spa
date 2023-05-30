import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { productActions } from "../_store";

import Header from "../components/common/Header";

import { ProductCard } from "../components/product";

function ProductList() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const store = useSelector((state) => state.Products.products);
  const [selectedItem, setSelectedItem] = useState({});

  useEffect(() => {
    dispatch(productActions.getAll());
  }, [dispatch]);

  const renderButtons = () => {
    return (
      <div className="button-panel">
        <button
          type="button"
          className="btn btn-primary btn-sm px-3 me-3"
          onClick={() => handleAddClick()}
        >
          ADD
        </button>
        <button
          type="button"
          className="btn btn-danger btn-sm px-3 me-4"
          onClick={() => handleDelClick()}
        >
          MASS DELETE
        </button>
      </div>
    );
  };

  const handleAddClick = () => {
    navigate("/product/new");
  };

  async function handleDelClick() {
    const product_ids = getKeyByValue(selectedItem, true);
    try {
      await dispatch(productActions._delete(product_ids)).unwrap();
    } catch (error) {
      console.log(error);
    }
  }

  const handleCheckBox = (obj) => {
    setSelectedItem((item) => ({
      ...item,
      [obj.id]: obj.value,
    }));
  };

  function getKeyByValue(object, value) {
    return Object.keys(object).filter((key) => object[key] === value);
  }

  return (
    <>
      <Header />
      <div className="py-5 px-5">
        <div className="row row-cols-1 row-cols-xs-2 row-cols-sm-3 row-cols-md-4 g-4 py-5">
          {store?.data?.entity?.map((product, i) => (
            <div className="col" key={i}>
              <ProductCard product={product} handleCheckBox={handleCheckBox} />
            </div>
          ))}
        </div>
        {renderButtons()}
      </div>
    </>
  );
}

export default ProductList;
