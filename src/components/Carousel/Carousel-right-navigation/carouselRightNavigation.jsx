import React, {useState, useEffect} from 'react'
import { Swiper } from 'swiper'
//import { useSwiper } from 'swiper/react';
import {ReactComponent as RightArrow} from "../../../assets/right-navigation.svg"
import "./carousel-right-navigation.css"


const Carouselrightnavigation = () => {
  //const swiper = useSwiper();
  const [isEnd, setEnd] = useState(Swiper.isEnd)

  useEffect(() => {
    Swiper.on("slideChange", function() {
      setEnd(Swiper.isEnd)
    })
  }, [])
  return (
    <div className= "rightNav">
      {!isEnd && <RightArrow onClick={() => Swiper.slideNext()} />}
    </div>
  )
}

export default Carouselrightnavigation;