import React from "react";

import navImg from "../../assets/img.jpg";

import "./navbar.style.css";

const Navbar = () => {
  return (
    <nav>
      <h1 className="nav-title">
        <span>XERO</span> Team
      </h1>
      <img src={navImg} alt="" />
    </nav>
  );
};

export default Navbar;
