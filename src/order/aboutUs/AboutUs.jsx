import React from "react";
import "./aboutUs.css";
import AboutUsCard from "./AboutUsCard";

const AboutUs = () => {

  const img1 = "/img/pic4.jpg";
  const img2 = "/img/pic5.jpg";
  const img3 = "/img/pic6.jpg";
  const img4 = "/img/pic7.jpg";

  const par1 = "lorem ipsum dolor sit amet consectetur adipisicing elit.";
  const par2 = "lorem ipsum dolor sit amet consectetur adipisicing elit.";
  const par3 = "lorem ipsum dolor sit amet consectetur adipisicing elit.";
  const par4 = "lorem ipsum dolor sit amet consectetur adipisicing elit.";

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
          <AboutUsCard img={img1} par={par1}/>
          </li>
          <li className="about-us-card-el">
            <AboutUsCard img={img2} par={par2}/>
          </li>
          <li className="about-us-card-el">
          <AboutUsCard img={img3} par={par3}/>
          </li>
          <li className="about-us-card-el">
          <AboutUsCard img={img4} par={par4}/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
