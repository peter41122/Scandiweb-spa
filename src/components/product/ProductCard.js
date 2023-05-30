import React, { useState } from "react";
import "../../assets/styles/productcard.scss";

function ProductCard({ product, handleCheckBox }) {
  const [checked, setChecked] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const handleCheck = (e) => {
    setChecked(!checked);
    handleCheckBox({id: e.target.id, value: !checked})
  };

  return (
    <>
      <div className="card  mb-3 product-card">
        <div className="card-body">
          <form
            className="pt-6 pb-8 mb-4 bg-white rounded text-start"
            onSubmit={(e) => onSubmit(e)}
          >
            <div className="form-check">
              <input
                className="form-check-input delete-checkbox"
                type="checkbox"
                value={product.id}
                id={product.id}
                onClick={(e) => handleCheck(e)}
              />
              <label className="form-check-label" htmlFor={product.id}>
                {product.sku}
              </label>
            </div>
          </form>
          <h5>{product.name}</h5>
          <p>${product.price}</p>
        </div>
      </div>
    </>
  );
}

export { ProductCard };
