import React from "react";
import "./order.css";
import OrderBox from "./OrderBox";
import AboutUs from "./aboutUs/AboutUs";

const Order = () => {
  const title1 = "Easy To Order";
  const title2 = "Fastest Delivery";
  const title3 = "Good Quality";

  const par1 = "You Only Need A Few Steps In Ordering Food";
  const par2 = "We Provide The Fastest Delivery Service";
  const par3 = "We Provide The Best Quality Food For You";

  const img1 = "../../public/img/pic1.png";
  const img2 = "../../public/img/pic2.png";
    const img3 = "../../public/img/pic3.png";

  return (
    <div id="order">
      <div id="service">
        <div className="headers">
          <h3 className="cursive-header">Our Services</h3>
          <h1>
            <span className="order-h1-part">
              Best <span className="h1-except">Quality Food</span>
            </span>
            <span className="order-h1-part">Order Now</span>
          </h1>
        </div>
        <ul id="order-card-list">
          <li className="order-card-list-el">
            <OrderBox img={img1} title={title1} par={par1} />
          </li>
          <li className="order-card-list-el">
            <OrderBox img={img2} title={title2} par={par2} />
          </li>
          <li className="order-card-list-el">
            <OrderBox img={img3} title={title3} par={par3} />
          </li>
        </ul>
      </div>
      <AboutUs />
    </div>
  );
};

export default Order;
