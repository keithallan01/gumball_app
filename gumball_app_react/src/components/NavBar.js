import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="nav_ontainer">
        <a className="logo" href="/">
          Logo
        </a>
        <ul>
          <NavLink  exact to="/">Dashboard</NavLink>
          <NavLink exact to="/PostanAd">Post an Ad</NavLink>
          <NavLink to="/customer">Customer</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
