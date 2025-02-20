import React from "react";
import "./navbar.css";
import logo from "../../public/img/log.png"

const Navbar = () => {
  return (
    <div id="navbar">
      <img src={logo} alt="" />
      <h2>Food In</h2>
      <ul id="navbar-list">
        <li className="navbar-list-el"><a href="">Home</a></li>
        <li className="navbar-list-el"><a href="">Service</a></li>
        <li className="navbar-list-el"><a href="">About</a></li>
        <li className="navbar-list-el"><a href="">Contact</a></li>
      </ul>
      <button id="explore-button">Explore</button>
    </div>
  );
};

export default Navbar;
