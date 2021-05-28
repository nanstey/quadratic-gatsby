import React, { useState } from "react";
import PropTypes from "prop-types";

import { Carousel, CarouselItem } from "react-bootstrap";
import ImageCard from "components/ImageCard";

import "./HeroCarousel.scss";

const HeroCarousel = ({ slides }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <Carousel
      className="hero-carousel"
      activeIndex={activeSlideIndex}
      slide={true}
      controls={false}
      interval={5000}
      pause={false}
      wrap={true}
      indicators={false}
      onSelect={() => {
        setActiveSlideIndex((activeSlideIndex + 1) % slides.length);
      }}
    >
      {slides.map((slide) => {
        return (
          <CarouselItem key={slide.imageFileName}>
            <ImageCard
              imageFileName={slide.imageFileName}
              header={slide.header}
              subheader={slide.subheader}
            />
          </CarouselItem>
        );
      })}
    </Carousel>
  );
};

HeroCarousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      imageFileName: PropTypes.string,
      header: PropTypes.string,
      subheader: PropTypes.string,
    }),
  ).isRequired,
};

export default HeroCarousel;
