function FurnitureInfo({ productInfo, handleChange }) {
  return (
    <>
      <div className="text-start text-muted ps-5 pt-3">
        Product - <b>Furniture</b> <i>Information</i>
      </div>
      <div className="mb-3 pt-3 row justify-content-center">
        <label
          htmlFor="height"
          className="col-3 col-sm-2 col-md-1 col-lg-1 col-form-label text-start"
        >
          Height
        </label>
        <div className="col-6">
          <input
            type="number"
            className="form-control"
            id="height"
            placeholder=""
            name="height"
            value={productInfo.height}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="mb-3 pt-3 row justify-content-center">
        <label
          htmlFor="width"
          className="col-3 col-sm-2 col-md-1 col-lg-1 col-form-label text-start"
        >
          Width
        </label>
        <div className="col-6">
          <input
            type="number"
            className="form-control"
            id="width"
            placeholder=""
            name="width"
            value={productInfo.width}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="mb-3 pt-3 row justify-content-center">
        <label
          htmlFor="length"
          className="col-3 col-sm-2 col-md-1 col-lg-1 col-form-label text-start"
        >
          Length
        </label>
        <div className="col-6">
          <input
            type="number"
            className="form-control"
            id="length"
            placeholder=""
            name="length"
            value={productInfo.length}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="text-center pt-3 text-muted">
        Please, provide dimensions in HxWxL(cm) format
      </div>
    </>
  );
}

export { FurnitureInfo };
