import React, { useState, useEffect } from 'react';
import { ReactComponent as RightArrow } from '../../../assets/right-navigation.svg';
import "./carousel-right-navigation.css";

const CarouselRightNavigation = ({ swiper }) => {
  useEffect(() => {
    if (swiper.current) {
      swiper.current.on('slideChange', () => {
        // Check if the swiper is at the end
        setIsEnd(swiper.current.isEnd);
      });
    }
  }, [swiper]);

  const handleNextSlide = () => {
    if (swiper.current) {
      swiper.current.slideNext();
    }
  };

  const [isEnd, setIsEnd] = useState(true);

  return (
    <div className="rightNav">
      {<RightArrow onClick={handleNextSlide} />}
    </div>
  );
};

export default CarouselRightNavigation;



