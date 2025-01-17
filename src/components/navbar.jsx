import React from "react";
import { Link } from "react-router-dom";  // Import Link for navigation
import { ShoppingCart } from "phosphor-react";  // Import the ShoppingCart icon from phosphor-react
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Shop </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
        <ShoppingCart size={32} />        </Link>
      </div>
    </div>
  );
};

export default Navbar;
