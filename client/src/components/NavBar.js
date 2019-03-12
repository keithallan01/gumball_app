import React from "react";
import { NavLink } from "react-router-dom";
import gumball_logo from "../gumball_logo.png";

const NavBar = () => {
  return (
    <nav>
      <div className="nav_container">
        <NavLink exact to="/">
          <img className="logo" src={gumball_logo} alt="gumball_logo" />
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
