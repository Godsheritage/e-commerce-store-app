import React from "react";
import { Link } from "react-router-dom";
import {FaShoppingCart, FaHome} from 'react-icons/fa'

const Navbar: React.FC = () => {
  return (
    <nav className="navbar bg-warning">
      <h1>E-commerce-App</h1>
      <ul className="nav nav-pills nav-fill">
        <Link to="/" className="nav-link">
          <FaHome className="fa-5x"/>
        </Link>
        <Link to="/cart" className="nav-link">
          <FaShoppingCart className="fa-5x"/>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
