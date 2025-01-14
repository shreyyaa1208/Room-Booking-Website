import React from "react";
import "./styles.css";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" className="navbar-logo" />
      </div>
      <div className="navbar-buttons">
        <button className="btn btn-add">+ Add Listing</button>
        <a href="/login">
          {" "}
          <button className="btn btn-login">Log In</button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
