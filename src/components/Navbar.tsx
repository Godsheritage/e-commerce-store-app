import React from "react";
// import { Link } from "react-router-dom";

const Navbar:React.FC = () => {
  return (
    <nav className="navbar">
      <h1>E-commerce-App</h1>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item pe-3">Home</li>
        <li className="nav-item">Cart</li>
      </ul>
    </nav>
  );
};

export default Navbar;
