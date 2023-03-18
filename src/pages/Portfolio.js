// Portfolio.js
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./pageStyling/Portfolio.css";

const Portfolio = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 3000, min: 1280 }, items: 5 },
    desktop: { breakpoint: { max: 1279, min: 768 }, items: 3 },
    tablet: { breakpoint: { max: 767, min: 576 }, items: 2 },
    mobile: { breakpoint: { max: 575, min: 0 }, items: 1 },
  };

  const colors = ["red", "green", "blue", "orange"];
  const images = Array(10)
    .fill()
    .map((_, index) => (
      <div
        key={index}
        className="box"
        style={{ backgroundColor: colors[index % colors.length] }}
      ></div>
    ));

  return (
    <div id="portfolio" className="portfolio-section">
      <Carousel
        responsive={responsive}
        draggable={true}
        className="carousel-centered"
      >
        {images}
      </Carousel>
    </div>
  );
};

export default Portfolio;
