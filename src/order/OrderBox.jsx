import React from "react";

const OrderBox = ({ img, title, par }) => {
  return (
    <div id="order-box">
      <img src={img} alt="" />
      <h2 style={{ color: "white" }}>{title}</h2>
      <p style={{ color: "rgb(136, 136, 136)" }}>{par}</p>
    </div>
  );
};

export default OrderBox;
