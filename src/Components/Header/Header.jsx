import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import Corousel from "../../Components/Carousel/Corousel";
import Slide1 from "../../assets/home-page-slide-1.jpg";
import Slide2 from "../../assets/home-page-slide-2.jpg";
import Slide3 from "../../assets/home-page-slide-3.jpg";
import Phone from "../../assets/sr website banner image.png";
import Search from "../../assets/Butten.png";
import Locate from "../../assets/Locate Me icon.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-text">
        <h1 className="h1-text">The Perfect Room For You</h1>
        <p className="p-text">
          Save Time, Energy, and Money - Find and Book Your Room 100% Online.
        </p>
      </div>

      {/* Smartphone display with slideshow */}
      <div className="smartphone-display">
        <div className="phone-frame">
          <div className="slides-container">
            <Corousel />
          </div>
        </div>
      </div>

      {/* Search Bar below the slideshow */}
      <div className="header-content">
        <div className="search-bar">
          <input type="text" placeholder="Search for area, city name" />
          <button className="locate-btn">
            <span class="location-text">Locate me</span>
            <img src={Locate} alt="locate-img" />
          </button>
          <button className="search-btn">Search🔍</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
