import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../logo.png'

const NavBar = () => {
  return (
    <nav>
      <div className="nav_container">
        <img className="logo" src={logo}>
    
        </img>

        <ul className="main-nav">
         <NavLink exact to="/">
            Dashboard
          </NavLink> 
          <NavLink className="li" to="/PostanAd">
            Post an Ad
          </NavLink>
          <NavLink className="li" to="/customer">Customer</NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
