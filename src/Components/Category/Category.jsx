import React, { useState, useRef, useEffect } from "react";
import "./styles.css";
import House from "../../assets/Adobe Express 2024-09-25 21.12.55.png";

function Category() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const categoriesRef = useRef(null);
  const categories = [
    { title: "Rooms for Boys", subtitle: "Best Prize Rooms", image: House },
    { title: "Apartment", subtitle: "Best Prize Apartments", image: House },
    { title: "PG For Girls", subtitle: "Best Prize Rooms", image: House },
    { title: "PG For Girls", subtitle: "Best Prize Rooms", image: House },
    { title: "PG For Girls", subtitle: "Best Prize Rooms", image: House },
    { title: "PG For Girls", subtitle: "Best Prize Rooms", image: House },
  ];

  const totalSlides = categories.length - 2;

  useEffect(() => {
    if (categoriesRef.current) {
      categoriesRef.current.style.transform = `translateX(-${
        currentIndex * 33.333
      }%)`;
    }
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, totalSlides - 1));
  };

  return (
    <div>
      <div className="container">
        <div className="top-category-rooms">
          <p>Top Category Rooms</p>
        </div>
        <div className="category-buttons">
          <button
            className="arrow"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            &#9664;
          </button>
          <button
            className="arrow"
            onClick={handleNext}
            disabled={currentIndex === totalSlides - 1}
          >
            &#9654;
          </button>
        </div>
      </div>
      <div className="categories-wrapper">
        <div className="categories" ref={categoriesRef}>
          {categories.map((category, index) => (
            <div key={index} className="category">
              <img src={category.image} alt={category.title} />
              <div className="category-info">
                <h3>{category.title}</h3>
                <p>{category.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
