import React from "react";
import "./cardandgridofcards.css";
//import { ReactComponent as SongImage } from "../../assets/song-image.svg";

const Card = ({ albumData }) => {
  if (!albumData || albumData.length === 0) {  // when albumData is undefined. At loading time, the state will be undefined
    return <div></div>; 
  }

  return (
    <div>
    <div className="top-album-heading">
        <h4>Top Albums :</h4>
    </div>
    <div className="grid">
      {albumData.map((item, index) => (
        <div className="card" key={index}>
          <div className="top-part">
            <div className="image">
              <img src= {item.image} alt= {item.title} style={{height: "11rem", width: "10rem", objectFit: "cover"}}/>
            </div>

            <div className="follows">
              <div className="oval">
                <p style={{ fontSize: "10px", color: "var(--white-color)" }}>
                  {item.follows}
                </p>
              </div>
            </div>
          </div>
          <div className="bottom-part">
            <p style={{ fontSize: "0.8rem" }}>{item.title}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Card;

