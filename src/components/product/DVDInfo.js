function DVDInfo({ productInfo, handleChange }) {
  return (
    <>
      <div className="text-start text-muted ps-5 pt-3">
        Product - <b>DVD</b> <i>Information</i>
      </div>
      <div className="mb-3 pt-3 row justify-content-center">
        <label
          htmlFor="size"
          className="col-2 col-md-1 col-lg-1 col-form-label text-start"
        >
          Size
        </label>
        <div className="col-6">
          <input
            type="number"
            className="form-control"
            id="size"
            placeholder=""
            name="size"
            value={productInfo.size}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="text-center pt-3 text-muted">
        Please, provide size in Mb
      </div>
    </>
  );
}

export { DVDInfo };
