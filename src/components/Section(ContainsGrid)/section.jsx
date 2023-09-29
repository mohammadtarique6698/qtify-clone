import React, { useState } from "react"; //rafce   //alt-shit-F for format the code
import "./section.css";
import { CircularProgress, Box } from "@mui/material";
import Carousel from "../Carousel/carousel.jsx"
import Card from "../Card/card";

const Section = ({ title, data, type }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="section">
      <div className="header">
        <h3 style={{ color: "var(--white-color)" }}>{title}</h3>
        <button className="toggle-text" onClick={handleToggle}>
          {toggle? "Show All" : "Collapse All"}
        </button>
      </div>
      {data.length === 0 ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <div className="wrapper-class">
          {!toggle?
            <div className="grid-wrapper">
              {data.map((item) => (
                <Card data={item} type="album" />
              ))}
            </div>: (
              <Carousel data={data} component={(data => <Card data={data} type={type} />)} />
            )}
        </div>
      )}
    </div>
  );
};

export default Section;
