import React, { useState } from "react";
import "./App.css";
import Navbar from "./navbar/Navbar";
import Explore from "./explore/Explore";
import Order from "./order/Order";
import Advertisement from "./advertisement/Advertisement";
import Footer from "./footer/Footer";

function App() {
  const ScrollToTopButton = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div id="app">
      <Navbar />
      <Explore />
      <Order />
      <Advertisement />
      <Footer />
      <a id="up-card" onClick={ScrollToTopButton}>
        <i class="ri-arrow-up-circle-line"></i>
      </a>
    </div>
  );
}

export default App;
