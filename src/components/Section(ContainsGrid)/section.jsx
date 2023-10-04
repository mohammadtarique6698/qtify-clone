import React, { useEffect, useState } from "react"; //rafce   //alt-shit-F for format the code
import "./section.css";
import { CircularProgress, Box } from "@mui/material";
import Carousel from "../Carousel/carousel.jsx";
import Card from "../Card/card";
import BasicTabs from "../Tabs/tabs";

const Section = ({ title, data, type, filteredData=null }) => {
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = React.useState(0);
  
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    // console.log(newValue);
    // console.log(event);
  };

  const generateGenreSongsData = (search_criteria) => {
    console.log("Search Criteria:", search_criteria);
    const res = data.filter(item => item.genre.key.toLowerCase() === search_criteria)
    console.log("Filtered Data:", res);
    filteredData(res)
  }
  
  useEffect(() => {
    if(value===1) {
      generateGenreSongsData("rock")
    }
    if(value===2) {
      generateGenreSongsData("pop")
    }
    if(value===3) {
      generateGenreSongsData("jazz")
    }
    if(value===4) {
      generateGenreSongsData("blues")
    }
  }, [value])

  return (
    <div className="section">
      <div className="header">
        <h3 style={{ color: "var(--white-color)" }}>{title}</h3>
        {type === "album" ? (
          <button className="toggle-text" onClick={handleToggle}>
            {toggle ? "Show All" : "Collapse All"}
          </button>
        ) : null}
      </div>
      {type === "songs" ? <BasicTabs value={value} handleChange={handleChange}/> : null}
      {data.length === 0 ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <div className="wrapper-class">
          {toggle ? (
            <div className="grid-wrapper">
              {data.map((item) => (
                <Card data={item} type="album" />
              ))}
            </div>
          ) : (
            <Carousel
              data={data}
              component={(data) => <Card data={data} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
