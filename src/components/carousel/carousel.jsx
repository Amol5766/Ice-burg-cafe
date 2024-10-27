import React, { useState, useEffect } from 'react';
import './carousel.css'; // Import the CSS file

const Carousel = ({ images, headers }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current slide

  // Automatically switch slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval); // Clean up on unmount
  }, [currentIndex]);

  // Move to the next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Move to the previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel">
      {/* Header dynamically changes based on the current image */}
      <h2 className="carousel-header neon-text">{headers[currentIndex]}</h2>

      <div className="carousel-inner">
        {/* Render the current image */}
        <img src={images[currentIndex]} alt="Carousel" className="carousel-image" />

        {/* Navigation Arrows */}
        <button className="carousel-arrow left" onClick={handlePrev}>&lt;</button>
        <button className="carousel-arrow right" onClick={handleNext}>&gt;</button>
      </div>

      {/* Indicators (dots) */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
