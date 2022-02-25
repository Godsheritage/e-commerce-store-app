import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h1>E-commerce-App</h1>
      <ul className="nav nav-pills nav-fill">
        <Link to="/" className="nav-link">
          <li className="nav-item">Home</li>
        </Link>
        <Link to="/cart" className="nav-link">
          <li className="nav-item">Cart</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
