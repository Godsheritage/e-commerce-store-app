import React, { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { contextTypes } from "../shared/types";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHome } from "react-icons/fa";

const Navbar: React.FC = () => {
  const { cartItems } = useContext(ProductContext) as contextTypes;

  return (
    <nav className="navbar container-fluid">
      <h1 style={{ color: "white" }}>E-commerce-App</h1>
      <ul className="nav nav-pills nav-fill">
        <Link to="/" className="nav-link">
          <FaHome className="fa-5x" color = 'white' />
        </Link>
        <Link to="/cart" className="nav-link">
          <FaShoppingCart className="fa-5x position-relative" color = 'white' />
          <span className="position-absolute top-10 start-90 translate-middle badge rounded-pill bg-danger">
            {cartItems.length}
          </span>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
