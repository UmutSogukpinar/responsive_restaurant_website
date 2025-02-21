import React from "react";
import "./aboutUs.css";
import AboutUsCard from "./AboutUsCard";

const AboutUs = () => {
  return (
    <div id="about-us">
      <div id="about-us-up">
        <div className="headers">
          <h3 className="cursive-header">About Us</h3>
          <h1>
            <span className="order-h1-part">
              What <span className="h1-except">Our Customers</span>
            </span>
            <span className="order-h1-part">Say About Us</span>
          </h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eaque
          omnis, reprehenderit corporis illo laudantium a temporibus! Nisi
          recusandae labore dicta? Dolorum, porro ipsam? Odit reiciendis
          doloremque eum officiis hic?
        </p>
      </div>
      <div id="about-us-lower">
        <ul id="about-us-card-list">
          <li className="about-us-card-el">
          <AboutUsCard/>
          </li>
          <li className="about-us-card-el">
            <AboutUsCard/>
          </li>
          <li className="about-us-card-el">
          <AboutUsCard/>
          </li>
          <li className="about-us-card-el">
          <AboutUsCard/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
