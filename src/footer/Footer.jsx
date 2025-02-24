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
          <li className="fo-icon-el"></li>
          <li className="fo-icon-el"></li>
          <li className="fo-icon-el"></li>
        </ul>
      </div>
      <div className="fo-sub">
        <h3>About Us</h3>
        <ul id="fo-link-list">
          <li className="fo-link-el">About Us</li>
          <li className="fo-link-el">Features</li>
          <li className="fo-link-el">News</li>
          <li className="fo-link-el">Menu</li>
        </ul>
      </div>
      <div className="fo-sub">
        <h3>Company</h3>
        <ul id="fo-link-list">
          <li className="fo-link-el">My Food in</li>
          <li className="fo-link-el">Partner</li>
          <li className="fo-link-el">FAQ</li>
          <li className="fo-link-el">Blog</li>
        </ul>
      </div>
      <div className="fo-sub">
        <h3>Support</h3>
        <ul id="fo-link-list">
          <li className="fo-link-el">Account</li>
          <li className="fo-link-el">Support Center</li>
          <li className="fo-link-el">Feedback</li>
          <li className="fo-link-el">Contact Us</li>
          <li className="fo-link-el">Accessibility</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
