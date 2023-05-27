function BookInfo({ productInfo, handleChange }) {
  return (
    <>
      <div className="text-start text-muted ps-5 pt-3">
        Product - <b>Book</b> <i>Information</i>
      </div>
      <div className="mb-3 pt-3 row justify-content-center">
        <label
          htmlFor="weight"
          className="col-3 col-sm-2 col-md-1 col-lg-1 col-form-label text-start"
        >
          Weight
        </label>
        <div className="col-6">
          <input
            type="number"
            className="form-control"
            id="weight"
            placeholder=""
            name="weight"
            value={productInfo.weight}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="text-center pt-3 text-muted">
        Please, provide weight in Kg
      </div>
    </>
  );
}

export { BookInfo };
