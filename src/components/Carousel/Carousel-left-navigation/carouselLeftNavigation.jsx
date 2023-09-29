import React, { useState, useEffect } from "react";
import { Swiper } from "swiper";
//import { useSwiper } from "swiper/react";
import { ReactComponent as LeftArrow } from "../../../assets/left-navigation.svg";
import "./carousel-left-navigation.css";

const Carouselleftnavigation = () => {
  //const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(Swiper.isBeginning);

  useEffect(() => {
    Swiper.on("slideChange", function () {
      setIsBeginning(Swiper.isBeginning);
    });
  }, []);

  return (
    <div className="LeftNav">
      {!isBeginning && <LeftArrow onClick={() => Swiper.slidePrev()} />}
    </div>
  );
};

export default Carouselleftnavigation;
