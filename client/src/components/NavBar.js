import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.png";

const NavBar = () => {
  return (
    <nav>
      <div className="nav_container">
        <NavLink exact to="/">
          <img className="logo" src={logo} alt="logo" />
        </NavLink>
        <ul className="main-nav">
          <NavLink className="li" to="/PostanAd">
            Listing
          </NavLink>
          <NavLink className="li" to="/customer">
            Customer
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
