import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div className="fo-sub">
        <h3>Food In</h3>
        <p>
          Our job is to fill your tummy with delicious food and with fast and
          free delivery time.
        </p>
        <ul id="fo-icon-list">
          <li className="fo-icon-el">
            <a href="">
              <i class="ri-facebook-fill"></i>
            </a>
          </li>
          <li className="fo-icon-el">
            <a href="">
              <i class="ri-instagram-fill"></i>
            </a>
          </li>
          <li className="fo-icon-el">
            <a href="">
              <i class="ri-twitter-x-fill"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="fo-sub">
        <h3>About Us</h3>
        <ul id="fo-link-list">
          <li className="fo-link-el">
            <a href="">About Us</a>
          </li>
          <li className="fo-link-el">
            <a href="">Features</a>
          </li>
          <li className="fo-link-el">
            <a href="">News</a>
          </li>
          <li className="fo-link-el">
            <a href="">Menu</a>
          </li>
        </ul>
      </div>
      <div className="fo-sub">
        <h3>Company</h3>
        <ul id="fo-link-list">
          <li className="fo-link-el">
            <a href="">My Food in</a>
          </li>
          <li className="fo-link-el">
            <a href="">Partner</a>
          </li>
          <li className="fo-link-el">
            <a href="">FAQ</a>
          </li>
          <li className="fo-link-el">
            <a href="">Blog</a>
          </li>
        </ul>
      </div>

      <div className="fo-sub">
        <h3>Support</h3>
        <ul id="fo-link-list">
          <li className="fo-link-el">
            <a href="">Account</a>
          </li>
          <li className="fo-link-el">
            <a href="">Support Center</a>
          </li>
          <li className="fo-link-el">
            <a href="">Feedback</a>
          </li>
          <li className="fo-link-el">
            <a href="">Contact Us</a>
          </li>
          <li className="fo-link-el">
            <a href="">Accessibility</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
