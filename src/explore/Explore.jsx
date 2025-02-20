import React from "react";
import "./explore.css";

const Explore = () => {
  return (
    <div id="explore">
      <div id="dark-effect"></div>
      <div id="explore-info">
        <h3>Welcome To Fast Food Restaurant</h3>
        <h1>
          <span className="ex-info-h1-up">Enjoy Our</span>
          <span className="ex-info-h1-down">Delicious Meal</span>
        </h1>
        <div id="explore-btn-list">
          <button className="explore-btn e-btn-l">Explore More</button>
          <button className="explore-btn e-btn-r">
            <i class="ri-play-circle-line"></i>
            Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
