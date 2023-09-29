import React, { useEffect } from "react";
import { Swiper } from "swiper";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import LeftNavigation from "./Carousel-left-navigation/carouselLeftNavigation.jsx";
import RightNavigation from "./Carousel-right-navigation/carouselRightNavigation.jsx";
import "swiper/swiper-bundle.css"; // Import Swiper's CSS
import "./carousel.css";

const Controls = ({ data }) => {
  //const swiper = useSwiper();

  useEffect(() => {
    Swiper.slideTo(0);
  }, [data]);
};

const carousel = ({ data, component }) => {
  return (
    <div className="swipper-wrapper">
      <Swiper
        sx={{ padding: "0 20px" }}
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
          return <SwiperSlide>{component(item)}</SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
};

export default carousel;
