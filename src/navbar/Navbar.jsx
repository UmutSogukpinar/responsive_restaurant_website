import React, { useEffect, useState, useCallback } from "react";
import "./navbar.css";
import logo from "../../public/img/log.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSmall, setIsSmall] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  const handleSize = useCallback(() => {
    setIsSmall(window.innerWidth < 850);
  }, []);

  const handleClicked = () => {
    if (isClicked) setIsClicked(false);
    else setIsClicked(true);
  };

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
      <div
        id="navbar-right"
        className={isSmall ? "small-navbar" : "big-navbar"}
      >
        <ul className="navbar-list">
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
      <div
        id="navbar-right-s"
        className={isSmall ? "small-navbar" : "big-navbar"}
      >
        <a onClick={handleClicked}>
          <i className="ri-menu-line"></i>
        </a>
      </div>
      <div
        id="search-colon"
        className={`${isClicked ? "fade-in" : ""} ${
          isSmall ? "small-navbar" : "big-navbar"
        }`.trim()}
      >
        <ul className="navbar-list">
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
          <li className="navbar-list-el">
            <button>Explore</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
