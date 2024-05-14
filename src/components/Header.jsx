import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css";

function Header() {
  return (
    <div className="header_container">
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/about">
        About
      </Link>
      <Link className="link" to="/product">
        Product
      </Link>
      <Link className="link" to="/contact">
        Contact
      </Link>
    </div>
  );
}

export default Header;
