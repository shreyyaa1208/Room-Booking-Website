import React from "react";
import "./styles.css";
import People from "../../assets/gallery.jpg";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-text">
        <h3>Our Gallery</h3>
        <p>
          Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry. Ipsum Is Simply Dummy Text Of The Printing And Typesetting
          Industry. Ipsum
        </p>
        <button className="gal-btn">Find Now</button>
      </div>
      <div className="gallery-img">
        <img src={People} alt="people" className="people-img" />
      </div>
    </div>
  );
};
export default Gallery;
