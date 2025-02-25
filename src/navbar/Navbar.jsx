import React, { useEffect, useState, useCallback } from "react";
import "./navbar.css";
import logo from "../../public/img/log.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSmall, setIsSmall] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);
  
  const handleSize = useCallback(() => {
    setIsSmall(window.innerWidth < 850);
  }, []);

  useEffect(() => {
    handleSize();
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return (
    <div id="navbar" className={scrolled ? "scrolled" : ""}>
      <div id="navbar-left">
        <img src={logo} alt="" />
        <h2>Food In</h2>
      </div>
      <div id="navbar-right" className={isSmall ? "small-navbar" : "big-navbar"}>
        <ul id="navbar-list">
          <li className="navbar-list-el">
            <a href="">Home</a>
          </li>
          <li className="navbar-list-el">
            <a href="">Service</a>
          </li>
          <li className="navbar-list-el">
            <a href="">About</a>
          </li>
          <li className="navbar-list-el">
            <a href="">Contact</a>
          </li>
        </ul>
        <button id="explore-button">Explore</button>
      </div>
      <div id="navbar-right-s" className={isSmall ? "small-navbar" : "big-navbar"}></div>
    </div>
  );
};

export default Navbar;
