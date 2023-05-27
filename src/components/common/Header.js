import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../../assets/styles/common.scss";

function Header() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      setShow(window.scrollY > 40);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  });

  const handleClick = (route, data) => {
    navigate(route, data);
  };

  return (
    <>
      <header>
        <nav
          className={`navbar-top navbar-horizontal navbar-dark navbar navbar-expand-md py-2 ${
            show && "bg-scroll-show shadow"
          }`}
        >
          <div className="container-fluid">
            <span
              className="navbar-brand ps-4"
              onClick={() => handleClick("/")}
            >
              Scandiweb
            </span>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
