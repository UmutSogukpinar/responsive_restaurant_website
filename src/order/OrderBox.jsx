import React from "react";

const OrderBox = ({ img, title, par }) => {
  return (
    <div id="order-box">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <p>{par}</p>
    </div>
  );
};

export default OrderBox;
