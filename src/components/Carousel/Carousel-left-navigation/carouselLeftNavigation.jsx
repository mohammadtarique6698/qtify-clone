import React, { useState, useEffect } from "react";
import { ReactComponent as LeftArrow } from "../../../assets/left-navigation.svg";
import "./carousel-left-navigation.css";

const CarouselLeftNavigation = ({ swiper }) => {
  useEffect(() => {
    if (swiper.current) {
      swiper.current.on("slideChange", () => {
        // Check if the swiper is at the beginning
        setIsBeginning(swiper.current.isBeginning);
      });
    }
  }, [swiper]);

  const handlePrevSlide = () => {
    if (swiper.current) {
      swiper.current.slidePrev();
    }
  };

  const [isBeginning, setIsBeginning] = useState(true);

  return (
    <div className="LeftNav">
      {<LeftArrow onClick={handlePrevSlide} />}
    </div>
  );
};

export default CarouselLeftNavigation;




