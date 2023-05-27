import React from "react";
import "../../assets/styles/productcard.scss";

function ProductCard({ product }) {
  const onSubmit = (e) => {
    e.preventDefault();
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
              />
              <label className="form-check-label" htmlFor={product.id}>
                SKU: {product.sku}
              </label>
            </div>
          </form>
          <h5>Name: {product.name}</h5>
          <p>Price: ${product.price}</p>
        </div>
      </div>
    </>
  );
}

export { ProductCard };
