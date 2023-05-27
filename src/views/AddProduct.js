import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import productActions from "../_actions/Product.actions";
import Header from "../components/common/Header";
import { ProdTypeConsts } from "../_constants/Product.constants";
import { BookInfo, DVDInfo, FurnitureInfo } from "../components/product";
import "../assets/styles/addproduct-page.scss";

function AddProduct(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [productType, setProductType] = useState(ProdTypeConsts.DVD);
  const [productInfo, setProductInfo] = useState({
    sku: "",
    name: "",
    price: "",
    size: "",
    height: null,
    width: null,
    length: null,
    weight: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductInfo((prodInfo) => ({
      ...prodInfo,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(productActions.addProduct());
    console.log("-----", productInfo);
  };

  const handleProductTypeChange = (e) => {
    switch (e.target.value) {
      case ProdTypeConsts.DVD:
        setProductInfo({
          ...productInfo,
          size: "",
          height: null,
          width: null,
          length: null,
          weight: null,
        });
        break;
      case ProdTypeConsts.BOOK:
        setProductInfo({
          ...productInfo,
          size: null,
          height: null,
          width: null,
          length: null,
          weight: "",
        });
        break;
      case ProdTypeConsts.FURNITURE:
        setProductInfo({
          ...productInfo,
          size: null,
          height: "",
          width: "",
          length: "",
          weight: null,
        });
        break;
      default:
        break;
    }
    setProductType(e.target.value);
  };

  const handleClick = (route, data) => {
    navigate(route, data);
  };

  const renderProductTypeSwitch = (pType) => {
    switch (pType) {
      case ProdTypeConsts.DVD:
        return (
          <DVDInfo productInfo={productInfo} handleChange={handleInputChange} />
        );
        break;
      case ProdTypeConsts.BOOK:
        return (
          <BookInfo
            productInfo={productInfo}
            handleChange={handleInputChange}
          />
        );
        break;
      case ProdTypeConsts.FURNITURE:
        return (
          <FurnitureInfo
            productInfo={productInfo}
            handleChange={handleInputChange}
          />
        );
        break;
      default:
        break;
    }
  };

  const renderButtons = () => {
    return (
      <div className="button-panel">
        <button type="submit" className="btn btn-primary btn-sm px-3 me-3">
          SAVE
        </button>
        <button
          type="button"
          className="btn btn-danger btn-sm px-3 me-4"
          onClick={() => handleClick("/")}
        >
          CANCEL
        </button>
      </div>
    );
  };

  return (
    <>
      <Header link="/newproduct" />
      <div className="py-5 px-5">
        <div className="container py-5">
          <form
            className="bg-white text-start"
            id="product_form"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="mb-3 row">
              <label htmlFor="sku" className="col-2 col-form-label text-start">
                SKU
              </label>
              <div className="col-10">
                <input
                  type="text"
                  className="form-control"
                  id="sku"
                  placeholder=""
                  name="sku"
                  value={productInfo.sku}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="name" className="col-2 col-form-label text-start">
                Name
              </label>
              <div className="col-10">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder=""
                  name="name"
                  value={productInfo.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label
                htmlFor="price"
                className="col-2 col-form-label text-start"
              >
                Price
              </label>
              <div className="col-10">
                <div className="input-group">
                  <span className="input-group-text">$</span>
                  <input
                    type="number"
                    className="form-control"
                    aria-label="Amount (to the nearest dollar)"
                    id="price"
                    name="price"
                    value={productInfo.price}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mb-3 pb-3 row">
              <label
                htmlFor="productType"
                className="col-4 col-md-3 col-lg-2 col-form-label text-start"
              >
                Type switcher
              </label>
              <div className="col-8 col-md-9 col-lg-10">
                <div className="input-group">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="productType"
                    onChange={(e) => handleProductTypeChange(e)}
                  >
                    <option value="DVD" id="DVD">
                      DVD
                    </option>
                    <option value="Furniture" id="Furniture">
                      Furniture
                    </option>
                    <option value="Book" id="Book">
                      Book
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <hr />
            {renderProductTypeSwitch(productType)}
            {renderButtons()}
          </form>
        </div>
      </div>
    </>
  );
}

export default AddProduct;
