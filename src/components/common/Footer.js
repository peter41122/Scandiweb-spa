function Footer() {
  return (
    <footer className="py-3">
      <div className="container-fluid">
        <div className="align-items-center justify-content-xl-between row">
          <div className="col-6 col-xl-6">
            <div className="text-center text-xl-start">
              Mid-senior & Senior Web Developer test assignment
            </div>
          </div>
          <div className="col-6 col-xl-6">
            <div className="copyright text-center text-xl-end">
              © {new Date().getFullYear()} - Rustam Grigoriev
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
