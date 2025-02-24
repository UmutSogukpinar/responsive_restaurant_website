import React from "react";
import "./advertisement.css";

const Advertisement = () => {

  const img = "../../public/img/right.png";

  return (
    <div id="advertisement">
      <div id="ad-left">
        <h3>Download App</h3>
        <h1>Get Started With Food In Today!</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut
          excepturi blanditiis sed nobis debitis nostrum possimus ipsum soluta
          voluptate omnis, laboriosam et ea saepe architecto accusantium
          quisquam doloremque, unde quas?
        </p>
        <button>Get The App</button>
      </div>
      <div id="ad-right">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Advertisement;
