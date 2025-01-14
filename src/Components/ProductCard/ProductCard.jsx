import React from "react";
import "./styles.css";
import Room from "../../assets/rooms.jpg";
import Location from "../../assets/Icon.png";

const ProductCard = () => {
  return (
    <div>
      <div className="card-text">
        <h3>Find Rooms In Your City</h3>
        <div class="card-button">
          <button className="card-btn">Find Now</button>
        </div>
      </div>
      <div className="card-layout">
        <div className="card">
          <div className="card-image">
            <div className="room-img">
              <img src={Room} alt="rooms" className="place-room" />
            </div>
          </div>
          <div className="card-content">
            <h3 className="card-title">Mumbai (120 Rooms) </h3>{" "}
            <p className="card-location">
              <span className="location-icon">
                <img src={Location} alt="location" className="icon-img" />
              </span>{" "}
              S/W INDIA
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <div className="room-img">
              <img src={Room} alt="rooms" className="place-room" />
            </div>
          </div>
          <div className="card-content">
            <h3 className="card-title">Delhi (120)</h3>
            <p className="card-location">
              <span className="location-icon">
                {" "}
                <img src={Location} alt="location" className="icon-img" />
              </span>{" "}
              S/W INDIA
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <div className="room-img">
              <img src={Room} alt="rooms" className="place-room" />
            </div>
          </div>
          <div className="card-content">
            <h3 className="card-title">Bangalore (120)</h3>
            <p className="card-location">
              <span className="location-icon">
                {" "}
                <img src={Location} alt="location" className="icon-img" />
              </span>{" "}
              S/W INDIA
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <div className="room-img">
              <img src={Room} alt="rooms" className="place-room" />
            </div>
          </div>
          <div className="card-content">
            <h3 className="card-title">Hyderabad (120)</h3>
            <p className="card-location">
              <span className="location-icon">
                {" "}
                <img src={Location} alt="location" className="icon-img" />
              </span>{" "}
              S/W INDIA
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <div className="room-img">
              <img src={Room} alt="rooms" className="place-room" />
            </div>
          </div>
          <div className="card-content">
            <h3 className="card-title">Hyderabad (120)</h3>
            <p className="card-location">
              <span className="location-icon">
                {" "}
                <img src={Location} alt="location" className="icon-img" />
              </span>{" "}
              S/W INDIA
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <div className="room-img">
              <img src={Room} alt="rooms" className="place-room" />
            </div>
          </div>
          <div className="card-content">
            <h3 className="card-title">Hyderabad (120)</h3>
            <p className="card-location">
              <span className="location-icon">
                {" "}
                <img src={Location} alt="location" className="icon-img" />
              </span>{" "}
              S/W INDIA
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <div className="room-img">
              <img src={Room} alt="rooms" className="place-room" />
            </div>
          </div>
          <div className="card-content">
            <h3 className="card-title">Hyderabad (120)</h3>
            <p className="card-location">
              <span className="location-icon">
                {" "}
                <img src={Location} alt="location" className="icon-img" />
              </span>{" "}
              S/W INDIA
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-image">
            <div className="room-img">
              <img src={Room} alt="rooms" className="place-room" />
            </div>
          </div>
          <div className="card-content">
            <h3 className="card-title">Hyderabad (120)</h3>
            <p className="card-location">
              <span className="location-icon">
                {" "}
                <img src={Location} alt="location" className="icon-img" />
              </span>{" "}
              S/W INDIA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
