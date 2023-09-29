import React, { useEffect } from "react";
import {Swiper} from 'swiper/react'
import { SwiperSlide } from 'swiper/react';
import {useSwiperSlide} from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper';
import { useSwiper } from 'swiper/react';
import LeftNavigation from "./Carousel-left-navigation/carouselLeftNavigation.jsx";
import RightNavigation from "./Carousel-right-navigation/carouselRightNavigation.jsx";
import "./carousel.css";

const Controls = ({ data }) => {
  //console.log(data)
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0);
  }, [data]);
  return <></>
};

const Carousel = ({ data, component }) => {
  return (
    <div className="swipper-wrapper">
      <Swiper
        style={{ padding: "0 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <LeftNavigation />
        <RightNavigation />

        {data.map((item) => {
          return (<SwiperSlide>{component(item)}</SwiperSlide>);
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
