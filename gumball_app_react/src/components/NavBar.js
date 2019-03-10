import React from "react";
import {Link, NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="nav_ontainer">
        <a className="logo" href="/">
          Logo
        </a>
        <ul>
          <NavLink exact to="/">Home</NavLink>
          <NavLink to="/customer">Customer</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
