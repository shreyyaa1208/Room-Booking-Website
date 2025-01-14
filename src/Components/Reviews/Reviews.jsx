import React from "react";
import "./styles.css";
import Card from "../../assets/Rectangle 76.png";

const Reviews = () => {
  return (
    <div>
      <div className="card-text">
        <h3>User Reviews</h3>
      </div>
      <div className="review-container">
        <div className="review-grid">
          <div className="review-item">
            <img src={Card} alt="review-card-1" className="card-img" />
            <div className="review-content">
              <p>
                {" "}
                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                Industry. Find Now
              </p>
            </div>
          </div>

          <div className="review-item">
            <img src={Card} alt="review-card-2" className="card-img" />
            <div className="review-content">
              <p>
                {" "}
                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                Industry. Find Now
              </p>
            </div>
          </div>
          <div className="review-item">
            <img src={Card} alt="review-card-3" className="card-img" />
            <div className="review-content">
              <p>
                {" "}
                Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                Industry. Find Now
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
