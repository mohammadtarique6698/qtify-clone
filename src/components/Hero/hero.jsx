import React from "react";
import { ReactComponent as Headphone } from "../../assets/vibratingHeadphone.svg";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="promotion">
        <h2>100 Thousand Songs, ad-free</h2>
        <h2>Over thousands podcast episodes</h2>
      </div>
      <div className="headphone">
        <Headphone />
      </div>
    </div>
  );
};

export default Hero;