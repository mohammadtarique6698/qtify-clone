import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper';
import LeftNavigation from "./Carousel-left-navigation/carouselLeftNavigation.jsx";
import RightNavigation from "./Carousel-right-navigation/carouselRightNavigation.jsx";
import "./carousel.css";

const Carousel = ({ data, component }) => {
  const swiperRef = useRef(null);

  return (
    <div className="swiper-wrapper">
      <Swiper
        ref={swiperRef}
        style={{ padding: "0 20px"}}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
        navigation={{
          prevEl: '.leftNav',
          nextEl: '.rightNav',
        }}
        onSwiper={(swiper) => {
          // Pass the Swiper instance to the navigation components
          swiperRef.current = swiper;
        }}
      >
        <LeftNavigation swiper={swiperRef} />
        <RightNavigation swiper={swiperRef} />
        {/* {console.log("data", data)} */}
        {data.map((item, index) => (
          <SwiperSlide key={index}>{component(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;




