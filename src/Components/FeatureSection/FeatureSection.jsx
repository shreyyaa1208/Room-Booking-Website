import React from "react";
import "./styles.css";
import Kids from "../../assets/kids.jpg";
import Wifi from "../../assets/wifi.png";
import Car from "../../assets/car.png";
import Gym from "../../assets/gym.png";
import Food from "../../assets/tee.png";
import Fit from "../../assets/exercise.png";
import TV from "../../assets/tv.png";

const FeatureSection = () => {
  return (
    <div className="feature-container">
      <div className="img-container">
        <img src={Kids} alt="kids" className="kid-img" />
      </div>
      <div className="text-container">
        <h3> We Now What You Want</h3>
        <p>
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry. Lorem<br></br> Ipsum Has Been The Industry's Standard Dummy
          Text Ever Since The 1500S, When{" "}
        </p>

        <div className="features-section">
          <div className="parking">
            <img src={Wifi} alt="wifi" className="wifi-img" />
            <p>Free Wifi</p>
          </div>
          <div className="parking">
            <img src={Car} alt="car" className="car-img" />
            <p>Free Parking</p>
          </div>
          <div className="parking">
            <img src={Gym} alt="gym" className="gym-img" />
            <p>Gym</p>
          </div>
          <div className="parking">
            <img src={Food} alt="food" className="food-img" />
            <p>Breakfast</p>
          </div>
          <div className="parking">
            <img src={Fit} alt="fit" className="fit-img" />
            <p>Excercise</p>
          </div>
          <div className="parking">
            <img src={TV} alt="TV" className="tv-img" />
            <p>TV</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FeatureSection;
